import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import ShowCharacter from "./components/character/ShowCharacter";
import Detail from "./components/detail/Detail";
import "./App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";
import Logo from "./components/Logo";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [name, setName] = useState("");

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{ width: "80%", marginX: 'auto', marginBottom: 10 }}>
          <Logo />
          <Form setName={setName} />
          <Detail/>
          <ShowCharacter name={name} margin="normal" />
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
