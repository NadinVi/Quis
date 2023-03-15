import axios from "axios";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import QuizItem from "../components/QuizItem";

export default function QuizList() {
    let [quizzes, setQuiz] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("https://63fd4162677c4158731baf01.mockapi.io/quizes");
            console.log(data);
            setQuiz(data);
            //console.log(quiz);
        })();
    }, []);

    const startQuiz = () => {
        console.log("Let`s start");
        //alert("Quiz started!")
    }


    return (

        <Grid container spacing={2}>
            {quizzes.map((quiz, index) => <QuizItem 
                id={index}
                quiz={quiz}
                buttonStart={startQuiz}
            />)}
        </Grid>
    )
}