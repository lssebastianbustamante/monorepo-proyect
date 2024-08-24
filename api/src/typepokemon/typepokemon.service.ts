import { Injectable } from '@nestjs/common';
import { CreateTypepokemonDto } from './dto/create-typepokemon.dto';

@Injectable()
export class TypepokemonService {
  create(createTypepokemonDto: CreateTypepokemonDto) {
    return 'This action adds a new typepokemon';
  }

  findAll() {
    return `This action returns all typepokemon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typepokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} typepokemon`;
  }
}
