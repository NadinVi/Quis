import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function QuizItem({quiz, startQuiz}) {
    return(
          <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={quiz.image}
                        title={quiz.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {quiz.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {quiz.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={startQuiz}>Start quiz</Button>
                        <Button size="small">Show More</Button>
                    </CardActions>
                </Card>  
    )
}