import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TypepokemonService } from './typepokemon.service';
import { CreateTypepokemonDto } from './dto/create-typepokemon.dto';

@Controller('typepokemon')
export class TypepokemonController {
  constructor(private readonly typepokemonService: TypepokemonService) {}

  @Post()
  create(@Body() createTypepokemonDto: CreateTypepokemonDto) {
    return this.typepokemonService.create(createTypepokemonDto);
  }

  @Get()
  findAll() {
    return this.typepokemonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typepokemonService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typepokemonService.remove(+id);
  }
}
