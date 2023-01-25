import { Module } from '@nestjs/common';
import { HeroesGameModule } from './heroes/heroes.module';
import { EventStoreModule } from '@juicycleff/nestjs-event-store';

@Module({
  imports: [
    EventStoreModule.register({
      type: 'event-store',
      tcpEndpoint: {
        host: '134.209.108.174',
        port: 1113,
      },
      options: {
        // maxRetries: 1000, // Optional
        // maxReconnections: 1000,  // Optional
        // reconnectionDelay: 1000,  // Optional
        // heartbeatInterval: 1000,  // Optional
        // heartbeatTimeout: 1000,  // Optional
        defaultUserCredentials: {
          username: 'admin',
          password: 'changeit',
        },
      },
    }),
    HeroesGameModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
