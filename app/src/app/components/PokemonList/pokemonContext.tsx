import React, { createContext } from "react";
import { PokemonContextType } from "../../interfaces/pokemon";

const Context = createContext<PokemonContextType>({
    PokemonsContext: [],
    setPokemonContext: () => {}
})

export default Context;