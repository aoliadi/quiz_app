import Home from "./Home";
import app from "../css/app.module.css";
import Question from "./Question";
import ScorePage from "./ScorePage";

const App = () => {
  return (
    <>
      <main className={app.container}>
        {/* <Home /> */}
        {/* <Question /> */}
        <ScorePage />
      </main>
    </>
  );
};

export default App;
