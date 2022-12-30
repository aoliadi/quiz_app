import { useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

import app from "../css/app.module.css";
import Home from "./Home";
import SaveScore from "./SaveScore";
import Game from "./Game";

const App = () => {
  const [questionCounter, setQuestionCounter] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [highScores, setHighScores] = useState([]);

  const quizClient = new QueryClient();

  useEffect(() => {
    // console.log(highScores);

    return () => {
      resetGame();
    };
  }, [highScores]);

  const resetGame = () => {
    setQuestionCounter(null);
    setTotalScore(0);
  };

  return (
    <>
      <QueryClientProvider client={quizClient}>
        <main className={app.container}>
          {startGame && (
            <Game
              endGame={endGame}
              setTotalScore={setTotalScore}
              totalScore={totalScore}
              setEndGame={setEndGame}
            />
          )}

          {startGame || (
            <Home setStartGame={setStartGame} highScores={highScores} />
          )}

          {endGame && (
            <SaveScore totalScore={totalScore} setHighScores={setHighScores} />
          )}
        </main>
      </QueryClientProvider>
    </>
  );
};

export default App;
