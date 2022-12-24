import question from "../css/question.module.css";
import { useState } from "react";

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

function Question() {
  return (
    <>
      <section className={question.container}>
        <h2 className={question.question}>
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
        </ul>
      </section>
    </>
  );
}

export default Question;
