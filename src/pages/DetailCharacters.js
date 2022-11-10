import React from "react";
import Detail from "../components/detail/Detail";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";
import Logo from "../components/Logo";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function DetailCharacters() {

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{ width: "80%", marginX: 'auto', marginBottom: 10 }}>
          <Logo />
          <Detail/>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default DetailCharacters;