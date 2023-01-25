import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { HeroesGameController } from './heroes.controller';
import { QueryHandlers } from './queries/handlers';
import { HeroRepository } from './repository/hero.repository';
import { HeroesGameSagas } from './sagas/heroes.sagas';
import { EventStoreModule, EventStore, EventStoreSubscriptionType } from '@juicycleff/nestjs-event-store';
import { HeroFoundItemHandler } from './events/handlers/hero-found-item.handler';
import { HeroKilledDragonHandler } from './events/handlers/hero-killed-dragon.handler';
import { HeroFoundItemEvent } from './events/impl/hero-found-item.event';
import { HeroKilledDragonEvent } from './events/impl/hero-killed-dragon.event';

@Module({
  imports: [CqrsModule,
    EventStoreModule.registerFeature({
      featureStreamName: '$ce-hero',
      type: 'event-store',
      subscriptions: [
        {
          type: EventStoreSubscriptionType.Persistent,
          stream: '$ce-hero',
          persistentSubscriptionName: 'hero',
          resolveLinkTos: true,  // Default is true (Optional)
        },
      ],
      eventHandlers: {
        HeroFoundItemEvent: (data) => {
          //console.log(data);
          return new HeroFoundItemEvent(data);
        },
        HeroKilledDragonEvent: (data) => {
          console.log(data);
          return  new HeroKilledDragonEvent(data);
        },
      },
    }),
  ],
  controllers: [HeroesGameController],
  providers: [
    HeroRepository,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    HeroesGameSagas,
  ],
})
export class HeroesGameModule {}