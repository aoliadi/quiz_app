import home from "../css/home.module.css";

function Home({ memoizedPickAQuestion, setStartGame }) {
  return (
    <>
      <section className={home.container}>
        <h1 className={home.title}>Quick Quiz</h1>
        <button
          className="btn"
          onClick={() => {
            memoizedPickAQuestion();
            setStartGame(true);
          }}
        >
          play
        </button>
        <button className="btn">high scores</button>
      </section>
    </>
  );
}

export default Home;
