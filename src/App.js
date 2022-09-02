import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import NavMobile from "./components/NavMobile.js";
import Stats from "./components/Stats.js";
import CalculateSection from "./components/CalculateSection.js";
import SupportingData from "./components/SupportingData.js";
import Resources from "./components/Resources.js";

import Footer from "./components/Footer.js";
import AnalysisParameters from "./components/AnalysisParameters.js";
import InvestmentInfo from "./components/InvestmentInfo.js";

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

      <CalculateSection handleInvTypeApp = {handleInvTypeApp} handleAnalyseApp={handleAnalyseApp}/>
      {analyse && <AnalysisParameters invType={invType}/>}
      {analyse && <SupportingData invType={invType}/>}
      {analyse && <InvestmentInfo invType={invType}/>}
      {analyse && <Resources invType={invType}/>}

      <Footer />
    </div>
  );
};

export default App;

