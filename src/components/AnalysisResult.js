import React from "react";

const ResultDeclaration = () => {
  return (
    <div className="text-center">
      <div className="text-indigo-600 font-medium mb-4">
        ESTIMATED LOSS FROM THIS INVESTMENT:
      </div>
      <div className="text-[32px] font-bold mb-3">
        Rs. 10,929
      </div>
      <div className="text-gray-500 px-10 text-centre tracking-[1%]">
      As the supporting data below shows, inflation rates have been much higher than bank interest rates historically. Hence its not advisable to put money in Bank Fixed Deposit if your objective is saving for retirement.
      </div>
    </div>
  );
};

const Parameters = () => {
  return (
    <div className="text-center">
      <div className="text-lg mb-4">
        <span className="text-gray-400 mr-2">Invested amount is</span>Rs.67822
      </div>
      <div className="text-lg mb-4">
        <span className="text-gray-400 mr-2">Total Compunded interest earned at 9% is</span>Rs.67822
      </div>
      <div className="text-lg mb-4">
        <span className="text-gray-400 mr-2">Total maturity value after 3 years is</span>Rs.67822
      </div>
      <div className="text-lg mb-4">
        <span className="text-gray-400 mr-2">Earnings needed to beat 7% inflation is</span>Rs.67822
      </div>

    </div>
  );
};

const AnalysisResult = () => {
  return (
    <div className="px-4">
        <p className="text-gray-900 text-3xl font-semibold mb-8 text-center">Your investment analysis report</p>
        <Parameters/>
        <div className="p-5"></div>
        <ResultDeclaration />
    </div>
  );
};

export default AnalysisResult;
