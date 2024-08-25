import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { BattlesModule } from './battle/battles.module';
import { DbModule } from './db/db.module';
import { TypepokemonModule } from './typepokemon/typepokemon.module';

@Module({
  imports: [PokemonModule, BattlesModule, DbModule, TypepokemonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
