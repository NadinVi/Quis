import React from "react";
import Box from '@mui/material/Box';
import CottageIcon from '@mui/icons-material/Cottage';

export default function Homepage() {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
        },
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <div>
      <CottageIcon />
        </div> 
        <p>Home</p>
    </Box>
  )
}