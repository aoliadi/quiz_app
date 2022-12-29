import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function RootLayout() {
  const mainSectionStyle = {
    // border: "2px solid red",
    // padding: "1.8rem",
    // margin: "1.5rem auto",
    // maxWidth: "70rem",
    // height: "calc(100vh - 400px)",
  };

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
