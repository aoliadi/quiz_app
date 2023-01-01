import { Link } from "react-router-dom";

function HighScore() {
  const scores = [
    { id: 1, position: 1, username: "playerA", totalScore: 89 },
    { id: 2, position: 2, username: "playerB", totalScore: 8 },
    { id: 3, position: 3, username: "playerC", totalScore: 895 },
  ];

  //   render;
  function renderTopScores() {
    return scores.map(({ id, position, username, totalScore }) => (
      <li key={id} className="">
        {position} | {username} - {totalScore}
      </li>
    ));
  }

  return (
    <>
      <section className="">
        <ul className="">{renderTopScores()}</ul>
        <Link to="/" className="btn">
          Go Home
        </Link>
      </section>
    </>
  );
}

export default HighScore;
