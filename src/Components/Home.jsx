import { Link, useNavigate } from "react-router-dom";
import home from "../css/home.module.css";
import { QUIZ_ROUTE_PATHS } from "../Utils/questionBank";

function Home({ setStartGame, highScores }) {
  const navigateTo = useNavigate();

  return (
    <>
      <section className={home.container}>
        <h1 className={home.title}>Quick Quiz</h1>
        <button className="btn" onClick={() => navigateTo("/start-game")}>
          {/* <Link
          to={QUIZ_ROUTE_PATHS.startGame}
          className="btn"
          onClick={() => setStartGame(true)}
        > */}
          play
        </button>
        <Link to={QUIZ_ROUTE_PATHS.highScore} className="btn">
          high scores
        </Link>
      </section>
    </>
  );
}

export default Home;
