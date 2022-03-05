import React, { useContext } from "react";
import { ThemeContext } from "./Context";
import About from "./PortfolioContainer/About/About";
import Contact from "./PortfolioContainer/Contact/Contact";
import Intro from "./PortfolioContainer/Intro/Intro";
import ProductList from "./PortfolioContainer/ProductList/ProductList";
import Toggle from "./PortfolioContainer/Toggle/Toggle";

const App = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
