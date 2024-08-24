import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import { Pokemon } from "../../interfaces/pokemon";

interface PokemonCardListProps {
  pokemon: Pokemon;
}

const PokemonListCard: React.FC<PokemonCardListProps> = ({ pokemon }) => {
  return (
    <Paper elevation={4}>
      <Card sx={{ height: '100%', maxHeight: '250px', minWidth:'150px' }}>
        <CardMedia
          component="img"
          height="100"
          image={pokemon.imageUrl}
          alt={pokemon.name}
          sx={{
            objectFit: 'contain'
          }}
        />
        <CardContent sx={{paddingBottom: '0px !important', paddingLeft: '10px'}}>
          <Typography gutterBottom variant="h6" component="div">
            {pokemon.name}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default PokemonListCard;
