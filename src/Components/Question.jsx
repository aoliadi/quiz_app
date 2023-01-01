import { memo } from "react";
import question from "../css/question.module.css";
import { OBTAINABLE_SCORE } from "../Utils/Utils";
// import useRandomize from "../Hooks/useRandomize";

const BLACK_COLOR = "#333";
const WHITE_COLOR = "#fff";
const CORRECT_COLOR = "green";
const INCORRECT_COLOR = "red";

function Question({ currentQuestion, setTotalScore, memoizedPickAQuestion }) {
  const optionLabels = ["a", "b", "c", "d"];

  let answerToCurrentQuestion = "";

  const randomizeArray = (arr) => {
    return arr.sort(() => 0.5 - Math.random());
  };

  const incrementScoreBy = (score) => {
    setTotalScore((prev) => prev + score);
  };

  const resetOption = (option) => {
    option.lastChild.style.backgroundColor = WHITE_COLOR;
    option.lastChild.style.color = BLACK_COLOR;
  };

  const checkAnswer = (e) => {
    const clickedOption = e.target;
    let colorToApply = INCORRECT_COLOR;

    if (clickedOption.dataset.option === answerToCurrentQuestion) {
      incrementScoreBy(OBTAINABLE_SCORE);
      colorToApply = CORRECT_COLOR;
    }

    clickedOption.lastChild.style.backgroundColor = colorToApply;
    clickedOption.lastChild.style.color = WHITE_COLOR;

    setTimeout(() => {
      resetOption(clickedOption);
      memoizedPickAQuestion();
    }, 1500);
  };

  const showQuestion = () => {
    return currentQuestion?.map((obj, id) => {
      const options = randomizeArray([
        ...obj.incorrectAnswers,
        obj.correctAnswer,
      ]);

      return (
        <div key={id} className="">
          {createQuestionElement(obj.question)}
          {createOptionElements(options, obj.correctAnswer)}
        </div>
      );
    });
  };

  const createQuestionElement = (theQuestion) => {
    return (
      <>
        <h2 className={question.question}>{theQuestion}</h2>
      </>
    );
  };

  const createOptionElements = (optionArr, correctAnswer) => {
    return (
      <>
        <ul className={question.options}>
          {optionArr.map((option, id) => {
            if (correctAnswer === option) {
              answerToCurrentQuestion = optionLabels[id];
            }
            return (
              <li
                key={id}
                className={question.option}
                data-option={optionLabels[id]}
                onClick={(e) => {
                  checkAnswer(e);
                }}
              >
                <p className={question.option_label}>{optionLabels[id]}</p>
                <p className={question.option_text}>{option}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <>
      <section className={question.question_container}>
        {currentQuestion && showQuestion()}
      </section>
    </>
  );
}

export default memo(Question);
