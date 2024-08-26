import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TypePokemonService } from './typepokemon.service';
import { CreateTypeDto } from './dto/create-typepokemon.dto';

@Controller('type')
export class TypepokemonController {
  constructor(private readonly TypePokemonService: TypePokemonService) {}

  @Post()
  create(@Body() createTypepokemonDto: CreateTypeDto) {
    return this.TypePokemonService.create(createTypepokemonDto);
  }

  @Get()
  findAll() {
    return this.TypePokemonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.TypePokemonService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.TypePokemonService.remove(+id);
  }
}
