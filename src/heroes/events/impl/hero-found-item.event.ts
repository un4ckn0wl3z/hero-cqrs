import { IEvent } from "@nestjs/cqrs";
import { HeroFoundItemEventParam } from "../params/hero-found-item.event.param";

export class HeroFoundItemEvent implements IEvent {
    constructor(public readonly hero: HeroFoundItemEventParam) {}
  }