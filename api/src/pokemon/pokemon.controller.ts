import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonSerice: PokemonService) {}
  @Get()
  getPokemos() {
    return this.pokemonSerice.getPokemons();
  }

  @Get(':id')
  getPokemon(@Param('id', ParseIntPipe) id: number) {
    return this.pokemonSerice.getPokemon(id);
  }

  @Get('battle/:pokemon1Id/:pokemon2Id')
  async battle(
    @Param('pokemon1Id') pokemon1Id: number,
    @Param('pokemon2Id') pokemon2Id: number,
  ) {
    const winner = await this.pokemonSerice.battlePokemon(
      pokemon1Id,
      pokemon2Id,
    );
    return winner;
  }

  @Post()
  createPokemon(@Body() newPokemon: CreatePokemonDto) {
    return this.pokemonSerice.createPokemon(newPokemon);
  }
}
