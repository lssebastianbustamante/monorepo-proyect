import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TypePokemon } from '../../typepokemon/entities/typepokemon.entity';
import { Pokemon } from '../../pokemon/entities/pokemon.entity';
import * as fs from 'fs';

export default class PokemonSeeder implements Seeder {
  track = false;
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Pokemon);
    const typePokemonRepository = dataSource.getRepository(TypePokemon);
    const rawdata = await fs.readFileSync('src/data/pokemon.json');
    const rawdataType = await fs.readFileSync('src/data/type.json');
    const pokemonData = JSON.parse(rawdata.toString());
    const pokemonType = JSON.parse(rawdataType.toString());

    pokemonType.map(async (pokemonData) => {
      const newType = new TypePokemon();
      newType.name = pokemonData.name;
      return await typePokemonRepository.save(newType);
    });

    pokemonData.pokemon.map(async (pokemonData) => {
      const newPokemon = new Pokemon();
      newPokemon.name = pokemonData.name;
      newPokemon.attack = pokemonData.attack;
      newPokemon.defense = pokemonData.defense;
      newPokemon.hp = pokemonData.hp;
      newPokemon.speed = pokemonData.speed;
      newPokemon.imageUrl = pokemonData.imageUrl;

      return await repository.save({
        ...newPokemon,
      });
    });

    const typeFound = await typePokemonRepository.findOne({
      where: {
        name: 'agua',
      },
    });

    console.log(typeFound)
  }
}
