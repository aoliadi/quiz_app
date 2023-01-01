export const MAX_QUESTIONS = 3;
export const OBTAINABLE_SCORE = 5;
export const TOTAL_OBTAINABLE_SCORE = OBTAINABLE_SCORE * MAX_QUESTIONS;
export const triviaApiUri =
  // "https://the-trivia-api.com/api/questions?categories=geography&limit=8&region=NG&difficulty=medium&tags=africa";

  `https://the-trivia-api.com/api/questions?limit=${MAX_QUESTIONS + 1}`;

export const QUIZ_ROUTE_PATHS = {
  startGame: "start-game",
  saveScore: "save-score",
  highScore: "high-score",
};
