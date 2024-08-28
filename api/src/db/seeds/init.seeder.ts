import { DataSource } from 'typeorm';
import { runSeeders, Seeder } from 'typeorm-extension';

import PokemonSeeder from './pokemon.seeder';
import TypeSeeder from './type.seeder';

export default class InitSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    await runSeeders(dataSource, {
      seeds: [TypeSeeder, PokemonSeeder],
    });
  }
}
