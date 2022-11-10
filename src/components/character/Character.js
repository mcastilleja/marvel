import React from "react";
//import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

const Character = ({ character = "" }) => {
  const { name, thumbnail/*, id*/} = character;
  /*const [ number, setNumber ] = useState();

  const handleClick = () => {
    setNumber(id)
    console.log(number)
  }*/

  return (
    <Grid xs={3}>
      <Card sx={{ maxWidth: 345 }} /*onClick={ handleClick }*/>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`${thumbnail.path}.${thumbnail.extension}`}
            alt={`image-${name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Character;
