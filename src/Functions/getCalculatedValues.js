const getCalculatedValues = (principal, period, interest, invType) => {
    const reportObj = {
        interestEarned : 0,
        maturityValue : 0,  
        earningsNeeded : 0,
        loss : 0
    }


    switch(invType){
        case "Bank Fixed Deposit": {
            reportObj.maturityValue = Math.round(principal * (Math.pow((1 + (interest / 100)), (period))));
            reportObj.interestEarned = Math.round(reportObj.maturityValue - principal);
            reportObj.earningsNeeded = Math.round(principal * (Math.pow((1 + (7 / 100)), (period))));
            reportObj.loss = Math.round(reportObj.earningsNeeded - reportObj.maturityValue);
            break;
        }

        case "Gold": {
            reportObj.maturityValue = Math.round(principal * (Math.pow((1 + (interest / 100)), (period))));
            reportObj.interestEarned = Math.round(reportObj.maturityValue - principal);
            reportObj.earningsNeeded = Math.round(principal * (Math.pow((1 + (7 / 100)), (period))));
            reportObj.loss = Math.round(reportObj.earningsNeeded - reportObj.maturityValue);
            break;
        }

        case "Real Estate": {
            reportObj.maturityValue = Math.round(principal * (Math.pow((1 + (interest / 100)), (period))));
            reportObj.interestEarned = Math.round(reportObj.maturityValue - principal);
            reportObj.earningsNeeded = Math.round(principal * (Math.pow((1 + (7 / 100)), (period))));
            reportObj.loss = Math.round(reportObj.earningsNeeded - reportObj.maturityValue);
            break;
        }

        case "Guaranteed Income Plan": {
            reportObj.maturityValue = Math.round(principal * (Math.pow((1 + (interest / 100)), (period))));
            reportObj.interestEarned = Math.round(reportObj.maturityValue - principal);
            reportObj.earningsNeeded = Math.round(principal * (Math.pow((1 + (7 / 100)), (period))));
            reportObj.loss = Math.round(reportObj.earningsNeeded - reportObj.maturityValue);
            break;
        }

        default : {
            reportObj.interestEarned = 0;
            reportObj.maturityValue = 0;
            reportObj.earningsNeeded = 0;
            reportObj.loss = 0;
        }

    }

    return reportObj;
}

export default getCalculatedValues;