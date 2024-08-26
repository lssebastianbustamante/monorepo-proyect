import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-typepokemon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from './entities/typepokemon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypePokemonService {
  constructor(
    @InjectRepository(Type)
    private typePokemonRepository: Repository<Type>,
  ) {}
  async create(createTypeDto: CreateTypeDto) {
    return await this.typePokemonRepository.save(createTypeDto);
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
