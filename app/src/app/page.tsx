"use client";

import PokemonList from "./components/PokemonList/PokemonList";
import React, { useCallback } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material";
import PokemonBattle from "./components/BattlePokemon/BattlePokemon";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pokemon } from "./interfaces/pokemon";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [dataLoaded, setDataLoaded] = useState<Boolean>(false);
  const [errorData, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = useCallback(async () => {
    try {
      const response = await axios.get<Pokemon[]>(
        "http://localhost:4000/api/pokemon"
      );
      setPokemons(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(errorData)
    }
  }, [errorData]);

  useEffect(() => {
    
    if (!dataLoaded) {
      fetchPokemons();
      setDataLoaded(true);
    }
  }, [dataLoaded, fetchPokemons]);
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{padding: '2rem'}}>
        <Container sx={{padding: '0px !important'}}>
          <Box>
            <Typography gutterBottom variant="h4" component="div">
              Battle of Pokemon
            </Typography>
          </Box>
        </Container>
        <PokemonList loading={loading} pokemonsArray={pokemons}/>
        <PokemonBattle pokemonsArray={pokemons}/>
      </Container>
    </React.Fragment>
  );
}
