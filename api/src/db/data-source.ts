import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Battle } from '../battle/entity/battle.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { Type } from '../typepokemon/entities/typepokemon.entity';
import InitSeeder from './seeds/init.seeder';

export const options: DataSourceOptions & SeederOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [Pokemon, Type, Battle],
  seedTracking: false,
  migrations: ['/api/src/migrations/**/*.ts'],
  migrationsTableName: 'pokemon',
  seeds: [InitSeeder],
};

export const dataSource = new DataSource(options);
