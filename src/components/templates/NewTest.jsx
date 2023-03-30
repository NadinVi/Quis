import { Component } from "react";
import Box from '@mui/material/Box';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

export default class NewTest extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Box
        sx={{
          '& > :not(style)': {
            m: 1,
          },
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div>
          <AddToPhotosIcon />
        </div>
        <p>Add quizz</p>
      </Box>
    )
  }
}
