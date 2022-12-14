import React from "react";
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
      <div className="container mx-auto mt-16">
        <div className="text-center px-6 lg:px-0">
          <h2 className="section-title md:text-3xl text-indigo-400">
            Return Calculator
          </h2>
          <p className="section-subtitle text-lg mb-16 max-w-[622px] mx-auto">
          Let&#39;s evaluate your investment class in comparison to Equity Market (NIFTY50) returns
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
