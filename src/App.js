import React from "react";
import Intro from "./Component/Introduction/Intro";
import About from "./Component/About/About";
// import Product from "./Component/Product/Product";
import ProductList from "./Component/ProductList/ProductList";
import "./index.css";
import Portfolioo from "./Component/Portfolioo/Portfolioo";
import Contacts from "./Component/Contacts/Contacts";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      {/* <Product /> */}
      <ProductList />
      <Portfolioo />
      <Contacts />
    </div>
  );
};

export default App;
