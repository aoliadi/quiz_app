import { useRef } from "react";
import scorepage from "../css/scorepage.module.css";

function ScorePage() {
  const username = useRef("");

  const handleSave = (e) => {
    e.preventDefault();
    if (!username.current.value) {
      username.current.focus();
      return;
    }
    console.log(username.current.value);
  };

  return (
    <>
      <section className={scorepage.container}>
        <form action="" className={scorepage.form}>
          <input
            placeholder="username"
            type="text"
            ref={username}
            className={scorepage.input}
          />
          <button className="btn" onClick={handleSave}>
            save
          </button>
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

export default ScorePage;
