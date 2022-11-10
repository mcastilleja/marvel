import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

const Character = ({ character = "" }) => {

  const { name, thumbnail, title, fullName} = character;

  return (
    <Grid xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`${thumbnail.path}.${thumbnail.extension}`}
            alt={`image-${name === undefined ? title || fullName : name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name === undefined ? title || fullName : name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Character;
