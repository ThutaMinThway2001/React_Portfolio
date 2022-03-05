import React from "react";
import About from "./PortfolioContainer/About/About";
import Contact from "./PortfolioContainer/Contact/Contact";
import Intro from "./PortfolioContainer/Intro/Intro";
import ProductList from "./PortfolioContainer/ProductList/ProductList";

const App = (props) => {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
