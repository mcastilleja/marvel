import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CottageIcon from "@mui/icons-material/Cottage";

const Navs = () => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <ToggleButtonGroup
        color="secondary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        size="medium"
        sx={{
          width: "100%",
          marginBottom: 1,
          marginX: "auto",
          display: "block",
          textAlign: "center",
        }}
      >
      <NavLink to="/">
        <ToggleButton value="characters" sx={{ width: "15%" }}>
          Characters
        </ToggleButton>
      </NavLink>
        <NavLink to="/comics">
          <ToggleButton value="comics" sx={{ width: "15%" }}>
            Comics
          </ToggleButton>
        </NavLink>
        <NavLink to="/series">
          <ToggleButton value="series" sx={{ width: "15%" }}>
            Series
          </ToggleButton>
        </NavLink>
        <NavLink to="/creators">
          <ToggleButton value="creators" sx={{ width: "15%" }}>
            Creators
          </ToggleButton>
        </NavLink>
        <NavLink to="/events">
          <ToggleButton value="events" sx={{ width: "15%" }}>
            Events
          </ToggleButton>
        </NavLink>
        <NavLink to="/">
          <IconButton
            color="secondary"
            aria-label="to home"
            sx={{ marginLeft: 1 }}
          >
            <CottageIcon />
          </IconButton>
        </NavLink>
      </ToggleButtonGroup>
    </>
  );
};

export default Navs;
