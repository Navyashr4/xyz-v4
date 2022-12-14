import React from "react";

function ULIPTrivia() {
  const color1 = "text-sm md:text-[16px] text-black";
  const color2 = "text-sm md:text-[16px] text-black bg-indigo-100";
  const headerColor = "bg-indigo-600 text-center text-sm md:text-[16px]";
  return (
    //   <div>
    //   <table className="mx-auto border-separate border-spacing-1 px-2">
    //   <thead className={`${headerColor}`}>
    //     <tr>
    //       <th className="border border-indigo-600 px-1 md:px-4 md:py-1 font-normal">
    //         Type of Charge
    //       </th>
    //       <th className="border  border-indigo-600 px-1 md:px-4 md:py-1 font-normal">
    //         How it is charged
    //       </th>
    //       <th className="border  border-indigo-600 px-1 md:px-4 md:py-1 font-normal">
    //         Frequency of deduction
    //       </th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr className={color1}>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1">
    //         Premium Allocation Charge
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Fixed percentage of premium
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         As and when premium is paid
    //       </td>
    //     </tr>
    //     <tr className={color2}>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Mortality charge
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Depends on age, sum assured
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Monthly basis
    //       </td>
    //     </tr>
    //     <tr className={color1}>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Fund Management charge
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         On Fund type (Equity, Debt, Hybrid)
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Daily basis
    //       </td>
    //     </tr>
    //     <tr className={color2}>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Policy Administration charge
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Fixed or percentage of fund value
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Monthly basis
    //       </td>
    //     </tr>
    //     <tr className={color1}>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Partial Withdrawal charge
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Flat fee
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Transaction wise
    //       </td>
    //     </tr>
    //     <tr className={color2}>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Fund Switching charge
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Flat fee
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Transaction wise
    //       </td>
    //     </tr>
    //     <tr className={color1}>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Premium Redirection charge
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Flat fee
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Transaction wise
    //       </td>
    //     </tr>
    //     <tr className={color2}>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Premium Discontinuance charge
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Flat fee
    //       </td>
    //       <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
    //         Transaction wise
    //       </td>
    //     </tr>
    //   </tbody>
    // </table>
    //   </div>

    <div className="mx-auto text-white text-center px-6 md:px-10 mt-20 ">
      <div
        className={`mt-6 mb-0 pt-10 md:px-6 max-w-[822px] mx-auto  border-2 border-darkblue bg-white rounded-xl ring ring-indigo-400 ring-offset-2 ring-offset-darkblue`}
      >
        <div
          className={`section-title text-xl text-center lg:text-center lg:text-2xl text-indigo-600`}
        >
          ULIP Trivia
        </div>
        <table className="mx-auto table-auto border-separate border-spacing-1">
          <thead className={`${headerColor}`}>
            <tr>
              <th className="border border-indigo-600 px-1 md:px-4 md:py-1 font-normal break-normal">
                Type of Charge
              </th>
              <th className="border  border-indigo-600 px-1 md:px-4 md:py-1 font-normal">
                How it is charged
              </th>
              <th className="border  border-indigo-600 px-1 md:px-4 md:py-1 font-normal">
                Frequency of deduction
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={color1}>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1">
                Premium Allocation Charge
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Fixed percentage of premium
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                As and when premium is paid
              </td>
            </tr>
            <tr className={color2}>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Mortality charge
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Depends on age, sum assured
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Monthly basis
              </td>
            </tr>
            <tr className={color1}>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Fund Management charge
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                On Fund type (Equity, Debt, Hybrid)
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Daily basis
              </td>
            </tr>
            <tr className={color2}>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Policy Administration charge
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Fixed or percentage of fund value
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Monthly basis
              </td>
            </tr>
            <tr className={color1}>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Partial Withdrawal charge
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Flat fee
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Transaction wise
              </td>
            </tr>
            <tr className={color2}>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Fund Switching charge
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Flat fee
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Transaction wise
              </td>
            </tr>
            <tr className={color1}>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Premium Redirection charge
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Flat fee
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Transaction wise
              </td>
            </tr>
            <tr className={color2}>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Premium Discontinuance charge
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Flat fee
              </td>
              <td className="border  border-indigo-600 px-1 md:px-4 md:py-1 ">
                Transaction wise
              </td>
            </tr>
          </tbody>
        </table>

        <div className="section-subtitle px-3 md:px-8 text-center lg:text-[18px] mb-4 max-w-[622px] mx-auto text-darkblue">
          How much do you end up spending on ULIPs?
        </div>

        <li className="section-subtitle px-12 md:px-8 text-left lg:text-[18px] mb-4 max-w-[622px] mx-auto text-darkblue list-disc list-inside indent-[-23px] lg:indent-[-24px]">
          Some more charges such as top-up charge & rider charges are also
          incurred on ULIPs
        </li>
        <li className="section-subtitle px-12 md:px-8 text-left lg:text-[18px] mb-4 max-w-[622px] mx-auto text-darkblue list-disc list-inside indent-[-23px] lg:indent-[-24px]">
          Although you can also get guaranteed returns in ULIPs, everything
          comes with a cost.
        </li>
        <li className="section-subtitle px-12 md:px-8 text-left lg:text-[18px] mb-4 max-w-[622px] mx-auto text-darkblue list-disc list-inside indent-[-23px] lg:indent-[-24px]">
          Introducing Guarantee charges - Some ULIPs may guarantee a 125% profit
          after 12 years. But you have to incur guarantee charges in ULIP that
          let you enjoy such high-returns
        </li>
        {/* <li className="section-subtitle px-8 md:px-8 text-left lg:text-[18px] mb-4 max-w-[622px] mx-auto text-darkblue list-disc list-inside
        indent-[-20px]">
          Introducing Guarantee charges - Some ULIPs may guarantee a 125% profit
          after 12 years. But you have to incur guarantee charges in ULIP that
          let you enjoy such high-returns
        </li> */}
      </div>

      {/* border-spacing-1 border  rounded-md */}
    </div>
  );
}

export default ULIPTrivia;
