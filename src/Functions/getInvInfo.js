import { IoLogoChrome } from "react-icons/io";

const getInvInfo = (invType) => {
    let content = [];
    switch (invType) {
        case "Bank Fixed Deposit": {
            content = [
                {
                    title : "Trivia",
                    id: 3,
                    text : [
                        `Around Rs 154 lac crore as at March 22 has been invested in fixed deposits at interest rate of 5.5%. At the same
                        time country's inflation is at 7%.`,
                        `As per the SEBI survey, 95% of the Indian families prefer investing in bank FDs as they are
                        not market-linked instruments &amp; perceived to be safe. However, does this make Fixed
                        Deposit a better investment. Check analysis section below to know more.`,
                        `Fixed deposit rates have been as high as around 13% during 1994 to 1999`,
                        `In the last 20 years’ FD rates in India, have had a downhill journey.`,
                        `In 2003-04, it fell to 5.25%, which was a historical low in the fixed deposit interest rates until then.`,
                        `Senior Citizens get a slightly higher fixed interest rate compared to non-senior citizen fixed deposit.`
                    ]
                }
            ]
            break;
        }

        case "Gold": {
            content = [
                {
                    title: "Trivia",
                    id: 3,
                    text : [
                        `In 2019, the World Gold Council estimated that Indian households owned over 25,000 tonnes of gold, making India the largest holder in the world. The value of this gold was estimated to be $1.1 trillion, which was over 40% of India’s GPD.`,
                        `Middle income households buy 56% of India’s gold and hold around 11% of the world’s gold.`,
                        `India has the 9th largest gold reserve in the world, sitting at 760 tonnes, followed by Japan, sitting at 846 tonnes & USA with 8,133 tonnes.`,
                        `Gold was a medium of exchange and backed by the entire monetary system in various countries (Called the Gold Standard).`,
                        `Currencies used to be backed by Gold in most countries around the world.`,
                        `Gold no longer plays a key role in the global monetary system.`,
                        `But, it is used as a symbol of wealth and investment since it is a key precious metal.`,
                        `It is the scarcity premium that gives gold its value in the current times.`,                        
                    ]
                }
            ]
            break;
        }

        case "Real Estate": {
            content = [
                {
                    title : "Trivia",
                    id: 4,
                    text : [
                        `NITI Aayog expects that the Indian real estate sector will reach a market size of $1 trillion by 2030 and will account for 13 per cent
                        of India’s GDP by 2025.`,
                        `As per IMARC group, the India real estate market size is expected to exhibit a CAGR of 9.60% during
                        2022-2027.`,
                        `The rising cost of construction is likely to push up real estate prices which would thereby have an impact on existing EMIs which
                        will shoot up.`,
                        `Average home prices increased by 5 per cent between December 2020 to February 2022.`,
                        `Home loan rates which were at 6.50% in April 2022 has now inched towards 7.50% to 8.5% by Nov
                        2022.`
                    ]
                }
            ]
            break;
        }

        case "Public Provident Fund": {
            content = [
                {
                    title : "Trivia",
                    id: 3,
                    text : [
                        `PPF scheme was launched in 1968 by the Finance Ministry's National Savings Institute.`,
                        `Eligibility to invest in PPF:`,
                        `@(a) You can invest in PPF only if you are a Citizen of India.`, 
                        `@(b) NRIs, Trust & HUF cannot invest in PPF.`,
                        `Only 1 PPF account can be opened under your name. No joint ownership of a PPF account allowed (unless a minor).`,
                        `You can open the account with`,
                        `@(a) Any head post office or general post office `,
                        `@(b) Private-sector banks: ICICI Bank, Axis Bank, etc. `,
                        `@(c) Branches of nationalized banks: State Bank of India, Bank of Maharashtra, etc.`,
                        `One can avail loan via PPF account.`,
                        `@(a) Eligible between third financial year and sixth financial year of maintaining PPF account.`, 
                        `@(b) Loan interest rate is 1% more than current PPF interest rate.`
                    ]
                }
            ]
            break;
        }

        case "Equity": {
            content = [
                {
                    title : "Trivia",
                    id: 3,
                    text : [
                        `The first stock exchange in India flourished on Dalal Street in 1854. That place is now known as the Bombay Stock Exchange (BSE). It was also the first stock exchange in Asia.`,
                        `Less than 2.5% population of India invest in the Equity market (as of Oct 2021).`,
                        `The base value of Nifty was 1,000 in 1995. Recently Nifty crossed the 18k mark, which is a 1700% increase. This means that had you invested Rs. 10 Lakh in 1995, its value today would be Rs. 1.7 Crore.`, 
                        `When shares were traded in physical form in the 1980s, the settlement of stock trades could take more than a month. Now the process only takes two days.`,
                        `The number of demat accounts crossed the 10 crore mark for the first time in August 2022.`,
                        `Reliance Industries Ltd (Rs 17 lac crores) & Tata Consultancy Services (12 lac crores) are the companies that have market capitalization higher than the combined market capitalization of the Karachi Stock Exchange (KSE).`,
                        `MRF is the most expensive stock in India, with a record high price of Rs. 96,000.`,
                        `The most expensive stock in the world is Warren Buffet’s Berkshire Hathaway, with a record high price of $544,000, which is almost Rs 4.5 Crore.`,
                    ]
                }
            ]
            break;
        }

        default : content = [];
    }

    return content;
}

export default getInvInfo;