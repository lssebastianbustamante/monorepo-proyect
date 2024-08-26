"use client";
import * as React from "react";
import { Pokemon, PokemonContextType } from "../../interfaces/pokemon";
import PokemonListCard from "./PokemonListCard";
import {
  Box,
  Container,
  Grid,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import Context from "./pokemonContext";
import axios from "axios";


const PokemonList: React.FC = () => {
  const {PokemonsContext, setPokemonContext} = useContext(Context) as PokemonContextType;
  const [dataLoaded, setDataLoaded] = useState<Boolean>(false);
  const [errorData, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const fetchPokemons = useCallback(async () => {
    try {
      const response = await axios.get<Pokemon[]>(
        "http://localhost:4000/api/pokemon"
      );
      setPokemonContext(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(errorData)
    }
  }, [setPokemonContext, errorData]);

  useEffect(() => {
    
    if (!dataLoaded) {
      fetchPokemons();
      setDataLoaded(true);
    }
  }, [dataLoaded, fetchPokemons]);


  return (
    <div>
      <Container sx={{ padding: "0px !important" }}>
        <Box
          component="div"
          sx={{
            display: "flex",
          }}
        >
          <Typography variant="h5">Select your pokemon</Typography>
        </Box>
        <Box
          component="div"
          sx={{
            marginTop: "1rem",
            height: "179px",
            padding: "0 1rem",
          }}
        >
          {loading ? (
            <Grid
              sx={{ display: "flex", flexDirection: "", justifyContent: "space-between" }}
            >
              <Skeleton variant="rectangular" width={211} height={155} />
              <Skeleton variant="rectangular" width={211} height={155} />
              <Skeleton variant="rectangular" width={211} height={155} />
              <Skeleton variant="rectangular" width={211} height={155} />
              <Skeleton variant="rectangular" width={211} height={155} />
            </Grid>
          ) : (
            <Grid
              container
              sx={{
                flexWrap: "nowrap",
                overflowY: "auto",
                minWidth: "150px",
                paddingBottom: "1rem",
                scrollBehavior: "smooth",
                scrollbarColor: "#888",
              }}
              spacing={3}
            >
              {PokemonsContext.map((pokemon, index) => (
                <Grid item xs={10} sm={5} md={3} key={index}>
                  <PokemonListCard key={index} pokemon={pokemon} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default PokemonList;
