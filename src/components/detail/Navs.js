import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Navs = () => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
      };

  return (
    <ToggleButtonGroup
      color="secondary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      size="medium"
      sx={{ width: '100%' ,marginBottom: 1, marginX: 'auto', display: 'block', textAlign: 'center'}}
    >
      <ToggleButton value="comics" sx={{width:'11%'}}>Comics</ToggleButton>
      <ToggleButton value="series" sx={{width:'11%'}}>Series</ToggleButton>
      <ToggleButton value="stories" sx={{width:'11%'}}>Stories</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Navs;
