"use client";
import * as React from "react";
import axios from "axios";
import { Pokemon, PokemonContextType } from "@/app/interfaces/pokemon";
import PokemonCard from "./PokemonCard";
import { useContext, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Context from "../PokemonList/pokemonContext";

interface pokemonWinner {
  name: string;
  id: number;
}

const PokemonBattle: React.FC = () => {
  const { PokemonsContext } = useContext(Context) as PokemonContextType;
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);
  const [winner, setWinner] = useState(false);
  const [pokemonWinner, setPokemonWinner] = useState<pokemonWinner>();
  const [error, setError] = useState<string | null>(null);

  const handleSelectClick = () => {
    const randomIndex1 = Math.floor(Math.random() * PokemonsContext.length);
    const randomIndex2 = Math.floor(Math.random() * PokemonsContext.length);

    if (randomIndex1 !== randomIndex2) {
      setSelectedPokemon([
        ...selectedPokemon,
        PokemonsContext[randomIndex1],
        PokemonsContext[randomIndex2],
      ]);
      setLoading(false);
    } else {
      handleSelectClick();
    }
  };

  async function enviarDatos(datos: any) {
    try {
      const body = JSON.stringify(datos);

      const response = await fetch("http://localhost:4000/api/battles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }

      const result = await response.json();
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  }

  const handleBattleClick = async () => {
    const [pokemon1Id, pokemon2Id] = selectedPokemon.map(
      (pokemon) => pokemon.id
    );

    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/pokemon/battle/${pokemon1Id}/${pokemon2Id}`
      );

      const { ganador, perdedor } = data;

      const battleResult = {
        winnerId: ganador.id,
        winnerName: ganador.name,
        loserId: perdedor.id,
        loserName: perdedor.name,
      }
      
      enviarDatos(battleResult);
      setPokemonWinner(ganador);
      setWinner(true);
    } catch (error) {
      setError("Error al obtener los datos");
    }
  };

  return (
    <Box>
      <Box sx={{ height: "95px", marginTop: "2rem" }}>
        {winner && (
          <Paper elevation={4}>
            <Typography
              variant="h4"
              align="center"
              sx={{
                width: "100%",
                border: "2px solid grey",
                backgroundColor: "skyblue",
                padding: "1rem",
                textAlign: "left",
              }}
            >
              {pokemonWinner?.name} wins!
            </Typography>
          </Paper>
        )}
      </Box>
      <Grid
        container
        sx={{ flexWrap: "nowrap", marginTop: "3rem" }}
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          {loading ? (
            <Stack sx={{ pt: 0.5 }}>
              <Skeleton variant="rectangular" width="100%" height={330} />
              <Skeleton width="30%" height={20} sx={{ marginTop: "1rem" }} />
              <Skeleton width="100%" height={20} sx={{ marginTop: ".5rem" }} />
              <Skeleton width="100%" height={20} sx={{ marginTop: ".5rem" }} />
              <Skeleton width="100%" height={20} sx={{ marginTop: ".5rem" }} />
              <Skeleton width="100%" height={20} sx={{ marginTop: ".5rem" }} />
            </Stack>
          ) : (
            <Paper elevation={4}>
              <PokemonCard
                pokemon={selectedPokemon[0]}
                isWinner={pokemonWinner?.id === selectedPokemon[0].id}
              />
            </Paper>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!loading ? (
            <Button
              variant="contained"
              sx={{
                display: "block",
                maxHeight: "36px",
                backgroundColor: "green",
              }}
              onClick={handleBattleClick}
              disabled={winner}
            >
              Iniciar Batalla
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ display: "block", maxHeight: "36px" }}
              onClick={handleSelectClick}
            >
              Elige tu Pokemon
            </Button>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          {loading ? (
            <Stack sx={{ pt: 0.5 }}>
              <Skeleton variant="rectangular" width="100%" height={330} />
              <Skeleton width="30%" height={20} sx={{ marginTop: "1rem" }} />
              <Skeleton width="100%" height={20} sx={{ marginTop: ".5rem" }} />
              <Skeleton width="100%" height={20} sx={{ marginTop: ".5rem" }} />
              <Skeleton width="100%" height={20} sx={{ marginTop: ".5rem" }} />
              <Skeleton width="100%" height={20} sx={{ marginTop: ".5rem" }} />
            </Stack>
          ) : (
            <Paper elevation={4}>
              <PokemonCard
                pokemon={selectedPokemon[1]}
                isWinner={pokemonWinner?.id === selectedPokemon[1].id}
              />
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default PokemonBattle;
