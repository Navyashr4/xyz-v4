import React from "react";
import getNiftyCalculatedValues from "../Functions/getNiftyCalculatedValues";

const ResultDeclaration = ({ loss, invType, invObjective }) => {
  let word = "LOSS";
  let multiplier = 1;
  if (loss <= 0) {
    word = "PROFIT";
    multiplier = -1;
  }
  return (
    <div className="text-center">
      <div className="text-indigo-600 font-medium mb-4">
        ESTIMATED {word} FROM THIS INVESTMENT:
      </div>
      <div className="text-[32px] font-bold mb-3">Rs. {loss * multiplier}</div>
      {loss !== 0 ? (
        loss > 0 ? (
          <div className="text-gray-500 px-10 text-centre tracking-[1%]">
            As the supporting data below shows, NIFTY 50 return rates have been much
            higher than {invType.toLowerCase()} interest rates historically.
          </div>
        ) : (
          <div className="text-gray-500 px-10 text-centre tracking-[1%]">
            You made a <span className="text-indigo-600">profit!</span> Great
            investment!{" "}
          </div>
        )
      ) : (
        <div className="text-gray-500 px-10 text-centre tracking-[1%]">
          No loss! Good investment.
        </div>
      )}
    </div>
  );
};

const Parameters = ({
  invObjective,
  invType,
  principal,
  interestEarned,
  interest,
  period,
  niftyEarnings,
  maturityValue,
  niftyInterest
}) => {
  return (
    <div className="text-center">
      <div className="text-lg mb-4">
        {invType !== "default" ? (
          <span>
            <span className="text-gray-400 mr-2">Investment type is</span>{" "}
            {invType}
          </span>
        ) : (
          <span className="text-red-500">Please select investment type!</span>
        )}
      </div>
      <div className="text-lg mb-4">
        {principal > 0 ? (
          <span>
            <span className="text-gray-400 mr-2">Invested amount is</span>Rs.{" "}
            {principal}
          </span>
        ) : (
          <span className="text-red-500">Please enter principal amount!</span>
        )}
      </div>
      <div className="text-lg mb-4">
        {interest ? (
          <span>
            <span className="text-gray-400 mr-2">
              Total interest earned at {interest}%
              is
            </span>
            Rs. {interestEarned}
          </span>
        ) : (
          <span className="text-red-500">Please enter interest rate!</span>
        )}
      </div>
      <div className="text-lg mb-4">
        {period >= 0 ? (
          <span>
            <span className="text-gray-400 mr-2">
              Total maturity value after {period===1 ? `${period} year` : `${period} years`} is
            </span>
            Rs. {maturityValue}
          </span>
        )
      :<span className="text-red-500">Please enter investment period!</span>}
      </div>
      <div className="text-lg mb-4">
        {period >= 0 && (
          <span>
            <span className="text-gray-400 mr-2">
              NIFTY50 Earnings in {period===1 ? `${period} year` : `${period} years`} at {niftyInterest}% is
            </span>
            Rs. {niftyEarnings}
          </span>
        )}
      </div>
      <div className="text-lg mb-4">
        {(invObjective===undefined || invObjective==="default") && <span className="text-red-500">Please choose investment objective!</span>}
      </div>
    </div>
  );
};

const NiftyAnalysisResult = ({
  principal,
  period,
  interest,
  invType,
  invObjective,
  niftyInterest
}) => {
  // console.log(
  //   "from results",
  //   "prinicipal:",
  //   principal,
  //   period,
  //   interest,
  //   invType
  // );
  const result = getNiftyCalculatedValues(principal, period, interest, invType, niftyInterest);

  return (
    <div className="px-4">
      <p className="text-gray-900 text-3xl font-semibold mb-8 text-center">
        Your investment analysis report
      </p>
      <Parameters
        invObjective={invObjective}
        invType={invType}
        principal={principal}
        interestEarned={result.interestEarned}
        interest={interest}
        period={period}
        maturityValue={result.maturityValue}
        niftyEarnings={result.niftyEarnings}
        niftyInterest={niftyInterest}
      />
      <div className="p-5"></div>
      <ResultDeclaration
        loss={result.loss}
        invType={invType}
        invObjective={invObjective}
      />
    </div>
  );
};

export default NiftyAnalysisResult;
