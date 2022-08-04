import React from "react";
import Intro from "./Component/Introduction/Intro";
import About from "./Component/About/About";
import "./index.css";
// import Portfolioo from "./Component/Portfolioo/Portfolioo";
import Contacts from "./Component/Contacts/Contacts";
import Toggle from "./Component/Toggle/Toggle";
import Portfolio from "./Component/Portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Toggle />
      <Intro />
      <About />
      <Portfolio />
      {/* <Portfolioo /> */}
      <Contacts />
    </div>
  );
};

export default App;
