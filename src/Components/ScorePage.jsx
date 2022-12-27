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
          <button className={scorepage.btn} onClick={handleSave}>
            save
          </button>
        </form>
        <a href="" className={scorepage.btn}>
          play again
        </a>
        <a href="" className={scorepage.btn}>
          go home
        </a>
      </section>
    </>
  );
}

export default ScorePage;
