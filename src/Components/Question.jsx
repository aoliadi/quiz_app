import question from "../css/question.module.css";

function Question() {
  return (
    <>
      <section className={question.container}>
        <h2 className={question.question}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
          asperiores!
        </h2>
        <ul className={question.options}>
          <li className={question.option} data-option="A">
            <p className={question.option_label}>a</p>
            <p className={question.option_text}>option</p>
          </li>
          <li className={question.option}>
            <p className={question.option_label}>b</p>
            <p className={question.option_text}>option</p>
          </li>
          <li className={question.option}>
            <p className={question.option_label}>c</p>
            <p className={question.option_text}>option</p>
          </li>
          <li className={question.option}>
            <p className={question.option_label}>d</p>
            <p className={question.option_text}>option</p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Question;
