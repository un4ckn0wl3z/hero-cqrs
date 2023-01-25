import { AggregateRoot } from '@nestjs/cqrs';
import { HeroFoundItemEvent } from '../events/impl/hero-found-item.event';
import { HeroKilledDragonEvent } from '../events/impl/hero-killed-dragon.event';
import { HeroFoundItemEventParam } from '../events/params/hero-found-item.event.param';
import { HeroKilledDragonEventParam } from '../events/params/hero-killed-dragon.event.param';
import * as rds from 'randomstring';    

export class Hero extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  killEnemy(enemyId: string) {
    // logic
    this.apply(new HeroKilledDragonEvent(new HeroKilledDragonEventParam(rds.generate(),this.id, enemyId)));
  }

  addItem(itemId: string) {
    // logic
    this.apply(new HeroFoundItemEvent(new HeroFoundItemEventParam(rds.generate(),this.id, itemId)));
  }
}