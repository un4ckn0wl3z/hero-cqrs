import { IEvent } from "@nestjs/cqrs";
import { HeroKilledDragonEventParam } from "../params/hero-killed-dragon.event.param";

export class HeroKilledDragonEvent implements IEvent {
    constructor(public readonly hero: HeroKilledDragonEventParam) {}
  }