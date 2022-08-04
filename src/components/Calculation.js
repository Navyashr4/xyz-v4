import React, { useState } from 'react'
import { Report } from './Report'

export const Form = () => {
    const [invType, setInvType] = useState();
    const [principal, setPrincipal] = useState();
    const [period, setPeriod] = useState();
    const [interest, setInterest] = useState();
    const [invObjective, setInvObjective] = useState();
    const [analyse, setAnalyse] = useState(false);

    const resetState = () => {
        setAnalyse(!analyse);
        setInvType();
        setPrincipal(0);
        setPeriod(0);
        setInterest(0);
        setInvObjective();
    }

    const isValid = () => {
        let isValid;
        if(invType === undefined){
            isValid = false;
            alert("Choose type of investment");
        }else if(principal === 0 || principal === undefined){
            isValid = false;
            alert("Enter amount invested in Rupees");
        }else if(period === 0 || period === undefined){
            isValid = false;
            alert("Enter investment period in years");           
        }else if(interest === 0 || interest === undefined){
            isValid = false;
            alert("Enter interest rate in %");           
        }else if(invObjective===undefined){
            isValid = false;
            alert("Choose investment objective");
        }else{
            isValid = true;
        }

        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(isValid()){
            setAnalyse(true);
        }
    }


    return (
    <div className='max-w-[1280px] flex flex-col items-center'>
        <div className='max-w-[700px] sm:border-2 border-black p-4 px-10'>
            <form>
                <div className='my-3 flex justify-between'>
                    <label className='pr-5'>I have invested in: </label>
                    <select className='border-2 border-black text-center' 
                    id="invType" name="investment-type" value={invType} onChange={(event) => setInvType(event.target.value)}>
                        <option value="default">Investment type</option>
                        <option value="Bank Fixed Deposit">Bank Fixed Deposit</option>
                        <option value="Gold">Gold</option>
                        <option value="Real Estate">Real estate</option>
                        <option value="Guaranteed Income Plan">Guaranteed Income Plan</option>
                    </select>
                </div>
                <div className='my-3 flex justify-between'>
                    <label className='pr-5'>An amount of Rs. </label>
                    <input  className='border-2 border-black px-3'type='number' value={principal} onChange={(event) => setPrincipal(event.target.value)}/>
                </div>
                <div className='my-3 flex justify-between'>
                    <label className='pr-5'>For a period of (in years): </label>
                    <input  className='border-2 border-black px-3'type='number' value={period} onChange={(event) => setPeriod(event.target.value)}/>
                </div>
                <div className='my-3 flex justify-between'>
                    <label className='pr-5'>At interest rate of (%):  </label>
                    <input  className='border-2 border-black px-3' type='number' value={interest} onChange={(event) => setInterest(event.target.value)}/>
                </div>
                <div className='my-3 flex justify-between'>
                    <label className='pr-5'>And my objective is:</label>
                    <select className='border-2 border-black text-center' id="cars" name="cars" value={invObjective} onChange={(event) => setInvObjective(event.target.value)}>
                        <option value="default">Investment objective</option>
                        <option value="saving for retirement">Saving for retirement</option>
                        <option value="saving for your kids' education">My kids education</option>
                        <option value="saving to buy house">Saving to buy a house</option>
                        <option value="saving to buy a car">Saving to buy a car</option>
                    </select>
                </div>
                <div className='flex flex-col items-center'>
                    <button className='px-4 py-2 mt-4  text-white border bg-indigo-600 border-indigo-600' onClick={(e)=>handleSubmit(e)}>Evaluate your Investment</button>
                    <button className='px-4 py-2 my-4' onClick={resetState}>Reset Values</button>
                </div>
            </form>
        </div>
        {analyse?
        (<div className='mt-10 mx-5 max-w-[700px]'>
            <h1 className='text-3xl my-5 text-indigo-600 font-bold'>Your investment analysis report</h1>
            <Report principal = {principal} interest = {interest} period = {period} invType={invType} invObjective = {invObjective}/>
        </div>) : <></>}
    </div>
    )
}


// 