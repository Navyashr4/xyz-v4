import React from "react";

function ULIPTrivia() {
  const color1 = "text-sm md:text-[16px] text-indigo-400";
  const color2 = "text-sm md:text-[16px]";
  const headerColor = "bg-indigo-600 text-center text-sm md:text-[16px]";
  return (
    <div className="mx-auto text-white text-center px-10 ">
      <div
        className={`mt-6 mb-0 pt-10 max-w-[822px] mx-auto p-6 pl-12 border-2 border-darkblue bg-white rounded-xl ring ring-indigo-400 ring-offset-2 ring-offset-darkblue`}
      >
        <div
          className={`section-title text-xl text-center pr-6 lg:pr-0 lg:text-center lg:text-2xl text-indigo-600`}
        >
          ULIP Trivia
        </div>


        <table className="mx-auto border-separate border-spacing-1">
        <thead className={`${headerColor}`}>
          <tr>
            <th className="border border-slate-600 p-2 md:px-4 font-normal">
              Type of Charge
            </th>
            <th className="border border-slate-600 p-2 md:px-4 font-normal">
              How it is charged
            </th>
            <th className="border border-slate-600 p-2 md:px-4 font-normal">
              Frequency of deduction
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={color1}>
            <td className="border border-slate-600 p-2 md:px-4">
              Premium Allocation Charge
            </td>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Fixed percentage of premium
            </td>
            <td className="border border-slate-600 p-2 md:px-4 ">
              As and when premium is paid
            </td>
          </tr>
          <tr className={color2}>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Mortality charge
            </td>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Depends on age, sum assured
            </td>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Monthly basis
            </td>
          </tr>
          <tr className={color1}>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Fund Management charge
            </td>
            <td className="border border-slate-600 p-2 md:px-4 ">
              On Fund type (Equity, Debt, Hybrid)
            </td>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Daily basis
            </td>
          </tr>
          <tr className={color2}>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Policy Administration charge
            </td>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Fixed or percentage of fund value
            </td>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Monthly basis
            </td>
          </tr>
          <tr className={color1}>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Partial Withdrawal charge
            </td>
            <td className="border border-slate-600 p-2 md:px-4 ">Flat fee</td>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Transaction wise
            </td>
          </tr>
          <tr className={color2}>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Fund Switching charge
            </td>
            <td className="border border-slate-600 p-2 md:px-4 ">Flat fee</td>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Transaction wise
            </td>
          </tr>
          <tr className={color1}>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Premium Redirection charge
            </td>
            <td className="border border-slate-600 p-2 md:px-4 ">Flat fee</td>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Transaction wise
            </td>
          </tr>
          <tr className={color2}>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Premium Discontinuance charge
            </td>
            <td className="border border-slate-600 p-2 md:px-4 ">Flat fee</td>
            <td className="border border-slate-600 p-2 md:px-4 ">
              Transaction wise
            </td>
          </tr>
        </tbody>
      </table>
      </div>

      {/* border-spacing-1 border border-slate-600 rounded-md */}

    </div>
  );
}

export default ULIPTrivia;
