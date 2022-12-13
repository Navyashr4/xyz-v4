import React from "react";
import getInvInfo from "../Functions/getInvInfoSansTrivia";
import question from '../assets/img/question.png';

const InvestmentInfo = ({ invType }) => {
  const invInfo = getInvInfo(invType);

  return (
    <section 
    className="section pb-2 mx-4 lg:mx-0 ">
      <div className="container mx-auto">
        <div className="text-center">
            <img src={question} alt="logo" className="h-[60px] lg:h-[80px] mx-auto mb-5"/>
            <div className="section-title md:text-3xl text-indigo-400 section-title text-center mb-16 max-w-[622px] mx-auto">
              Information to learn about {invType} investments
            </div>
          <div>
            {invInfo.map((item, idx) => {
                return(
                    <div key={idx} className={ `mb-16 max-w-[622px] mx-auto p-6 border-2 border-white rounded-xl pl-12` }>
                    <h2 className={`section-title text-xl text-left lg:text-2xl text-indigo-300`
                    }>
                      {item.title}
                    </h2>
                    {
                        item.text.map((text, idx) => {
                            return(
                                <li key={idx} className={`${text[0]==="@" ? `list-none` : `list-disc list-inside indent-[-23px]`} section-subtitle text-left lg:text-lg mb-4 max-w-[622px] mx-auto`}>
                                    {text.split("@")}
                              </li>
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

// {text.split('\n').map(str => <p>{str}</p>)}

//icons
//<a href="https://www.flaticon.com/free-icons/idea" title="idea icons">Idea icons created by Good Ware - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/think" title="think icons">Think icons created by Freepik - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/think" title="think icons">Think icons created by Freepik - Flaticon</a>


{/* <div className="flex justify-between max-w-[622px] mx-auto">
<img src={lightbulb} alt="logo" className="h-[60px] px-8"/>
<div className="section-title md:text-3xl text-indigo-400 section-title text-left mb-16 max-w-[622px]">
  Information to learn about {invType} investments
</div>
</div> */}



