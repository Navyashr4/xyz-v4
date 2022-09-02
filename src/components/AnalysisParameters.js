import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import getInvParameters from "../Functions/getInvParameters";
import getBgBorderColors from "../Functions/getBgBorderColors";

const AnalysisParameters = ({ invType }) => {
  const [itemName, setItemName] = useState("Bitcoin");
  const invParameters = getInvParameters(invType);

  return (
    <section className="section  text-darkblue lg:pt-[320px] lg:-mt-[320px]">
      <div className="container mx-auto" data-aos="fade-up">
        {/* Section Heading */}
        <div>
          <p className="section-title text-center mb-16 text-white md:text-3xl">
            Analysis of {invType.toLowerCase()} investments
          </p>
        </div>

        {/* items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[45px]">
          {invParameters &&
            invParameters.map((item, index) => {
              const { name, content, score } = item;
              const bgColor = getBgBorderColors(score).bg;
              const borderColor = getBgBorderColors(score).border;
              const textColor = getBgBorderColors(score).text;
              return (
                <div>
                  <div
                    onClick={() => setItemName(name)}
                    className={`bg-white
                w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer 
                transition duration-300 border-8 ${borderColor}`}
                    key={index}
                  >
                    <div className="flex flex-col justify-center items-center">
                      <div className="text-4xl font-bold py-4 px-4 rounded-full flex flex-col items-center mb-10">
                        <div className="text-lg font-normal">Score</div>
                        <div className = {`${textColor}`}>{score} / 10</div>
                      </div>
                      <div className="flex mb-4 items-center gap-x-2">
                        <p className={`text-[32px] font-bold`}>{name}</p>
                      </div>
                      {content &&
                        item.content.map((content, idx) => {
                          return (
                            <div
                              className="mb-6 px-4 lg:px-2 text-center"
                              key={idx}
                            >
                              {content}
                            </div>
                          );
                        })}
                      <button
                        className={`${
                          name === itemName
                            ? "text-white bg-violet hover:bg-indigo-900 border-none pl-8 mt-4 pr-6 gap-x-3"
                            : "text-indigo-800 w-16 mt-4"
                        }  border-2 border-gray-300 rounded-full h-16 
                    flex justify-center items-center`}
                      >
                        {name === itemName && (
                          <div className="text-lg font-medium">Learn more </div>
                        )}

                        <IoIosArrowForward
                          className={`${
                            name === itemName ? "text-2xl" : "text-3xl"
                          }`}
                        />
                      </button>
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
