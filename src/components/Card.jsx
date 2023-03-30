import { Component } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material';
import CreateModal from './Dialogs/CreateModal';

export default class CardRender extends Component {
  state = {
    open: false,
  }

  constructor(props) {
    super(props);
    this.handleToggleOpenModal = this.handleToggleOpenModal.bind(this);
  }

  startQuiz = () => {
    alert("Quiz started!")
  }

  render() {
    const { imageSrc, testTitle, description } = this.props;
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
            <Button size='small' onClick={this.startQuiz}>Start quiz</Button>
            <Button size='small' onClick={this.handleToggleOpenModal}>Show More</Button>
          </CardActions>
        </Card>
        <CreateModal
          open={this.state.open}
          handleOnClose={this.handleToggleOpenModal}
          imageSrc={imageSrc}
          testTitle={testTitle}
          description={description}
        />
      </>
    )
  }

  handleToggleOpenModal() {
    this.setState({ open: !this.state.open })
  }
}
