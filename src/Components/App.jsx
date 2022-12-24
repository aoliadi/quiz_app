import Home from "./Home";
import app from "../css/app.module.css";
import Question from "./Question";

const App = () => {
  return (
    <>
      <main className={app.container}>
        {/* <Home /> */}
        <Question />
      </main>
    </>
  );
};

export default App;
