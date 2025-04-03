import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Widget from "./Screens/ChatWidget/Component/Widget";
// import { motion, Cursor } from "Cursor/react";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        {/* <Cursor /> */}
        <Widget />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
