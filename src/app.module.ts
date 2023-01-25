import { Module } from '@nestjs/common';
import { HeroesGameModule } from './heroes/heroes.module';

@Module({
  imports: [HeroesGameModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
