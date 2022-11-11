import React from "react";
import getInvInfo from "../Functions/getInvInfo";

const Trivia = ({ invType }) => {
  const invInfo = getInvInfo(invType);

  return (
    <section className="section pb-2 mx-4 lg:mx-0">
      {/* data-aos='fade-in'
    data-aos-delay='900' */}
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center ">
          {/* <p className="section-title md:text-3xl text-left mb-16 max-w-[622px] mx-auto">
            Information to learn about {invType.toLowerCase()} investments
          </p> */}
          <div>
            {invInfo.map((item, idx) => {
              return item.title === "Trivia" ? (
                <div
                  key={idx}
                  className={`mb-0 pt-10 max-w-[622px] mx-auto p-2 p-6 border-2 border-darkblue bg-white rounded-xl ring ring-indigo-400 ring-offset-2 ring-offset-darkblue`}
                >
                  <h2
                    className={`section-title text-xl text-center lg:text-2xl text-indigo-600`}
                  >
                    {invType} Trivia
                  </h2>
                  {item.text.map((text, idx) => {
                    return (
                      <p
                        key={idx}
                        className={`section-subtitle px-3 md:px-8 text-justify lg:text-lg mb-4 max-w-[622px] mx-auto text-darkblue`}
                      >
                        {text}
                      </p>
                    );
                  })}
                </div>
              ) : (
                <></>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trivia;
