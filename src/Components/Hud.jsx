import hud from "../css/hud.module.css";

function Hud({ totalScore, MAX_QUESTIONS, questionCounter }) {
  //   console.count("hud renders");
  return (
    <>
      <ul className={hud.container}>
        <li className={hud.item}>
          <h3 className={hud.title}>Questions</h3>
          <p className={hud.value}>
            {questionCounter || 0}/{MAX_QUESTIONS}
          </p>
        </li>
        <li className={hud.item}>
          <h3 className={hud.title}>Score</h3>
          <p className={hud.value}>{totalScore || 0}</p>
        </li>
      </ul>
    </>
  );
}

export default Hud;
