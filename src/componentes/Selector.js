import  React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { MySelector } from './Stylo';

export default function BasicSelect({status, setStatus}) {
  const handleStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  return (
    <Box >
        <InputLabel for='status' id="demo-simple-select-label"></InputLabel>
        <MySelector
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Estatus"
          onChange={handleStatus}
          name='status'
        >
          <MenuItem value='listado'>Listado Completo</MenuItem>
          <MenuItem value='completo'> Completo </MenuItem>
          <MenuItem value='incompleto'> Incompleto </MenuItem>
        
        </MySelector>
     
    </Box>
  );
}
