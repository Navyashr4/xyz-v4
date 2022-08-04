import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { calcFormPlaceholders } from "../data/calcForm";
import AnalysisResult from "./AnalysisResult";
import GoodBadUgly from "./GoodBadUgly";

const CalcForm = ({handleInvTypeApp, handleAnalyseApp}) => {
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [showInputs, setShowInputs] = useState(false);
  const [invType, setInvType] = useState();
  const [principal, setPrincipal] = useState();
  const [period, setPeriod] = useState();
  const [interest, setInterest] = useState();
  const [invObjective, setInvObjective] = useState();
  const [analyse, setAnalyse] = useState(false);

  // customising placeholder text based on inv type chosen

  useEffect(() => {
    switch (invType) {
      case "Bank Fixed Deposit": {
        setPlaceholderIdx(1);
        setShowInputs(true);
        break;
      }
      case "Gold": {
        setPlaceholderIdx(2);
        setShowInputs(true);
        break;
      }
      case "Real Estate": {
        setPlaceholderIdx(3);
        setShowInputs(true);
        break;
      }
      case "Guaranteed Income Plan": {
        setPlaceholderIdx(4);
        setShowInputs(true);
        break;
      }
      default: {
        setPlaceholderIdx(0);
        setShowInputs(false);
        setAnalyse(false);
        setPrincipal(amountPlaceholder);
        setPeriod(periodPlaceholder);
        setInterest(interestPlaceholder);
        setInvObjective();
      }
    }
  }, [invType]);

  const { amountPlaceholder, periodPlaceholder, interestPlaceholder } =
    calcFormPlaceholders[placeholderIdx];

  const resetState = (event) => {
    event.preventDefault();
    setAnalyse(false);
    setInvType("I have invested in");
    setPrincipal(amountPlaceholder);
    setPeriod(periodPlaceholder);
    setInterest(interestPlaceholder);
    setInvObjective();
  };

  const isValid = () => {
    let isValid;
    if (invType === undefined) {
      isValid = false;
      alert("Choose type of investment");
    } else if (principal === 0 || principal === undefined) {
      isValid = false;
      alert("Enter amount invested in Rupees");
    } else if (period === 0 || period === undefined) {
      isValid = false;
      alert("Enter investment period in years");
    } else if (interest === 0 || interest === undefined) {
      isValid = false;
      alert("Enter interest rate in %");
    } else if (invObjective === undefined) {
      isValid = false;
      alert("Choose investment objective");
    } else {
      isValid = true;
    }
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid()) {
      setAnalyse(true);
    }
  };

  const handleInvChange = (e) => {
    setInvType(e.target.value);
    handleInvTypeApp(e.target.value);
  };

  useEffect(() => {
    handleAnalyseApp(analyse);
  }, [analyse]);

  return (
    <div
      className="w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue
      p-12 shadow-primary">
      <p className="text-gray-900 text-3xl font-semibold mb-8 text-center">
        Enter your investment's details
      </p>
      <form className="flex flex-col items-center space-y-12">
        <select
          className="select w-[90%] max-w-[300px] text-center text-[16px] md:text-md"
          value={invType}
          onChange={(e) => handleInvChange(e)}
        >
          <option value="default">I have invested in</option>
          <option value="Bank Fixed Deposit">Bank Fixed Deposit</option>
          <option value="Gold">Gold</option>
          <option value="Real Estate">Real estate</option>
          <option value="Guaranteed Income Plan">Guaranteed Income Plan</option>
        </select>

        {showInputs && (
          <div className="text-center w-[90%] max-w-[300px] placeholder:text-darkblue placeholder:text-center">
            <label className="text-sm text-indigo-600">Principal Amount</label>
            <input
              className="input text-center placeholder:text-[16px] md:placeholder:text-md"
              type="number"
              value={principal}
              placeholder={amountPlaceholder}
              onChange={(e) => setPrincipal(e.target.value)}
            ></input>
          </div>
        )}

        {showInputs && (
          <div className="text-center w-[90%] max-w-[300px] placeholder:text-darkblue placeholder:text-center">
            <label className="text-sm text-indigo-600">Interest (%)</label>
            <input
              className="input text-center placeholder:text-[16px] md:placeholder:text-md"
              type="number"
              value={interest}
              placeholder={interestPlaceholder}
              onChange={(e) => setInterest(e.target.value)}
            ></input>
          </div>
        )}

        {showInputs && (
          <div className="text-center w-[90%] max-w-[300px] placeholder:text-darkblue placeholder:text-center">
            <label className="text-sm text-indigo-600">
              Investment Period (years)
            </label>
            <input
              className="input text-center placeholder:text-[16px] lg:placeholder:text-md"
              type="number"
              value={period}
              placeholder={periodPlaceholder}
              onChange={(e) => setPeriod(e.target.value)}
            ></input>
          </div>
        )}

        {showInputs && (
          <select
            className="select w-[90%] max-w-[300px] text-center text-[16px] lg:text-md"
            onChange={(e) => setInvObjective(e.target.value)}
          >
            <option value="default">Investment objective</option>
            <option value="saving for retirement">Saving for retirement</option>
            <option value="saving for your kids' education">
              My kids education
            </option>
            <option value="saving to buy house">Saving to buy a house</option>
            <option value="saving to buy a car">Saving to buy a car</option>
          </select>
        )}

        {showInputs && (
          <button
            className="btn text-white px-8 flex justify-center w-[60vw] max-w-[300px]"
            onClick={(event) => handleSubmit(event)}
          >
            Calculate
          </button>
        )}
      </form>

      {showInputs && (
        <button
          className="mx-auto mt-6 btn text-centre bg-white text-blue border-[1.5px] border-gray-400 hover:border-none hover:text-white hover:bg-blue px-8 flex justify-center w-[60vw] max-w-[300px]"
          onClick={(event) => resetState(event)}
        >
          Reset values
        </button>
      )}

      {/* analysis result */}
      {analyse && (
        <div className="mt-24 py-6 rounded-2xl border-2 border-indigo-600">
          <AnalysisResult
            principal={principal}
            interest={interest}
            period={period}
            invType={invType}
            invObjective={invObjective}
          />
        </div>
      )}
    </div>
  );
};

export default CalcForm;
