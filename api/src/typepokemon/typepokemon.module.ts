import { Module } from '@nestjs/common';
import { TypepokemonService } from './typepokemon.service';
import { TypepokemonController } from './typepokemon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypePokemon } from './entities/typepokemon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypePokemon])],
  controllers: [TypepokemonController],
  providers: [TypepokemonService],
})
export class TypepokemonModule {}
