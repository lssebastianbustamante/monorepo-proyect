import { Injectable } from '@nestjs/common';
import { CreateTypepokemonDto } from './dto/create-typepokemon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TypePokemon } from './entities/typepokemon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypepokemonService {
  constructor(
    @InjectRepository(TypePokemon)
    private typePokemonRepository: Repository<TypePokemon>,
  ) {}
  async create(createTypepokemonDto: CreateTypepokemonDto) {
    return await this.typePokemonRepository.save(createTypepokemonDto);
  }

  async findAll() {
    return await this.typePokemonRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} typepokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} typepokemon`;
  }
}
