import React, { useEffect, useState, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import InvCarousel from "./components/InvCarousel.js";
import NavMobile from "./components/NavMobile.js";
// import Stats from "./components/Stats.js";
import CalculateSection from "./components/CalculateSection.js";
// import SupportingData from "./components/SupportingData.js";
import Resources from "./components/Resources.js";

import Footer from "./components/Footer.js";
import AnalysisParameters from "./components/AnalysisParameters.js";
import InvestmentInfo from "./components/InvestmentInfo.js";
// import BarChart from "./components/BarChart.js";
// import UserData from "./data/sampleChartData.js";
// import NiftyCalculator from "./components/NiftyCalculator.js";
import DomInvPills from "./components/DomInvPills.js";
// import DummyCarousel from "./components/DummyCarousel";
import Trivia from "./components/Trivia.js";
import ULIPTrivia from "./components/ULIPTrivia.js"

const App = () => {
  const [navMobile, setNavMobile] = useState(false);
  const [invType, setInvType] = useState("Bank Fixed Deposit");
  const [analyse, setAnalyse] = useState(false);
  const [slideToFirst, setSlideToFirst] = useState(true);

  const handleInvTypeApp = (inv) => {
    setInvType(inv);
  };

  const handleAnalyseApp = (analyse) => {
    setAnalyse(analyse);
  };

  const handleSlideToFirst = (slideBool) =>{
    setSlideToFirst(slideBool)
  };

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  const calculator = useRef(null);
  const learnMoreSection = useRef(null);
  const resultsSection = useRef(null);

  const scrollToCalculator = (calculator) => {
    window.scrollTo({
      top: calculator.current.offsetTop + 100,
      behavior: "smooth",
    });
  };

  const scrollToLearnMoreSection = (learnMoreSection) => {
    window.scrollTo({
      top: learnMoreSection.current.offsetTop + 50,
      behavior: "smooth",
    });
  };

  const scrollToResultsSection = (resultsSection) => {
    window.scrollTo({
      top: resultsSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  //barChart
  // const [userData, setUserData] = useState({
  //   labels: ["Return on investment"],
  //   datasets: [{
  //     label: "Users Gained",
  //     data: [50000],
  //     backgroundColor: ["red"],
  //     borderColor: ["white"],
  //     borderWidth: 2
  //   },
  //   {
  //     label: "Users Lost",
  //     data: [678],
  //     backgroundColor: ["blue"]
  //   }]
  // })

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

      <Hero calculator={calculator} scrollToCalculator={scrollToCalculator} />
      <DomInvPills
        handleSlideToFirst={handleSlideToFirst}
        handleInvTypeApp={handleInvTypeApp}
        invType={invType}
      />
      {/* <Stats /> */}
      <InvCarousel
        slideToFirst={slideToFirst}
        handleSlideToFirst={handleSlideToFirst}
        handleInvTypeApp={handleInvTypeApp}
        invType={invType}
        calculator={calculator}
        scrollToCalculator={scrollToCalculator}
        learnMoreSection={learnMoreSection}
        scrollToLearnMoreSection={scrollToLearnMoreSection}
      />
      {/* <BarChart chartData={userData} /> */}
      {/* <DummyCarousel /> */}
      {/* <ULIPTrivia /> */}
      <Trivia invType={invType} />
      {/* <div>
        <h1>{toIndianCurrency(500000)}</h1>
      </div> */}

      <div ref={calculator}></div>
      <CalculateSection
        slideToFirst={slideToFirst}
        handleSlideToFirst={handleSlideToFirst}
        handleInvTypeApp={handleInvTypeApp}
        invTypeApp={invType}
        handleAnalyseApp={handleAnalyseApp}
        resultsSection={resultsSection}
        scrollToResultsSection={scrollToResultsSection}
      />
      {/* <div className="h-[60px] bg-red-600" ref={resultsSection}></div> */}
      <div ref={learnMoreSection}></div>
      {<AnalysisParameters invType={invType} />}
      {/* {analyse && <SupportingData invType={invType}/>} */}
      {<InvestmentInfo invType={invType} />}
      {<Resources invType={invType} />}

      <Footer />
    </div>
  );
};

export default App;
