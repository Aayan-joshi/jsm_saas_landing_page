import React from "react";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";

const App = () => {
  return (
    <mail classname={`overflow-hidden`}>
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </mail>
  );
};
export default App;
