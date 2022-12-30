import { useRef } from "react";
import saveScore from "../css/saveScore.module.css";

function SaveScore({ totalScore, setHighScores }) {
  const username = useRef("");

  const handleSave = (e) => {
    e.preventDefault();
    if (!username.current.value) {
      username.current.focus();
      return;
    }

    if (!totalScore) {
      return;
    }

    const playerName = username.current.value;
    username.current.value = "";

    setHighScores((prev) => [
      ...prev,
      { position: 1, username: playerName, totalScore },
    ]);
  };

  return (
    <>
      <section className={saveScore.container}>
        <span className={saveScore.scoreBoard}>{totalScore}</span>
        <form action="" className={saveScore.form} onSubmit={handleSave}>
          <input
            placeholder="username"
            type="text"
            ref={username}
            className={saveScore.input}
          />
          <button className="btn">save</button>
        </form>
        <a href="" className="btn">
          play again
        </a>
        <a href="" className="btn">
          go home
        </a>
      </section>
    </>
  );
}

export default SaveScore;
