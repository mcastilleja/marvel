import Character from "./Character";
import React from "react";
import Loading from "../../styled-components/Loading";
import { useFetch } from "../../hooks/useFetch";
import Grid from '@mui/material/Unstable_Grid2';

const ShowCharacter = ({ name }) => {
  const [characters, loading] = useFetch(name);

  if (loading) {
    return <Loading />;
  }

  return (
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  display="flex" justifyContent="center">
        {characters.map((item) => (
          <Character key={item.id} character={item} />
        ))}
      </Grid>
  );
};

export default ShowCharacter;
