export const MAX_QUESTIONS = 5;
export const OBTAINABLE_SCORE = 5;
export const TOTAL_OBTAINABLE_SCORE = OBTAINABLE_SCORE * MAX_QUESTIONS;
export const triviaApiUri =
  // "https://the-trivia-api.com/api/questions?categories=geography&limit=8&region=NG&difficulty=medium&tags=africa";

  `https://the-trivia-api.com/api/questions?categories=sport_and_leisure,science,general_knowledge,geography&limit=${
    MAX_QUESTIONS + 1
  }&difficulty=easy`;

// https://opentdb.com/api.php?amount=10

export const QUIZ_ROUTE_PATHS = {
  startGame: "start-game",
  saveScore: "save-score",
  highScore: "high-score",
};

export const BLACK_COLOR = "#333";
export const WHITE_COLOR = "#fff";
export const CORRECT_COLOR = "green";
export const INCORRECT_COLOR = "red";
