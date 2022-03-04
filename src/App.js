import React from "react";
import About from "./PortfolioContainer/About/About";
import Intro from "./PortfolioContainer/Intro/Intro";
import ProductList from "./PortfolioContainer/ProductList/ProductList";

const App = (props) => {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProductList />
    </div>
  );
};

export default App;
