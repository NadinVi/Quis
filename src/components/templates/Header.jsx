import { Typography } from '@mui/material';
import { Component } from 'react';

export default class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Typography variant='h3'
                component='h3'
                color='rgb(54, 46, 36)'
            >
                Quizzes of HTML, CSS, JS
            </Typography>
        )
    }
}
