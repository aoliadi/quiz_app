import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import app from "../css/app.module.css";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className={app.container}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
