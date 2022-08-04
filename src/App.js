import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import NavMobile from "./components/NavMobile.js";
import Stats from "./components/Stats.js";
import Fact from "./components/Fact.js";
import Calculate from "./components/Calculate.js";
import Trade from "./components/Trade.js";
import Features from "./components/Features.js";
import Newsletter from "./components/Newsletter.js";
import Footer from "./components/Footer.js";

import { facts } from "./data/data";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div className="overflow-hidden">
      <Header setNavMobile={setNavMobile} />
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed z-10 top-0 h-full transition-all duration-2000`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Hero />
      <Stats />
      <Fact orderImage={1} orderText={2} fact={facts[0].fact1} fadeDirection={'fade-right'}/>
      <Fact orderImage={2} orderText={1} fact={facts[0].fact2} fadeDirection={'fade-left'}/>
      <Calculate />
      {/* <Trade />
      <Features />
      <Newsletter />
      <Footer /> */}
      <div className="py-[2000px]"></div>
    </div>
  );
};

export default App;

