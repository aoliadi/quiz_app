import { useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { QUIZ_ROUTE_PATHS } from "../Utils/Utils";
import RootLayout from "../Layouts/RootLayout";
import Game from "./Game";
import Home from "./Home";
import SaveScore from "./SaveScore";
import HighScore from "./HighScore";
import NotFound from "./NotFound";

function App() {
  const [questionCounter, setQuestionCounter] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    return () => {
      resetGame();
    };
  }, [highScores]);

  const resetGame = () => {
    setQuestionCounter(0);
    setTotalScore(0);
    setEndGame(false);
    setStartGame(false);
  };

  const QuizAppQueryClient = new QueryClient();

  const QuizAppRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />

          <Route
            path={QUIZ_ROUTE_PATHS.startGame}
            element={
              <Game
                endGame={endGame}
                setTotalScore={setTotalScore}
                totalScore={totalScore}
                setEndGame={setEndGame}
              />
            }
          />

          <Route
            path={QUIZ_ROUTE_PATHS.saveScore}
            element={
              <SaveScore
                totalScore={totalScore}
                setHighScores={setHighScores}
              />
            }
          />

          <Route path={QUIZ_ROUTE_PATHS.highScore} element={<HighScore />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <QueryClientProvider client={QuizAppQueryClient}>
        <RouterProvider router={QuizAppRouter} />
      </QueryClientProvider>
    </>
  );
}

export default App;
