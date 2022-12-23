import app from "../css/app.module.css";

const App = () => {
  return (
    <>
      <main className={app.container}>
        <h1 className={app.title}>Quick Quiz</h1>
        <a href="" className={app.btn}>
          play
        </a>
        <a href="" className={app.btn}>
          high scores
        </a>
      </main>
    </>
  );
};

export default App;
