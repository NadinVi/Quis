import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CreateModal from './Dialogs/CreateModal';

export default function CardRender({ imageSrc, testTitle, description }) {
  const [open, setOpenModal] = useState(false);
  const pathToTest = testTitle.split(' ').join('_').toLowerCase();

  return (
    <>
      <Card sx={{ maxWidth: 345, marginBottom: '25px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image={imageSrc}
          title='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {testTitle}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description.slice(0, 50)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>
            <Link
              style={{ textDecoration: 'none', color: 'inherit' }}
              to={`/quizz/${pathToTest}`}
            >
              Start quiz</Link>
          </Button>
          <Button size='small' onClick={() => setOpenModal(true)}>Show More</Button>
        </CardActions>
      </Card>
      <CreateModal
        open={open}
        handleOnClose={() => setOpenModal(false)}
        imageSrc={imageSrc}
        testTitle={testTitle}
        description={description}
      />
    </>
  );
}
