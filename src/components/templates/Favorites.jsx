import React from "react";
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
        <FavoriteBorderIcon />
      </div>
      <p>Favorites</p>
    </Box>
  )
}
