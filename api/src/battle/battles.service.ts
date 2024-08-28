import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonService } from '../pokemon/pokemon.service';
import { Battle } from './entity/battle.entity';
import { Repository } from 'typeorm';
import { CreateRegisterDto } from './dto/create-register.dto';

@Injectable()
export class BattlesService {
  constructor(
    @InjectRepository(Battle) private battleRepository: Repository<Battle>,
    private pokemosService: PokemonService,
  ) {}

  async createRegister(register: CreateRegisterDto) {
    const winnerFound = await this.pokemosService.getPokemon(register.winnerId);
    const loserFound = await this.pokemosService.getPokemon(register.loserId);

    console.log(winnerFound, loserFound);

    if (!winnerFound && !loserFound)
      return new HttpException('Pokemons not found', HttpStatus.NOT_FOUND);
    const newRegister = this.battleRepository.create(register);
    return this.battleRepository.save(newRegister);
  }

  getBattles() {
    return this.battleRepository.find();
  }
}
