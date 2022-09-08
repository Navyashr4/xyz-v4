import { IoLogoChrome } from "react-icons/io";

const getInvInfo = (invType) => {
    let content = [];
    switch (invType) {
        case "Bank Fixed Deposit": {
            content = [
                {
                    title : "Definitions",
                    text : [`A fixed deposit or term deposit, is an investment instrument offered by banks, as well as non-banking financial companies (NBFC) to their customers to help them save money and earn a certain rate of interest on that money.`,]
                },
                {
                    title : "Why do people invest in fixed deposits?",
                    text : [
                        `1. To park short to medium term money (period 1 month to 1-3 years)`,
                        `2. Assured committed returns`,
                        `3. Sense of security on return of money (including interest) with no volatility.`
                    ]
                },
                {
                    title : "What impacts the rates on fixed depsosit?",
                    text : [
                        `1. Economic Scenario – In a recessionary scenario, fixed deposit rates would generally be higher and similarly vice
                        versa. Such rates are influenced by RBI’s policies based on prevailing economic conditions.`,
                        `2. Amount invested – Higher the amount, higher the interest rates`,
                        `3. Credit risk – Riskier the bank, higher the interest rates.`,
                        `4. Tenure – Higher the tenure, higher the interest rates.`
                    ]
                },
                {
                    title : "Trivia",
                    text : [
                        `1. Around Rs 154 lac crore as at March 22 has been invested in fixed deposits at interest rate of 5.5%. At the same
                        time country's inflation is at 7%.`,
                        `2. As per the SEBI survey, 95% of the Indian families prefer investing in bank FDs as they are not market-linked
                        instruments & perceived to be safe.`,
                        `3. Fixed deposit rates have been as high as around 13% during 1994 -1999`,
                        `4. In the last 20 years’ FD rates in India, have had a downhill journey.`,
                        `5. In 2003-04, it fell to 5.25%, which was a historical low in the fixed deposit interest rates until then.`,
                        `6. Senior Citizens get a slightly higher fixed interest rate compared to non-senior citizen fixed deposit.`
                    ]
                }
            ]
            break;
        }

        case "Gold": {
            content = [
                {
                    title : "Definitions",
                    text : ["Lorem ipsum dolor sit amet,onsectetur adipiscing elit", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                },
                {
                    title : "Why do people invest in fixed deposits?",
                    text : ["Lorem ipsum dolor sit amet,onsectetur adipiscing elit", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                },
                {
                    title : "What impacts the rates on fixed depsosit?",
                    text : ["Lorem ipsum dolor sit amet, consecteon ullamco", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                }
            ]
            break;
        }

        case "Real Estate": {
            content = [
                {
                    title : "Definitions",
                    text : ["Lorem ipsum dolor sit amet,onsectetur adipiscing elit", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                },
                {
                    title : "Why do people invest in fixed deposits?",
                    text : ["Lorem ipsum dolor sit amet,onsectetur adipiscing elit", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                },
                {
                    title : "What impacts the rates on fixed depsosit?",
                    text : ["Lorem ipsum dolor sit amet, consecteon ullamco", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                }
            ]
            break;
        }

        case "Guaranteed Income Plan": {
            content = [
                {
                    title : "Definitions",
                    text : ["Lorem ipsum dolor sit amet,onsectetur adipiscing elit", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                },
                {
                    title : "Why do people invest in fixed deposits?",
                    text : ["Lorem ipsum dolor sit amet,onsectetur adipiscing elit", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                },
                {
                    title : "What impacts the rates on fixed depsosit?",
                    text : ["Lorem ipsum dolor sit amet, consecteon ullamco", "Lorem ipsum dolor sit amet,onsectetur adipiscing elit"]
                }
            ]
            break;
        }

        default : content = [];
    }

    return content;
}

export default getInvInfo;