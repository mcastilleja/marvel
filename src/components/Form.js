import React from "react";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const Form = ({ setName }) => {
  const [inputs, handleChange, reset] = useForm({ name: "" });
  const { name } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      return Swal.fire({
        title: "Error!",
        text: "Instert a Name",
        icon: "error",
      });
    }

    setName(name.trim().toLowerCase());

    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ width: '50%' ,marginBottom: 5, marginX: 'auto' }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <TextField
            id="outlined-basic"
            label="Buscar personaje"
            variant="outlined"
            value={name}
            onChange={handleChange}
            name="name"
            size="small"
            color="secondary"
          />

          <Button size="medium" variant="contained" color="secondary" startIcon={<SearchIcon />}>
            Search
          </Button>
          <Button
            size="medium"
            color="secondary"
            variant="outlined"
            endIcon={<RestartAltIcon />}
            onClick={() => setName("")}
          >
            Reset
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default Form;
