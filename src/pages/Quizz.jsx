import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { quizz as quizzApi } from '../api';

export default function Quizz() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quizz, setQuizz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswearClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const refresh = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await quizzApi.fetch(name);
        console.log(data);
        setQuizz(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return (<div>Loading...</div>);
  if (error) return (<div>Page in Progress...</div>);

  return (
    <div className="quizz_container">
      {
        showScore
          ? <div className="section_score">
            <div>Correct answers {score} of {quizz.length}</div>
            <button
            className="refresh_btn"
            onClick={refresh}
            >Try again...</button>
          </div>
          : <div className="quizz">
            <div className="question">
              <div className="question_number">
                <span>Answear {currentQuestion + 1}</span> of {quizz.length}
              </div>
              <div className="question_name">{quizz[currentQuestion].question}
              </div>
            </div>
            <div className="answear">
              {quizz[currentQuestion].answear.map((item) => (
                <button
                  onClick={() => handleAnswearClick(item.isCorrect)}
                  key={item}>{item.answearText}</button>
              ))}
            </div>
          </div>
      }
    </div>
  );
}
