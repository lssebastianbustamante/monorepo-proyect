import { Module } from '@nestjs/common';
import { TypePokemonService } from './typepokemon.service';
import { TypepokemonController } from './typepokemon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from './entities/typepokemon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Type])],
  controllers: [TypepokemonController],
  providers: [TypePokemonService],
  exports: [TypeOrmModule],
})
export class TypepokemonModule {}
