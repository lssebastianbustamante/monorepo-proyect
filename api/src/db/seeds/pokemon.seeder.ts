import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Pokemon } from '../../pokemon/entities/pokemon.entity';
import * as fs from 'fs';

export default class PokemonSeeder implements Seeder {
  track = false;
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Pokemon);
    const rawdata = await fs.readFileSync('src/data/pokemon.json');
    const pokemonData = JSON.parse(rawdata.toString());
    const pokemonToSave = pokemonData.pokemon.map((pokemonData) => {
      const newPokemon = new Pokemon();
      newPokemon.name = pokemonData.name;
      newPokemon.attack = pokemonData.attack;
      newPokemon.defense = pokemonData.defense;
      newPokemon.hp = pokemonData.hp;
      newPokemon.speed = pokemonData.speed;
      newPokemon.imageUrl = pokemonData.imageUrl;
      return newPokemon;
    });

    await repository.save(pokemonToSave);
  }
}
