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
// const MAX_QUESTIONS = 3;
// const CORRECT_SCORE = 10;

function Question() {
  // const [totalScore, setTotalScore] = useState(0);
  const [questionCounter, setQuestionCounter] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  // let availableQuestions = [];
  const [availableQuestions, setAvailableQuestions] = useState(null);
  // let answerToCurrentQuestion = "";

  const getAllQuestions = () => {
    setAvailableQuestions(questions);
  };

  const chooseCurrentQuestion = () => {
    const questionToDisplay = Math.floor(
      Math.random() * availableQuestions.length
    );
    setCurrentQuestion([availableQuestions[questionToDisplay]]);
    setQuestionCounter((prev) => prev + 1);

    // setAvailableQuestions((prevQuestionArr) =>
    //   prevQuestionArr.splice(questionToDisplay, 1)
    // );
  };

  useEffect(() => {
    getAllQuestions();

    return () => {};
  }, []);

  return (
    <>
      <button onClick={chooseCurrentQuestion}>Start</button>
      {currentQuestion?.map((obj, id) => {
        const options = [...obj.incorrectAnswers, obj.correctAnswer];
        const optionLabels = ["a", "b", "c", "d"];

        return (
          <section key={id} className={question.container}>
            <h2 className={question.question}>{obj.question}</h2>
            <ul className={question.options}>
              {options.map((option, id) => {
                return (
                  <li
                    key={id}
                    className={question.option}
                    data-option={optionLabels[id]}
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
