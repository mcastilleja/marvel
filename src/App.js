import React from "react";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo";

import Views from "./pages/Views";
import Comics from "./pages/Comics";
import Series from "./pages/Series";
import Creators from "./pages/Creators";
import Events from "./pages/Events";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [name, setName] = useState("");

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{ width: "80%", marginX: "auto", marginBottom: 10 }}>
          <BrowserRouter>
          
            <Logo />

            <Routes>
              <Route path="/" element={<Views name={name} setName={setName} type="characters" />} />
              <Route path="comics" element={<Comics name={name} setName={setName}  type="comics"/>} />
              <Route path="series" element={<Series name={name} setName={setName}  type="series" />} />
              <Route path="creators" element={<Creators name={name} setName={setName}  type="creators" />} />
              <Route path="events" element={<Events name={name} setName={setName} type="events" />} />
            </Routes>

          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
