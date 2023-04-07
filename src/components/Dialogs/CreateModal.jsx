import React from 'react';
import {
  Dialog,
  DialogActions,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

export default function CreateModal({
  open, handleOnClose, imageSrc, testTitle, description,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleOnClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Card sx={{ width: '100%' }}>
          <CardMedia
            sx={{ height: 240 }}
            image={imageSrc}
            title='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {testTitle}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {description}
            </Typography>
          </CardContent>
        </Card>
        <DialogActions>
          <Button onClick={handleOnClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
