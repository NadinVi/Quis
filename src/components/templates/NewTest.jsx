import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

export default function NewTest() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <nav aria-label='main mailbox folders'>
        <List>
          <ListItem disablePadding>
            <Link
              style={{ textDecoration: 'none' }}
              to='/quizz/create'>
              <ListItemButton>
                <ListItemIcon>
                  <AddToPhotosIcon />
                </ListItemIcon>
                <ListItemText primary='Add new quiz' />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
