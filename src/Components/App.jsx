import { useEffect, useMemo, useState } from "react";
import { questionBank, MAX_QUESTIONS } from "../Utils/questionBank";
import app from "../css/app.module.css";
import Home from "./Home";
import SaveScore from "./SaveScore";
import Game from "./Game";
import HighScore from "./HighScore";

const App = () => {
  const [availableQuestions, setAvailableQuestions] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    console.log(highScores);

    return () => {
      resetGame();
    };
  }, [highScores]);

  const resetGame = () => {
    setQuestionCounter(null);
    setAvailableQuestions(null);
    setTotalScore(0);
    // setTotalScore(0);
  };

  const getAllQuestions = () => {
    setAvailableQuestions(questionBank);
  };

  const pickAQuestion = () => {
    if (MAX_QUESTIONS === questionCounter || questionCounter > MAX_QUESTIONS) {
      setEndGame(true);
      setCurrentQuestion(null);
      return;
    }

    const questionToDisplay = Math.floor(
      Math.random() * availableQuestions.length
    );
    setCurrentQuestion([availableQuestions[questionToDisplay]]);
    setQuestionCounter((prev) => prev + 1);

    // setAvailableQuestions((prevQuestionArr) =>
    //   prevQuestionArr.splice(questionToDisplay, 1)
    // );
  };

  const memoizedPickAQuestion = useMemo(
    () => pickAQuestion,
    [availableQuestions, questionCounter]
  );

  useEffect(() => {
    getAllQuestions();

    return () => {};
  }, []);

  return (
    <>
      <main className={app.container}>
        {startGame && (
          <Game
            endGame={endGame}
            currentQuestion={currentQuestion}
            setTotalScore={setTotalScore}
            totalScore={totalScore}
            questionCounter={questionCounter}
            MAX_QUESTIONS={MAX_QUESTIONS}
            memoizedPickAQuestion={memoizedPickAQuestion}
          />
        )}

        {startGame || (
          <Home
            setStartGame={setStartGame}
            highScores={highScores}
            memoizedPickAQuestion={memoizedPickAQuestion}
          />
        )}

        {endGame && (
          <SaveScore totalScore={totalScore} setHighScores={setHighScores} />
        )}
      </main>
    </>
  );
};

export default App;
