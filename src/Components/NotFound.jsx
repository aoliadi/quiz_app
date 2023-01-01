import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="">This page does not exist.</section>
      <Link to="/" className="btn">
        Go Home
      </Link>
    </>
  );
};

export default NotFound;
