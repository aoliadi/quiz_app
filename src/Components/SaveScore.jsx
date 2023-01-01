import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import saveScore from "../css/saveScore.module.css";
import { TOTAL_OBTAINABLE_SCORE } from "../Utils/questionBank";

function SaveScore({ totalScore, setHighScores }) {
  const username = useRef("");
  const spanElem = useRef("");
  const navigateTo = useNavigate();

  const [contentToDisplay, setContentToDisplay] = useState(
    totalScore ? `${totalScore} of ${TOTAL_OBTAINABLE_SCORE} points` : "Sorry!"
  );

  const handleSave = (e) => {
    e.preventDefault();
    if (!username.current.value) {
      username.current.focus();
      return;
    }

    if (!totalScore) return;

    const playerName = username.current.value;
    username.current.value = "";
    setContentToDisplay("Saved!");

    setHighScores((prev) => [
      ...prev,
      { position: 1, username: playerName, totalScore },
    ]);
  };

  return (
    <>
      <section className={saveScore.container}>
        <span ref={spanElem} className={saveScore.scoreBoard}>
          {contentToDisplay}
        </span>

        {totalScore ? (
          <form action="" className={saveScore.form} onSubmit={handleSave}>
            <input
              placeholder="username"
              type="text"
              ref={username}
              className={saveScore.input}
            />
            <button className="btn">save</button>
          </form>
        ) : null}

        <button className="btn" onClick={() => navigateTo("/start-game")}>
          play again
        </button>
        <Link to="/" className="btn">
          go home
        </Link>
      </section>
    </>
  );
}

export default SaveScore;
