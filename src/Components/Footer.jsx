import { Link } from "react-router-dom";
import footer from "../css/footer.module.css";

function Footer() {
  return (
    <>
      <footer className={footer.container}>
        <small className={footer.footnote}>
          Made with ♥ by{" "}
          <Link
            style={{ textTransform: "lowercase", color: "var(--header-color)" }}
            to="https://twitter.com/aoliadi"
          >
            aoliadi
          </Link>
        </small>
      </footer>
    </>
  );
}

export default Footer;
