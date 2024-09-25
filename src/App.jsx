import React from "react";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";

const App = () => {
  return (
    <mail classname={`overflow-hidden`}>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
    </mail>
  );
};
export default App;
