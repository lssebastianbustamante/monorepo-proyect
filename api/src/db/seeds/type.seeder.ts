import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Type } from '../../typepokemon/entities/typepokemon.entity';
import * as fs from 'fs';

export default class TypeSeeder implements Seeder {
  track?: false;
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Type);
    const rawdata = await fs.readFileSync('src/data/type.json');
    const { type } = JSON.parse(rawdata.toString());

    type.map(async (type) => {
      const newType = new Type();
      newType.name = type.name;

      await repository.save(newType);
    });
  }
}
