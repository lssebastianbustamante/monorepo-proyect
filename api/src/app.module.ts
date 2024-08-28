import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { BattlesModule } from './battle/battles.module';
import { TypepokemonModule } from './typepokemon/typepokemon.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { options } from './db/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(options),
    PokemonModule,
    BattlesModule,
    TypepokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
