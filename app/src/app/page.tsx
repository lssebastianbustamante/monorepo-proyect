"use client";

import PokemonList from "./components/PokemonList/PokemonList";
import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material";
import PokemonBattle from "./components/BattlePokemon/BattlePokemon";
import PokemonProvider from "./provider/pokemonProvider";

export default function Home() {
  
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
        <PokemonProvider>
          <PokemonList />
          <PokemonBattle />
        </PokemonProvider>
      </Container>
    </React.Fragment>
  );
}
