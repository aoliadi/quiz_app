import home from "../css/home.module.css";

function Home() {
  return (
    <>
      <section className={home.container}>
        <h1 className={home.title}>Quick Quiz</h1>
        <a href="" className={home.btn}>
          play
        </a>
        <a href="" className={home.btn}>
          high scores
        </a>
      </section>
    </>
  );
}

export default Home;
