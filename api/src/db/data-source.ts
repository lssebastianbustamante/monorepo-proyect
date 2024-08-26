import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Battle } from '../battle/entity/battle.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import PokemonSeeder from './seeds/pokemon.seeder';
import { SeederOptions } from 'typeorm-extension';
import { Type } from '../typepokemon/entities/typepokemon.entity';

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [Pokemon, Type, Battle],
  seeds: [PokemonSeeder],
  seedTracking: false,
  migrations: ['/api/src/db/**/*.ts'],
};

export const AppDataSource = new DataSource(dataSourceOptions);
