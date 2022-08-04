import React, { useEffect, useState } from "react";
import { calcFormPlaceholders } from "../data/calcForm";

const CalcForm = () => {
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [showInputs, setShowInputs] = useState(false);
  const [invType, setInvType] = useState();
  const [principal, setPrincipal] = useState();
  const [period, setPeriod] = useState();
  const [interest, setInterest] = useState();
  const [invObjective, setInvObjective] = useState();
  const [analyse, setAnalyse] = useState(false);

  console.log("invType", invType);
  console.log("principal", principal);
  console.log("period", period);
  console.log("interest", interest);
  console.log("invObjective", invObjective);



  // customising placeholder text based on inv type chosen

  useEffect(() => {
    switch(invType){
      case 'Bank Fixed Deposit' : {setPlaceholderIdx(1); setShowInputs(true); break;}
      case 'Gold' : {setPlaceholderIdx(2); setShowInputs(true); break;}
      case 'Real Estate' : {setPlaceholderIdx(3); setShowInputs(true); break;}
      case 'Guaranteed Income Plan' : {setPlaceholderIdx(4); setShowInputs(true); break;}
      default : {setPlaceholderIdx(0); setShowInputs(false);}
    }
  }, [invType]);

  const {
    amountPlaceholder,
    periodPlaceholder,
    interestPlaceholder,
  } = calcFormPlaceholders[placeholderIdx];



  return (
    <div
      className="w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue
      p-12 shadow-primary"
      data-aos="fade-up"
      data-aos-offset="500"
    >
      <form className="flex flex-col items-center space-y-12">
        <select 
          className="select w-[60%] max-w-[450px] text-center"
          value={invType}
          onChange={(e) => setInvType(e.target.value)}>
          <option value="default">I have invested in</option>
          <option value="Bank Fixed Deposit">Bank Fixed Deposit</option>
          <option value="Gold">Gold</option>
          <option value="Real Estate">Real estate</option>
          <option value="Guaranteed Income Plan">Guaranteed Income Plan</option>
        </select>
        
        <div className="text-center w-[60%] max-w-[450px] placeholder:text-darkblue placeholder:text-center">
          <label className="text-sm text-indigo-600">Principal Amount</label>
          <input 
            className="input text-center"
            type="number"
            value={principal}
            placeholder={amountPlaceholder}
            onChange={(e) => setPrincipal(e.target.value)}>
          </input>
        </div>

        <input
          className="input text-center placeholder:text-darkblue placeholder:text-center"
          type="text"
          value={principal}
          placeholder={amountPlaceholder}
          onChange={(e) => setPrincipal(e.target.value)}
        ></input>


        {/* {showInputs && <input
          className="input text-center placeholder:text-darkblue placeholder:text-center"
          type="number"
          value={principal}
          placeholder={amountPlaceholder}
          onChange={(e) => setPrincipal(e.target.value)}
        ></input>} */}

        {showInputs && <input
          className="input text-center placeholder:text-darkblue placeholder:text-center"
          type="number"
          placeholder={periodPlaceholder}
          onChange={(e) => setPeriod(e.target.value)}
        ></input>}

        {showInputs && <input
          className="input text-center placeholder:text-darkblue placeholder:text-center"
          type="number"
          placeholder={interestPlaceholder}
          onChange={(e) => setInterest(e.target.value)}
        ></input>}

        {showInputs && 
        <select 
          className="select w-[60%] max-w-[450px] text-center"
          onChange={(e) => setInvObjective(e.target.value)}>
          <option value="default">Investment objective</option>
          <option value="saving for retirement">Saving for retirement</option>
          <option value="saving for your kids' education">My kids education</option>
          <option value="saving to buy house">Saving to buy a house</option>
          <option value="saving to buy a car">Saving to buy a car</option>
        </select>}

        {showInputs && <button className="btn text-white px-8 flex justify-center w-[60vw] max-w-[300px]">
          Calculate
        </button>}

      </form>
      {/* text */}
      <div className="mt-24">
        <div className="text-blue font-medium mb-4">
          ESTIMATED 36 HOUR REVENUE:
        </div>
        <div className="text-[32px] font-bold mb-3">
          0.055 130 59 ETH <span className="text-blue">($1275)</span>
        </div>
        <div className="text-gray-500 tracking-[1%]">
          Revenue will change based on mining difficulty and Ethereum price.
        </div>
      </div>
    </div>
  );
};

export default CalcForm;
