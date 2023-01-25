export class HeroKilledDragonEventParam {
    constructor(
        public readonly eventNumber: string,
        public readonly heroId: string,
        public readonly dragonId: string,
      ) {}
}