import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Repository } from 'typeorm';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { Type } from '../typepokemon/entities/typepokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
    @InjectRepository(Type)
    private typePokemonRepository: Repository<Type>,
  ) {}

  async getPokemons() {
    return await this.pokemonRepository.find({
      relations: ['type'],
    });
  }
  async getPokemon(id: number) {
    const pokemonFound = await this.pokemonRepository.findOne({
      where: {
        id,
      },
      relations: ['typepokemon'],
    });

    if (!pokemonFound)
      return new HttpException('Pokeon not found', HttpStatus.NOT_FOUND);
    return pokemonFound;
  }

  async battlePokemon(pokemonUno: number, pokemonDos: number) {
    const pokemon1 = await this.pokemonRepository.findOne({
      where: { id: await pokemonUno },
    });

    const pokemon2 = await this.pokemonRepository.findOne({
      where: {
        id: pokemonDos,
      },
    });
    if (!pokemon1 || !pokemon2)
      return new HttpException('User Not Found', HttpStatus.NOT_FOUND);

    let attacker = pokemon1;
    let defender = pokemon2;

    if (
      pokemon2.speed > pokemon1.speed ||
      (pokemon2.speed === pokemon1.speed && pokemon2.attack > pokemon1.attack)
    ) {
      attacker = pokemon2;
      defender = pokemon1;
    }

    while (attacker.hp > 0 && defender.hp > 0) {
      const damage = Math.max(1, attacker.attack - defender.defense);
      defender.hp -= damage;

      [attacker, defender] = [defender, attacker];

      return attacker;
    }
  }

  async createPokemon(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const type = await this.typePokemonRepository.findOne({
      where: {
        name: createPokemonDto.type,
      },
    });

    if (!type) {
      throw new NotFoundException('Tipo no encontrado');
    }

    const newPokemon = this.pokemonRepository.create({
      ...createPokemonDto,
      type: type,
    });
    return this.pokemonRepository.save(newPokemon);
  }
}
