import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Pokemon } from '../../pokemon/entities/pokemon.entity';
import * as fs from 'fs';
import { Type } from '../../typepokemon/entities/typepokemon.entity';

export default class PokemonSeeder implements Seeder {
  track = false;
  public async run(dataSource: DataSource): Promise<any> {
    const pokemonRepository = dataSource.getRepository(Pokemon);
    const typeRepository = dataSource.getRepository(Type);
    const rawdata = await fs.readFileSync('src/data/pokemon.json');
    const pokemonData = JSON.parse(rawdata.toString());

    const pokemonSave = pokemonData.pokemon.map(async (pokemonData) => {
      const newPokemon = new Pokemon();
      newPokemon.name = pokemonData.name;
      newPokemon.attack = pokemonData.attack;
      newPokemon.defense = pokemonData.defense;
      newPokemon.hp = pokemonData.hp;
      newPokemon.speed = pokemonData.speed;
      newPokemon.imageUrl = pokemonData.imageUrl;

      const type = await typeRepository.findOne({
        where: {
          name: pokemonData.typepokemon,
        },
      });

      const pokemonType = await pokemonRepository.create({
        ...newPokemon,
        type: type,
      });

      return pokemonType;
    });

    await pokemonRepository.save(pokemonSave);
  }
}
