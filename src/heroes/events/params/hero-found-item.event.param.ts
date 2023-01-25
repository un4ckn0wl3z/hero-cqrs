export class HeroFoundItemEventParam {
    constructor(
        public readonly eventNumber: string,
        public readonly hero: string, 
        public readonly itemId: string
        ) {}
}