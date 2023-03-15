import axios from "axios";
import React, { useEffect, useState } from "react";
import { 
    styled,
    Box, 
} from "@mui/material";
import QuizItem from "../components/QuizItem";

const MainWrapper = styled(Box)(() => ({
    display: 'flex',
    //flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    //height: 'auto',
    boxSizing: 'border-box',
    backgroundColor: 'none',
    padding: '10px',
    margin: '10px',
  }));

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
        <MainWrapper>
                {quizzes.map((quiz, index) => <QuizItem
                    id={index}
                    quiz={quiz}
                    buttonStart={startQuiz}
                />)}
        </MainWrapper>
    )
}