import React from "react";
import getInvInfo from "../Functions/getInvInfo";

const InvestmentInfo = ({ invType }) => {
  const invInfo = getInvInfo(invType);

  return (
    <section className="section pb-2">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          <p className="section-title mb-16">
            Information to learn about {invType.toLowerCase()} investments
          </p>
          <div>
            {invInfo.map((item, idx) => {
                return(
                    <div className="mb-16">
                    <h2 className="section-title md:text-3xl">
                      {item.title}
                    </h2>
                    {
                        item.text.map((text, idx) => {
                            return(
                                <p className="section-subtitle text-lg mb-4 max-w-[622px] mx-auto">
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
