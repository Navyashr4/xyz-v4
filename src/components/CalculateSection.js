import React from "react";
import CalcForm from "./CalcForm";
import NiftyCalculator from "./NiftyCalculator";

const Calculate = ({
  slideToFirst,
  handleSlideToFirst,
  handleInvTypeApp,
  handleAnalyseApp,
  invTypeApp,
  resultsSection,
  scrollToResultsSection,
}) => {
  return (
    <section className="section">
      {/* data-aos='fade-in'
    data-aos-delay='900' */}
      <div className="container mx-auto mt-16">
        {/* text */}
        <div className="text-center px-6 lg:px-0">
          <h2 className="section-title md:text-3xl text-indigo-400">
            Calculator
          </h2>
          <p className="section-subtitle text-lg mb-16 max-w-[622px] mx-auto">
            Evaluate your investment class in comparison to NIFTY50 returns
            gained for the same principal and tenure
          </p>
        </div>
        {/* form */}
        <NiftyCalculator
          slideToFirst={slideToFirst}
          handleSlideToFirst={handleSlideToFirst}
          handleInvTypeApp={handleInvTypeApp}
          invTypeApp={invTypeApp}
          handleAnalyseApp={handleAnalyseApp}
          resultsSection={resultsSection}
          scrollToResultsSection={scrollToResultsSection}
        />
        {/* <CalcForm handleInvTypeApp={handleInvTypeApp} handleAnalyseApp={handleAnalyseApp}/> */}
      </div>
    </section>
  );
};

export default Calculate;
