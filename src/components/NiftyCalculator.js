import React, { useEffect, useState, useRef } from "react";
import { calcFormPlaceholders } from "../data/calcFormPlaceholders";
import NiftyAnalysisResult from "./NiftyAnalysisResult";
import {GetInterestValue, GetNiftyInterestValue} from "../Functions/getInterestRate";

const CalcForm = ({ slideToFirst, handleSlideToFirst, handleInvTypeApp, handleAnalyseApp, invTypeApp, resultsSection, scrollToResultsSection }) => {

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
    handleSlideToFirst(true);
    setInvType(e.target.value);
    handleInvTypeApp(e.target.value);
  };

  // console.log(resultsSection.current.offsetTop)

  //handling submission of form and calculating results by setting analysis section to show up
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid()) {
      setAnalyse(true);
      // if(analyse) scrollToResultsSection(resultsSection);
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
        setInterest(6);
        setInvObjective();
      }
    }
  }, [invType]);

  const { amountPlaceholder, periodPlaceholder} =
    calcFormPlaceholders[placeholderIdx];



  //handling resetting all the fields in the form
  const resetState = (event) => {
    event.preventDefault();
    setAnalyse(false);
    setInvType("default");
    setPrincipal(amountPlaceholder);
    setPeriod(periodPlaceholder);
    setInterest(6);
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
    // } else if (invObjective === undefined) {
    //   isValid = false;
    //   alert("Choose investment objective");
    } else {
      isValid = true;
    }
    return isValid;
  };

  const toIndianCurrency = (num) => {
    const curr = num.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return curr;
  };

  const formatToCurrency = (amount) => {
    return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
  }

  // console.log("Indian Rupees", toIndianCurrency(2972939273972))

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
      className="w-full bg-white max-w-[600px] mx-auto rounded-2xl text-darkblue
      px-6 py-12 lg:p-12 shadow-primary"
    >
      <form className="flex flex-col items-center space-y-8">
        <select
          className="select w-[90%] max-w-[300px] text-center text-[16px] 
          border-2 rounded-lg border-indigo-600 bg-white"
          value= {invType}
          onChange={(e) => handleInvChange(e)}
        >
          <option value="default" disabled>
            Investment Class
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
            <label className="text-md text-indigo-600">Invested Amount (Rs.)</label>
            <input
              id=""
              className="mt-1 input text-center text-[16px] lg:text-[16px] max-w-[200px]
              border-2 rounded-lg border-indigo-600 bg-white placeholder:text-[16px]"
              type="number"
              value={principal}
              placeholder={amountPlaceholder}
              onChange={(e) => setPrincipal(e.target.value)}
            ></input>
          </div>
        }

        {
          <div className="text-center w-[90%] max-w-[300px] placeholder:text-darkblue placeholder:text-center">
            <label className="text-md text-indigo-600">
              Investment Period (years)
            </label>
            <select
              className="mt-1 select w-[90%] max-w-[150px] text-center text-[16px] 
              border-2 rounded-lg border-indigo-600 bg-white"
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
          <div className="text-center w-[90%] max-w-[300px] placeholder:text-darkblue placeholder:text-center flex flex-col justify-center items-center">
            <label className="text- mb-1 text-indigo-600">Return % per annum</label>
            <input
              readOnly
              className="input text-center text-[16px]
              border-2 rounded-lg border-indigo-600 bg-white max-w-[150px]"
              type="number"
              value={interest}
              placeholder={6}
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
            className="btnCards flex justify-center w-[60%] max-w-[220px] text-base lg:max-w-[300px] border-[1.5px] bg-indigo-600
            text-white border-indigo-600 hover:text-white hover:bg-indigo-800 hover:border-indigo-800"
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
          className="mx-auto btnCards mt-5 flex justify-center w-[60%] max-w-[220px] text-base lg:max-w-[300px] border-[1.5px] bg-white
          text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white"
          onClick={(event) => resetState(event)}
        >
          Reset values
        </button>
      }

      <div className="" ref={analysisResults}></div>

      {/* analysis result */}
      {analyse && (
        <div
        className="mt-24 py-6 rounded-2xl border-2 border-indigo-600">
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

      
    </div>
  );
};

export default CalcForm;
