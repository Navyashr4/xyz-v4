import React from "react";

function DomInvPills({ handleSlideToFirst, handleInvTypeApp, invType }) {
  console.log("Inv Type in DOM Pills", invType);

  const handleDomPillClick = (invType) => {
    handleInvTypeApp(invType);
    handleSlideToFirst(true);
  }

  return (
    <section className="mt-6">
      <div
        data-aos="fade-down"
        data-aps-delay="700"
        className="container mx-auto px-6 lg:px-0"
      >
        <div className="mx-auto flex gap-x-2 flex-wrap gap-y-4 justify-center max-w-[90%] md:max-w-[400px]">
          <button
            className={`${
              invType === "Bank Fixed Deposit"
                ? `bg-indigo-600 text-white border-indigo-600`
                : `bg-darkblue text-white border-white`
            }
            btnCards flex justify-center font-normal text-base lg:max-w-[300px] border-[2px] hover:bg-indigo-700 hover:text-white hover:border-indigo-700`}
            onClick={() => handleDomPillClick("Bank Fixed Deposit")}
          >
            Bank Fixed Deposit
          </button>
          <button
            className={`${
              invType === "Gold"
                ? `bg-indigo-600 text-white border-indigo-600`
                : `bg-darkblue text-white border-white`
            }
          btnCards flex justify-center font-normal text-base lg:max-w-[300px] border-[2px] hover:bg-indigo-700 hover:text-white hover:border-indigo-700`}
            onClick={() => handleDomPillClick("Gold")}
          >
            Gold
          </button>
          <button
            className={`${
              invType === "Real Estate"
                ? `bg-indigo-600 text-white border-indigo-600`
                : `bg-darkblue text-white border-white`
            }
          btnCards flex justify-center font-normal text-base lg:max-w-[300px] border-[2px] hover:bg-indigo-700 hover:text-white hover:border-indigo-700`}
            onClick={() => handleDomPillClick("Real Estate")}
          >
            Real Estate
          </button>
          <button
            className={`${
              invType === "ULIP"
                ? `bg-indigo-600 text-white border-indigo-600`
                : `bg-darkblue text-white border-white`
            }
          btnCards flex justify-center font-normal text-base lg:max-w-[300px] border-[2px] hover:bg-indigo-700 hover:text-white hover:border-indigo-700`}
            onClick={() => handleDomPillClick("ULIP")}
          >
            ULIP
          </button>

          <button
            className={`${
              invType === "Public Provident Fund"
                ? `bg-indigo-600 text-white border-indigo-600`
                : `bg-darkblue text-white border-white`
            }
          btnCards flex justify-center font-normal text-base lg:max-w-[300px] border-[2px] hover:bg-indigo-700 hover:text-white hover:border-indigo-700`}
            onClick={() => handleDomPillClick("Public Provident Fund")}
          >
            Public Provident Fund
          </button>

          <button
            className={`${
              invType === "Equity"
                ? `bg-indigo-600 text-white border-indigo-600`
                : `bg-darkblue text-white border-white`
            }
          btnCards flex justify-center font-normal text-base lg:max-w-[300px] border-[2px] hover:bg-indigo-700 hover:text-white hover:border-indigo-700`}
            onClick={() => handleDomPillClick("Equity")}
          >
            Equity
          </button>

        </div>
      </div>
    </section>
  );
}

export default DomInvPills;


