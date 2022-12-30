import home from "../css/home.module.css";

function Home({ setStartGame, highScores }) {
  function showHighScores() {
    console.log(highScores);
  }

  return (
    <>
      <section className={home.container}>
        <h1 className={home.title}>Quick Quiz</h1>
        <button className="btn" onClick={() => setStartGame(true)}>
          play
        </button>
        <button className="btn" onClick={showHighScores}>
          high scores
        </button>
      </section>
    </>
  );
}

export default Home;
