import React, { ReactNode, useState } from "react";
import Context from "../components/PokemonList/pokemonContext";
import { Pokemon } from "../interfaces/pokemon";

interface Props {
  children: ReactNode;
}

const PokemonProvider = ({ children }: Props) => {
  const [PokemonsContext, setPokemonContext] = useState<Array<Pokemon>>([]);

  return (
    <Context.Provider value={{ PokemonsContext, setPokemonContext }}>
      {children}
    </Context.Provider>
  );
};

export default PokemonProvider;
