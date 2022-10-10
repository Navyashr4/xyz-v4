import React from "react";
import getInvInfo from "../Functions/getInvInfo";

const InvestmentInfo = ({ invType }) => {
  const invInfo = getInvInfo(invType);

  return (
    <section 
    className="section pb-2 mx-4 lg:mx-0 ">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          <p className="section-title md:text-3xl text-left mb-16 max-w-[622px] mx-auto">
            Information to learn about {invType.toLowerCase()} investments
          </p>
          <div>
            {invInfo.map((item, idx) => {
                return(
                    <div key={idx} className={item.title==="Trivia"  
                      ? `mb-16 max-w-[622px] mx-auto p-6 border-2 border-indigo-400 bg-white rounded-xl`
                      : `mb-16 max-w-[622px] mx-auto p-6 border-2 border-white rounded-xl` }>
                    <h2 className={item.title==="Trivia" 
                      ? `section-title text-xl text-left lg:text-2xl text-indigo-600`
                      : `section-title text-xl text-left lg:text-2xl text-indigo-300`
                    }>
                      {item.title}
                    </h2>
                    {
                        item.text.map((text, idx) => {
                            return(
                                <p key={idx} className={item.title==="Trivia"  
                                  ? `section-subtitle text-left lg:text-lg mb-4 max-w-[622px] mx-auto text-darkblue`
                                  : `section-subtitle text-left lg:text-lg mb-4 max-w-[622px] mx-auto`}>
                                    {text}
                              </p>
                            )
                        })
                    }
                  </div>
                )}
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentInfo;


