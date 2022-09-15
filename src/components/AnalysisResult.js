import React from "react";
import getCalculatedValues from "../Functions/getCalculatedValues.js";

const ResultDeclaration = ({ loss, invType, invObjective }) => {
  let word = "LOSS";
  let multiplier = 1;
  if (loss < 0) {
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
            As the supporting data below shows, inflation rates have been much
            higher than bank interest rates historically. Hence its not
            advisable to put money in {invType.toLowerCase()} if your objective
            is {invObjective}.
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
  earningsNeeded,
  maturityValue,
}) => {
  console.log(invObjective)
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
        {principal >= 0 ? (
          <span>
            <span className="text-gray-400 mr-2">Invested amount is</span>Rs.{" "}
            {principal}
          </span>
        ) : (
          <span className="text-red-500">Please enter principal amount!</span>
        )}
      </div>
      <div className="text-lg mb-4">
        {interest >= 0 ? (
          <span>
            <span className="text-gray-400 mr-2">
              Total Compound interest earned at {interest >= 0 ? interest : 0}%
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
              Total maturity value after {period} years is
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
              Earnings needed to beat 7% inflation is
            </span>
            Rs. {earningsNeeded}
          </span>
        )}
      </div>
      <div className="text-lg mb-4">
        {(invObjective===undefined || invObjective==="default") && <span className="text-red-500">Please choose investment objective!</span>}
      </div>
    </div>
  );
};

const AnalysisResult = ({
  principal,
  period,
  interest,
  invType,
  invObjective,
}) => {
  console.log(
    "from results",
    "prinicipal:",
    principal,
    period,
    interest,
    invType
  );
  const result = getCalculatedValues(principal, period, interest, invType);

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
        earningsNeeded={result.earningsNeeded}
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

export default AnalysisResult;
