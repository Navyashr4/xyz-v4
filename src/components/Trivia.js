import React from "react";
import getInvInfo from "../Functions/getInvInfo";

const Trivia = ({ invType }) => {
  const invInfo = getInvInfo(invType);

  return (
    <section className="section pb-2 mx-4 lg:mx-0">
      <div className="container mx-auto">
        <div className="text-center ">
          <div>
            {invInfo.map((item, idx) => {
              return item.title === "Trivia" ? (
                <div
                  key={item.id}
                  className={`mb-0 pt-10 max-w-[622px] mx-auto p-6 pl-12 border-2 border-darkblue bg-white rounded-xl ring ring-indigo-400 ring-offset-2 ring-offset-darkblue`}
                >
                  <h2
                    className={`section-title text-xl text-center pr-6 lg:pr-0 lg:text-center lg:text-2xl text-indigo-600`}
                  >
                    {invType} Trivia
                  </h2>
                  {item.text.map((text, idx) => {
                    return (
                      <li
                        key={idx}
                        className={`${text[0]==="@" ? `list-none ml-[20px] mt-1` : `list-disc list-inside indent-[-23px]`} section-subtitle px-3 md:px-8 text-left lg:text-[18px] mb-4 max-w-[622px] mx-auto text-darkblue list-disc list-inside indent-[-23px] lg:indent-[-24px]`} //24px indent if font ix 18px 
                      >
                        {text.split("@")}
                      </li>
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

// <li key={idx} className={`${text[0]==="@" ? `list-none` : `list-disc list-inside indent-[-23px]`} section-subtitle text-left lg:text-lg mb-4 max-w-[622px] mx-auto`}>
// {text.split("@")}
// </li>