import React, { useEffect, useState, useRef } from "react";
import { calcFormPlaceholders } from "../data/calcFormPlaceholders";
import NiftyAnalysisResult from "./NiftyAnalysisResult";
import {GetInterestValue, GetNiftyInterestValue} from "../Functions/getInterestRate";

const CalcForm = ({ handleInvTypeApp, handleAnalyseApp, invTypeApp }) => {
  console.log("Inv Type received by the NIFTYcalculator", invTypeApp);
  const [invType, setInvType] = useState("Bank Fixed Deposit");
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [principal, setPrincipal] = useState(100000);
  const [period, setPeriod] = useState(3);
  const [interest, setInterest] = useState(5);
  const [niftyInterest, setNiftyInterest] = useState(16.48);
  const [invObjective, setInvObjective] = useState("saving to buy house");
  const [analyse, setAnalyse] = useState(false);

  const analysisResults = useRef(null);

  useEffect(() => {
    setInvType(invTypeApp);
  },[invTypeApp])

  const scrollToResults = (elementRef) => {
    if (analyse) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  //receiving the type of investment to analyse and sending info to App.js to communicate with all other sibling components
  const handleInvChange = (e) => {
    setInvType(e.target.value);
    handleInvTypeApp(e.target.value);
  };

  //handling submission of form and calculating results by setting analysis section to show up
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid()) {
      setAnalyse(true);
      scrollToResults(analysisResults);
    }
  };

  //letting App.js know that sibling components are to be displayed upon analysis
  useEffect(() => {
    handleAnalyseApp(analyse);
  }, [analyse]);

  //scrolling to the results of the analysis
  useEffect(() => {
    scrollToResults(analysisResults);
  }, [analyse]);

  //!!!!!GET RID OF THIS
  // customising placeholder text based on inv type chosen
  useEffect(() => {
    switch (invType) {
      case "Bank Fixed Deposit": {
        setPlaceholderIdx(1);
        // setShowInputs(true);
        break;
      }
      case "Gold": {
        setPlaceholderIdx(2);
        // setShowInputs(true);
        break;
      }
      case "Real Estate": {
        setPlaceholderIdx(3);
        // setShowInputs(true);
        break;
      }
      case "Guaranteed Income Plan": {
        setPlaceholderIdx(4);
        break;
      }
      case "Public Provident Fund": {
        setPlaceholderIdx(5);
        break;
      }
      case "ULIP": {
        setPlaceholderIdx(5);
        break;
      }
      default: {
        setPlaceholderIdx(0);
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

  //handling resetting all the fields in the form
  const resetState = (event) => {
    event.preventDefault();
    setAnalyse(false);
    setInvType("default");
    setPrincipal(amountPlaceholder);
    setPeriod(periodPlaceholder);
    setInterest(interestPlaceholder);
    setInvObjective("default");
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



  const handlePeriod = (period) =>{
    setPeriod(period);
  }

  useEffect(()=>{
    let interestValueNum = GetInterestValue(invType,period);
    setInterest(interestValueNum);
    setNiftyInterest(GetNiftyInterestValue(period));
  },[period, invType])

  // const updateInvType = () => {
  //   console.log("Updated Inv Type", invType);
  // }  
  
    return (
    <div
      className="w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue
      px-6 py-12 lg:p-12 shadow-primary"
    >
      {/* <p className="text-gray-900 text-3xl font-semibold mb-8 text-center">
        Enter your investment's details
      </p> */}
      <form className="flex flex-col items-center space-y-12">
        <select
          className="select w-[90%] max-w-[300px] text-center text-[16px] md:text-md"
          value= {invType}
          onChange={(e) => handleInvChange(e)}
        >
          <option value="default" disabled>
            I have invested in
          </option>
          <option value="Bank Fixed Deposit">Bank Fixed Deposit</option>
          <option value="Gold">Gold</option>
          <option value="Real Estate">Real estate</option>
          {/* <option value="Guaranteed Income Plan">Guaranteed Income Plan</option> */}
          <option value="Public Provident Fund">Public Provident Fund</option>
          <option value="ULIP">ULIP</option>
        </select>

        {
          <div className="text-center w-[90%] max-w-[300px] placeholder:text-darkblue placeholder:text-center">
            <label className="text-sm text-indigo-600">Principal Amount</label>
            <input
              id=""
              className="input text-center placeholder:text-[16px] md:placeholder:text-md"
              type="number"
              value={principal}
              placeholder={amountPlaceholder}
              onChange={(e) => setPrincipal(e.target.value)}
            ></input>
          </div>
        }

        {
          <div className="text-center w-[90%] max-w-[300px] placeholder:text-darkblue placeholder:text-center">
            <label className="text-sm text-indigo-600">
              Investment Period (years)
            </label>
            <select
              className="select w-[90%] max-w-[300px] text-center text-[16px] md:text-md"
              value={period}
              onChange={(e) => handlePeriod(e.target.value)}
            >
              <option value="1">1 year</option>
              <option value="3">3 years</option>
              <option value="5">5 years</option>
              <option value="10">10 years</option>
            </select>
          </div>
        }

        {
          <div className="text-center w-[90%] max-w-[300px] placeholder:text-darkblue placeholder:text-center">
            <label className="text-sm text-indigo-600">Interest (%)</label>
            <input
              readOnly
              className="input text-center placeholder:text-[16px] md:placeholder:text-md"
              type="number"
              value={interest}
              placeholder={interestPlaceholder}
              onChange={(e) => setInterest(e.target.value)}
            ></input>
          </div>
        }

        {/* {
          <select
            className="select w-[90%] max-w-[300px] text-center text-[16px] lg:text-md"
            value={invObjective}
            onChange={(e) => setInvObjective(e.target.value)}
          >
            <option value="default" disabled>
              Investment objective
            </option>
            <option value="saving for retirement">Saving for retirement</option>
            <option value="saving for your kids' education">
              My kids education
            </option>
            <option value="saving to buy house">Saving to buy a house</option>
            <option value="saving to buy a car">Saving to buy a car</option>
          </select>
        } */}

        {
          <button
            className="btn text-white px-8 flex justify-center w-[60vw] max-w-[200px] lg:text-lg lg:w-[60vw] text-base lg:max-w-[300px]"
            onClick={(event) => {
              handleSubmit(event);
            }}
          >
            Calculate
          </button>
        }
      </form>

      {
        <button
          className="mx-auto mt-6 btn text-centre bg-white text-blue border-[1.5px] border-gray-400 hover:border-none hover:text-white hover:bg-blue px-8 flex justify-center w-[60vw] max-w-[200px] lg:text-lg lg:w-[60vw] text-base lg:max-w-[300px]"
          onClick={(event) => resetState(event)}
        >
          Reset values
        </button>
      }

      {/* analysis result */}
      {analyse && (
        <div className="mt-24 py-6 rounded-2xl border-2 border-indigo-600">
          <NiftyAnalysisResult
            principal={principal}
            interest={interest}
            period={period}
            invType={invType}
            invObjective={invObjective}
            niftyInterest={niftyInterest}
          />
        </div>
      )}

      <div ref={analysisResults}></div>
    </div>
  );
};

export default CalcForm;
