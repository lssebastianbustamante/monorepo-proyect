import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { Pokemon } from "@/app/interfaces/pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
  isWinner?: boolean;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, isWinner }) => {
  return (
    <Paper elevation={4}>
      <Card sx={{ height: "100%", border: isWinner ? '2px solid gold' : '2px solid grey' }}>
        <CardMedia
          component="img"
          height="200"
          image={pokemon.imageUrl}
          alt={pokemon.name}
          sx={{
            objectFit: "contain",
          }}
        />
        <CardContent sx={{ paddingLeft: "10px" }}>
          <Typography gutterBottom variant="h6" component="div">
            {pokemon.name}
          </Typography>
          <Box>
            <Typography gutterBottom variant="h6" component="div">
              HP
            </Typography>
            <LinearProgress
              variant="determinate"
              value={pokemon.hp * 10}
              sx={{
                backgroundColor: "grey.300",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "green",
                },
                height: "10px",
              }}
            />
          </Box>
          <Box>
            <Typography gutterBottom variant="h6" component="div">
              Attack
            </Typography>
            <LinearProgress
              variant="determinate"
              value={pokemon.attack * 10}
              sx={{
                backgroundColor: "grey.300",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "green",
                },
                height: "10px",
              }}
            />
          </Box>
          <Box>
            <Typography gutterBottom variant="h6" component="div">
              Defense
            </Typography>
            <LinearProgress
              variant="determinate"
              value={pokemon.defense * 10}
              sx={{
                backgroundColor: "grey.300",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "green",
                },
                height: "10px",
              }}
            />
          </Box>
          <Box>
            <Typography gutterBottom variant="h6" component="div">
              Speed
            </Typography>
            <LinearProgress
              variant="determinate"
              value={pokemon.speed * 10}
              sx={{
                backgroundColor: "grey.300",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "green",
                },
                height: "10px",
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default PokemonCard;
