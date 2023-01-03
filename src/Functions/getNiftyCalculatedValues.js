const getNiftyCalculatedValues = (principal, period, interest, invType, niftyInterest) => {
    const reportObj = {
        interestEarned : 0,
        maturityValue : 0,  
        niftyEarnings: 0,
        // earningsNeeded : 0,
        loss : 0,
        principal : 0
    }

    switch(invType){
        case "Bank Fixed Deposit": {
            reportObj.maturityValue = Math.round(principal * (Math.pow((1 + (interest / 100)), (period))));
            reportObj.interestEarned = Math.round(reportObj.maturityValue - principal);
            reportObj.niftyEarnings = Math.round(principal * (Math.pow((1 + (niftyInterest / 100)), (period))));
            reportObj.loss = Math.round(reportObj.niftyEarnings - reportObj.maturityValue);
            reportObj.principal = principal;
            break;
        }

        case "Gold": {
            reportObj.maturityValue = Math.round(principal * (Math.pow((1 + (interest / 100)), (period))));
            reportObj.interestEarned = Math.round(reportObj.maturityValue - principal);
            reportObj.niftyEarnings = Math.round(principal * (Math.pow((1 + (niftyInterest / 100)), (period))));
            reportObj.loss = Math.round(reportObj.niftyEarnings - reportObj.maturityValue);
            reportObj.principal = principal;
            break;
        }

        case "Real Estate": {
            reportObj.maturityValue = Math.round(principal * (Math.pow((1 + (interest / 100)), (period))));
            reportObj.interestEarned = Math.round(reportObj.maturityValue - principal);
            reportObj.niftyEarnings = Math.round(principal * (Math.pow((1 + (niftyInterest / 100)), (period))));
            reportObj.loss = Math.round(reportObj.niftyEarnings - reportObj.maturityValue);
            reportObj.principal = principal;
            break;
        }

        case "Guaranteed Income Plan": {
            reportObj.maturityValue = Math.round(principal * (Math.pow((1 + (interest / 100)), (period))));
            reportObj.interestEarned = Math.round(reportObj.maturityValue - principal);
            reportObj.niftyEarnings = Math.round(principal * (Math.pow((1 + (niftyInterest / 100)), (period))));
            reportObj.loss = Math.round(reportObj.niftyEarnings - reportObj.maturityValue);
            reportObj.principal = principal;
            break;
        }

        case "Public Provident Fund": {
            reportObj.maturityValue = Math.round(principal * (Math.pow((1 + (interest / 100)), (period))));
            reportObj.interestEarned = Math.round(reportObj.maturityValue - principal);
            reportObj.niftyEarnings = Math.round(principal * (Math.pow((1 + (niftyInterest / 100)), (period))));
            reportObj.loss = Math.round(reportObj.niftyEarnings - reportObj.maturityValue);
            reportObj.principal = principal;
            break;
        }

        case "ULIP": {
            reportObj.maturityValue = Math.round(principal * (Math.pow((1 + (interest / 100)), (period))));
            reportObj.interestEarned = Math.round(reportObj.maturityValue - principal);
            reportObj.niftyEarnings = Math.round(principal * (Math.pow((1 + (niftyInterest / 100)), (period))));
            reportObj.loss = Math.round(reportObj.niftyEarnings - reportObj.maturityValue);
            reportObj.principal = principal;
            break;
        }

        case "Equity": {
            reportObj.maturityValue = Math.round(principal * (Math.pow((1 + (interest / 100)), (period))));
            reportObj.interestEarned = Math.round(reportObj.maturityValue - principal);
            reportObj.niftyEarnings = Math.round(principal * (Math.pow((1 + (niftyInterest / 100)), (period))));
            reportObj.loss = Math.round(reportObj.niftyEarnings - reportObj.maturityValue);
            reportObj.principal = principal;
            break;
        }

        default : {
            reportObj.interestEarned = 0;
            reportObj.maturityValue = 0;
            reportObj.niftyEarnings = 0;
            reportObj.loss = 0;
            reportObj.principal = 0;
        }

    }

    return reportObj;
}

export default getNiftyCalculatedValues;