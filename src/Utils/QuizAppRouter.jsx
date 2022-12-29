import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Game from "../Components/Game";
import Home from "../Components/Home";

export const QuizAppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        {startGame || (
          <Route
            index
            element={
              <Home
                setStartGame={setStartGame}
                memoizedPickAQuestion={memoizedPickAQuestion}
              />
            }
          />
        )}
        {/* <Route index element={<Home />} /> */}

        {startGame && (
          <Route
            path="start-game"
            element={
              <Game
                currentQuestion={currentQuestion}
                setTotalScore={setTotalScore}
                totalScore={totalScore}
                questionCounter={questionCounter}
                MAX_QUESTIONS={MAX_QUESTIONS}
                memoizedPickAQuestion={memoizedPickAQuestion}
              />
            }
          />
        )}
      </Route>
    </>
  )
);
