import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Timer from '../components/Timer';
import { quizzThunks } from '../store/modules/quizz';

export default function Quizz() {
  const { name } = useParams();
  const { quizz } = useSelector((state) => state.quizzReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswearClick = (isCorrect) => {
    if (isCorrect === 'true') {
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
        await dispatch(quizzThunks.fetchQuizz(name));
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [name]);

  if (loading) return (<div>Loading...</div>);
  if (error) return (<div>Page in Progress...</div>);

  return (
    <div className="quizz_container">
      <div className="quizz_wrapper">
      {
        showScore
          ? <div className="section_score">
            <div className="score_text">
              <p>Correct answers {score} of {quizz.length}</p>
              <p>Test over</p>
              </div>
            {/* { <button
            // className="refresh_btn"
            // onClick={refresh}
            >End of quiz</button> } */}
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
      <Timer refresh = {refresh} quizLength={quizz.length} />
    </div>
  );
}
