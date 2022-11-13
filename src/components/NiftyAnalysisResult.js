import React from "react";
import getNiftyCalculatedValues from "../Functions/getNiftyCalculatedValues";

const ResultDeclaration = ({ principal, loss, invType, invObjective }) => {
  let word = "LOSS";
  let multiplier = 1;
  if (loss <= 0) {
    word = "PROFIT";
    multiplier = -1;
  }
  return (
    principal > 0 ? (<div className="text-center">
      <div className={`text-indigo-600 font-medium text-md md:text-lg mb-2`}>
      OPPORTUNITY {word}: NIFTY50 vs {invType.toUpperCase()}  
      {/* ESTIMATED {word} FROM THIS INVESTMENT: */}
      </div>
      <div className={`${loss > 0 ? `text-red-600 border-red-600` : `text-darkblue border-indigo-600`} text-[24px] font-bold mb-5 border-2 w-fit mx-auto px-4 rounded-lg `}>{toIndianCurrency(loss * multiplier)}</div>
      {loss !== 0 ? (
        loss > 0 ? (
          <div className="text-gray-500 px-10 text-centre tracking-[1%]">
            NIFTY 50 return rates have been
            much higher than {invType} interest rates
            historically.
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
    </div>)
    :<></>
  );
};

const NiftyResultDeclaration = ({principal, period, niftyEarnings, niftyInterest}) => {
  return (
    principal > 0 ? (<div className="text-center mb-8">
      <div className="text-indigo-600 font-medium text-md md:text-lg mb-2">
      {period==1 ? `NIFTY50 EARNINGS IN ${period} YEAR AT ${niftyInterest}%` : `NIFTY50 EARNINGS IN ${period} YEARS AT ${niftyInterest}%`} 
      </div>
      <div className="text-[24px] font-bold mb-3 border-2 w-fit mx-auto px-4 rounded-lg border-indigo-600">{toIndianCurrency(niftyEarnings)}</div>
      
    </div>)
    : <></>
  );
};

const formatToCurrency = (amount) => {
  return (amount).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
  // return (amount).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
}

const toIndianCurrency = (num) => {
  const curr = num.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    // currencyDisplay: 'none'
  });
  return curr;
};


//intl number format
const number = 10192289;
const formatted = (number) => new Intl.NumberFormat("en-IN").format(number);
// console.log("formatted number", formatted)

const Parameters = ({
  invObjective,
  invType,
  principal,
  interestEarned,
  interest,
  period,
  niftyEarnings,
  maturityValue,
  niftyInterest,
}) => {
  return (
    <div className="max-w-[400px] mx-auto px-4">
      {/* investment class */}
      <div className="text-md mb-4">
        {invType !== "default" ? (
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">Investment class</div>
            <div className="border-2 border-indigo-600 px-1 rounded-md text-center w-full md:w-max">
              {invType}
            </div>
          </div>
        ) : (
          <div className="text-red-500 text-center">Please select investment type!</div>
        )}
      </div>

      {/* investment amount */}
      <div className="text-md mb-4">
        {principal > 0 ? (
          <div className="flex justify-between items-center">
            <div className="text-gray-400 w-max">Invested amount:</div>
            <div className="border-2 border-indigo-600 px-2 w-max rounded-md h-full text-center">
              {/* {toIndianCurrency(principal)} */}
              <span>&#8377;</span>{formatted(principal)}
            </div>
          </div>
        ) : (
          <div className="text-red-500 text-center">Please enter invested amount!</div>
        )}
      </div>

      {/* Investment Period */}
      <div className="text-md mb-4">
        {invType && principal ? (
          <div className="flex justify-between">
            <div className="text-gray-400">Investment period:</div>
            <div className="border-2 border-indigo-600 px-1 rounded-md text-center">
              {period==1 ? `${period} year` : `${period} years`}
            </div>
          </div>
        ) : ( <></>
          // <div className="text-red-500">Please select investment period!</div>
        )}
      </div>

      {/* Maturity Value */}
      <div className="text-md mb-4">
        { principal > 0 ? (
        <div className="flex justify-between">
          <div className="text-gray-400">Return % per annum:</div>
          <div className="border-2 border-indigo-600 px-2 rounded-md text-center">
            {interest}%
          </div>
        </div>)
        : <></>}
      </div>

      {/* Return Earned */}
      <div className="text-md mb-4">
        {(principal > 0 && invType) ? 
          (<div className="flex justify-between">
            <div className="text-gray-400 w-max">Return Earned:</div>
            <div className="border-2 border-indigo-600 px-2 rounded-md text-center w-max">
              {toIndianCurrency(interestEarned)}
              {/* Rs. {toIndianCurrency(interestEarned)} */}
            </div>
          </div>)
          : <></>}
      </div>

      {/* Maturity Value */}
      <div className="text-md mb-4">
        {(principal > 0 && invType) ? (
          <div className="flex justify-between">
            <div className="text-gray-400 w-max">Maturity Value:</div>
            <div className="border-2 border-indigo-600 px-2 rounded-md text-center w-max">
              {toIndianCurrency(maturityValue)}
            </div>
          </div>
        )
        : <></>}
      </div>
    </div>
  );
};

// const Parameters = ({
//   invObjective,
//   invType,
//   principal,
//   interestEarned,
//   interest,
//   period,
//   niftyEarnings,
//   maturityValue,
//   niftyInterest
// }) => {
//   return (
//     <div className="">
//       <div className="text-lg mb-4">
//         {invType !== "default" ? (
//           <div className="flex flex-row max-w-[400px] justify-between">
//             <div className="text-gray-400 mr-2">Investment class:</div>
//             <div className="border-2 border-indigo-600 px-2 rounded-md">{invType}</div>
//           </div>
//         ) : (
//           <span className="text-red-500">Please select investment type!</span>
//         )}
//       </div>

//       <div className="text-lg mb-4">
//         {principal > 0 ? (
//           <span>
//             <span className="text-gray-400 mr-2">Invested amount is</span>Rs.{" "}
//             {principal}
//           </span>
//         ) : (
//           <span className="text-red-500">Please enter principal amount!</span>
//         )}
//       </div>
//       <div className="text-lg mb-4">
//         {interest ? (
//           <span>
//             <span className="text-gray-400 mr-2">
//               Total interest earned at {interest}%
//               is
//             </span>
//             Rs. {interestEarned}
//           </span>
//         ) : (
//           <span className="text-red-500">Please enter interest rate!</span>
//         )}
//       </div>
//       <div className="text-lg mb-4">
//         {period >= 0 ? (
//           <span>
//             <span className="text-gray-400 mr-2">
//               Total maturity value after {period===1 ? `${period} year` : `${period} years`} is
//             </span>
//             Rs. {maturityValue}
//           </span>
//         )
//       :<span className="text-red-500">Please enter investment period!</span>}
//       </div>
//       <div className="text-lg mb-4">
//         {period >= 0 && (
//           <span>
//             <span className="text-gray-400 mr-2">
//               NIFTY50 Earnings in {period===1 ? `${period} year` : `${period} years`} at {niftyInterest}% is
//             </span>
//             Rs. {niftyEarnings}
//           </span>
//         )}
//       </div>
//       <div className="text-lg mb-4">
//         {(invObjective===undefined || invObjective==="default") && <span className="text-red-500">Please choose investment objective!</span>}
//       </div>
//     </div>
//   );
// };

const NiftyAnalysisResult = ({
  principal,
  period,
  interest,
  invType,
  invObjective,
  niftyInterest,
}) => {
  // console.log(
  //   "from results",
  //   "prinicipal:",
  //   principal,
  //   period,
  //   interest,
  //   invType
  // );
  const result = getNiftyCalculatedValues(
    principal,
    period,
    interest,
    invType,
    niftyInterest
  );



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
      <NiftyResultDeclaration
        principal={principal}
        period={period}
        niftyEarnings={result.niftyEarnings}
        niftyInterest={niftyInterest}
      />
      <ResultDeclaration
        principal={principal}
        loss={result.loss}
        invType={invType}
        invObjective={invObjective}
      />
    </div>
  );
};

export default NiftyAnalysisResult;
