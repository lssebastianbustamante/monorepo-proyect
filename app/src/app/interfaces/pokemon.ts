export type Pokemon = {
  [x: string]: any;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  imageUrl: string;
}

export type PokemonContextType = {
  PokemonsContext: Array<Pokemon>
  setPokemonContext: (value: Array<Pokemon>) => void; 
}
