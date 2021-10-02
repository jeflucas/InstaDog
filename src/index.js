import React from "react";

import Logo from "./components/Logo";
import Photo from "./components/Photo";

const Main = () => {
  return (
    <>
      <Logo />
      <Photo count={3} file={require("./assets/img/001.jpg")} />
      <Photo count={0} file={require("./assets/img/002.jpg")} />
    </>
  );
};

export default Main;
