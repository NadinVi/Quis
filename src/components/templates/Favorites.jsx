import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

export default function BasicList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <nav aria-label='main mailbox folders'>
        <List>
          <ListItem disablePadding>
            <Link
              style={{ textDecoration: 'none' }}
              to='/favorites'>
              <ListItemButton>
                <ListItemIcon>
                  <FavoriteBorderIcon />
                </ListItemIcon>
                <ListItemText primary='Favorite' />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
