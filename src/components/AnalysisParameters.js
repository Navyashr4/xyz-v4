import React from "react";
import getInvParameters from "../Functions/getInvParameters";
import getBgBorderColors from "../Functions/getBgBorderColors";

const AnalysisParameters = ({ invType }) => {
  // console.log("Inv Type from analysis parameters",invType)
  const invParameters = getInvParameters(invType);
  // console.log("Analysis parameters", invParameters);

  let totalScore;
  if(invParameters) {
    totalScore = invParameters.reduce((acc, item) => acc + item.score, 0);
  }

  return (
    <section className="section mx-2 lg:mx-0  text-darkblue">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div>
          <p className="section-title text-center mb-8 section-title md:text-3xl text-indigo-400">
            Analysis of {invType} investments
          </p>
        </div>

        {invParameters && <div className="text-center mb-16 mt-0 ">
          <div className="text-lg font-normal text-gray-400 mb-2">Total Score</div>
          <div className="text-white text-4xl lg:text-5xl font-bold border-[2px] p-3 px-5 mx-auto w-fit rounded-full"> {totalScore} / 40</div>
        </div>}

        {/* items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[45px] text-center">
          {invParameters &&
            invParameters.map((item, index) => {
              const { name, content, score } = item;
              const borderColor = getBgBorderColors(score).border;
              const textColor = getBgBorderColors(score).text;
              return (
                <div>
                  <div
                    className={`bg-white max-w-[600px] mx-auto
                w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer 
                transition duration-300 border-8 ${borderColor} h-full`}
                    key={index}
                  >
                    <div className="flex flex-col">
                      <div className="text-4xl font-bold py-4 px-4 rounded-full flex flex-col 
                      items-center mb-2">
                        <div className="text-lg font-normal">Score</div>
                        <div className={`${textColor}`}>{score} / 10</div>
                      </div>
                      <div className="flex mb-4 items-center gap-x-2 mx-auto">
                        <p className={`text-[24px] lg:text-[32px] font-bold`}>
                          {name}
                        </p>
                      </div>
                      {content &&
                        item.content.map((content, idx) => {
                          return (
                            <li
                              className="mb-4 px-2 lg:px-12 md:px-6 text-justify list-disc"
                              key={idx}
                            >
                              {content}
                            </li>
                          );
                        })}

                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default AnalysisParameters;
