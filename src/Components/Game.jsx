import question from "../css/question.module.css";

import Hud from "./Hud";
import Question from "./Question";

function Game({
  currentQuestion,
  totalScore,
  MAX_QUESTIONS,
  questionCounter,
  setTotalScore,
  memoizedPickAQuestion,
}) {
  return (
    <>
      <header className={question.header_container}>
        <Hud
          totalScore={totalScore}
          questionCounter={questionCounter}
          MAX_QUESTIONS={MAX_QUESTIONS}
        />
      </header>
      <Question
        memoizedPickAQuestion={memoizedPickAQuestion}
        setTotalScore={setTotalScore}
        currentQuestion={currentQuestion}
      />
    </>
  );
}

export default Game;