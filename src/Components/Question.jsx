import question from "../css/question.module.css";
import { useEffect, useState } from "react";

const questions = [
  {
    category: "Sport & Leisure",
    id: "622a1c347cc59eab6f94f86d",
    correctAnswer: "Cricket",
    incorrectAnswers: ["Motor Racing", "Gymnastics", "Basketball"],
    question: "With which sport is Sir Gary Sobers associated?",
    tags: ["people", "sport"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
    isNiche: false,
  },
  {
    category: "Sport & Leisure",
    id: "62417d480f96c4efe8d773b7",
    correctAnswer: "Milwaukee Bucks",
    incorrectAnswers: ["Milwaukee Heat", "Milwaukee Reds", "Milwaukee Pirates"],
    question: "Which of these is a basketball team based in Milwaukee?",
    tags: ["sport"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
    isNiche: false,
  },
  {
    category: "Sport & Leisure",
    id: "6242e860a22452794eaef217",
    correctAnswer: "The Lions",
    incorrectAnswers: ["The Boro", "The Tigers", "The Magpies"],
    question: "What is the nickname of the English football team Millwall?",
    tags: ["sport"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
    isNiche: false,
  },
];
const BLACK_COLOR = "#333";
const WHITE_COLOR = "#fff";
const CORRECT_COLOR = "green";
const INCORRECT_COLOR = "red";

const MAX_QUESTIONS = 5;
const OBTAINABLE_SCORE = 2;
// const TOTAL_OBTAINABLE_SCORE = OBTAINABLE_SCORE * MAX_QUESTIONS;

function Question() {
  // const [isCorrect, setIsCorrect] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [questionCounter, setQuestionCounter] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  // let availableQuestions = [];
  const [availableQuestions, setAvailableQuestions] = useState(null);
  let answerToCurrentQuestion = "";

  const getAllQuestions = () => {
    setAvailableQuestions(questions);
  };

  const chooseCurrentQuestion = () => {
    if (MAX_QUESTIONS === questionCounter) {
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
      chooseCurrentQuestion();
    }, 1500);
  };

  const randomizeArray = (arr) => {
    return arr.sort(() => 0.5 - Math.random());
  };

  const resetOption = (option) => {
    option.lastChild.style.backgroundColor = WHITE_COLOR;
    option.lastChild.style.color = BLACK_COLOR;
  };

  const incrementScoreBy = (score) => {
    setTotalScore((prev) => prev + score);
  };

  useEffect(() => {
    getAllQuestions();

    return () => {};
  }, []);

  return (
    <>
      <button onClick={chooseCurrentQuestion}>Start</button>

      {currentQuestion && (
        <header className={question.header_container}>
          <ul className={question.hud_container}>
            <li className={question.hud_item}>
              <h3 className={question.hud_title}>Questions</h3>
              <p className={question.hud_value}>
                {questionCounter || 0}/{MAX_QUESTIONS}
              </p>
            </li>
            <li className={question.hud_item}>
              <h3 className={question.hud_title}>Score</h3>
              <p className={question.hud_value}>{totalScore || 0}</p>
            </li>
          </ul>
        </header>
      )}

      {currentQuestion?.map((obj, id) => {
        // answerToCurrentQuestion = obj.correctAnswer;
        const optionLabels = ["a", "b", "c", "d"];
        const options = randomizeArray([
          ...obj.incorrectAnswers,
          obj.correctAnswer,
        ]);

        return (
          <section key={id} className={question.question_container}>
            <h2 className={question.question}>{obj.question}</h2>
            <ul className={question.options}>
              {options.map((option, id) => {
                if (obj.correctAnswer === option) {
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
          </section>
        );
      })}
      {/* <h2 className={question.question}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
          asperiores!
        </h2>
      <ul className={question.options}>
        <li className={question.option} data-option="A">
          <p className={question.option_label}>a</p>
          <p className={question.option_text}>option</p>
        </li>
        <li className={question.option}>
          <p className={question.option_label}>b</p>
          <p className={question.option_text}>option</p>
        </li>
        <li className={question.option}>
          <p className={question.option_label}>c</p>
          <p className={question.option_text}>option</p>
        </li>
        <li className={question.option}>
          <p className={question.option_label}>d</p>
          <p className={question.option_text}>option</p>
        </li>
      </ul> */}
    </>
  );
}

export default Question;
