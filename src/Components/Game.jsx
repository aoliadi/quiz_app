import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import Hud from "./Hud";
import Question from "./Question";
import { MAX_QUESTIONS, triviaApiUri } from "../Utils/questionBank";
import question from "../css/question.module.css";

function Game({ endGame, setEndGame, totalScore, setTotalScore }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionCounter, setQuestionCounter] = useState(0);

  const getAllQuestions = async () => {
    const res = await fetch(triviaApiUri);
    const data = await res.json();
    return data;
  };

  const {
    data: availableQuestions,
    isLoading,
    isSuccess,
    isError,
  } = useQuery("triviaQuestions", getAllQuestions, {
    retry: 3,
    refetchOnWindowFocus: false,
  });

  const pickAQuestion = () => {
    if (MAX_QUESTIONS === questionCounter || questionCounter > MAX_QUESTIONS) {
      setEndGame(true);
      setCurrentQuestion(null);
      return;
    }

    if (!availableQuestions) return;

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
    memoizedPickAQuestion();
    return () => {};
  }, [isSuccess]);

  if (isError) {
    return (
      <>
        <h1>Error! Could not fetch.</h1>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <h1 className={question.anim}>Loading...</h1>
      </>
    );
  }

  return (
    <>
      {endGame || (
        <header className={question.header_container}>
          <Hud
            totalScore={totalScore}
            questionCounter={questionCounter}
            MAX_QUESTIONS={MAX_QUESTIONS}
          />
        </header>
      )}

      <Question
        memoizedPickAQuestion={memoizedPickAQuestion}
        setTotalScore={setTotalScore}
        currentQuestion={currentQuestion}
      />
    </>
  );
}

export default Game;
