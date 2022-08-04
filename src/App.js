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
import GoodBadUgly from "./components/GoodBadUgly"
import Features from "./components/Features.js";
import Newsletter from "./components/Newsletter.js";
import Footer from "./components/Footer.js";
import SupportingData from "./components/SupportingData.js";

import { facts } from "./data/data";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);
  const [invType, setInvType] = useState();
  const [analyse, setAnalyse] = useState(false);

  const handleInvTypeApp = (inv) => {
    setInvType(inv);
  }

  const handleAnalyseApp = (analyse) => {
    setAnalyse(analyse);
  }

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
      <Calculate handleInvTypeApp = {handleInvTypeApp} handleAnalyseApp={handleAnalyseApp}/>
      {analyse && <GoodBadUgly invType={invType}/>}
      {analyse && <SupportingData invType={invType}/>}
      {/* <Features />
      <Newsletter />
      <Footer /> */}
      <div className="py-[200px]"></div>
    </div>
  );
};

export default App;

