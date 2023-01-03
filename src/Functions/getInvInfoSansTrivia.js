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
                        `To park short to medium term money (period 1 month to 1-3 years)`,
                        `Assured committed returns`,
                        `Sense of security on return of money (including interest) with no volatility.`
                    ]
                },
                {
                    title : "What impacts the rates on fixed depsosit?",
                    text : [
                        `Economic Scenario – In a recessionary scenario, fixed deposit rates would generally be higher and similarly vice
                        versa. Such rates are influenced by RBI’s policies based on prevailing economic conditions.`,
                        `Amount invested – Higher the amount, higher the interest rates`,
                        `Credit risk – Riskier the bank, higher the interest rates.`,
                        `Tenure – Higher the tenure, higher the interest rates.`
                    ]
                },
                
            ]
            break;
        }

        case "Gold": {
            content = [
                {
                    title : "Definitions",
                    text : [`Gold is a commodity which is treated as an alternative investment class. It is generally perceived by many investors as a way of protecting oneself against inflation and recessions, hence its reputation as a “safe haven” asset.`,
                    `@Gold investment can be done in various forms:`,
                    `Physical Gold - Physical gold can be purchased as gold coins or gold bricks.`,
                    `Jewellery – Gold can be purchased in the form of Jewellery`,
                    `ETFs and Mutual Funds - Various mutual fund houses have gold mutual funds and ETFs which have Gold have underlying asset. Thereby you hold gold indirectly.`,
                    `Digital Gold - Various Banks and payment Apps provide a provision to purchase gold in digital form.`,
                    `SGB - Government periodically issues Sovereign Gold Bonds`
                    ]
                },

                {
                    title : "Why do people invest in Gold?",
                    text : [
                        `Historically India has had high inflation and Gold has successfully acted as a hedge against inflation`,
                        `Sense of safety & confidence since Gold can be purchased in physical form, like a real estate investment.`,
                        `Gold as an asset class is supposed to do well when the Economy is poor.`
                    ]
                },
                {
                    title : "Drawbacks of Gold as an investment",
                    text : [
                        `Gold as an asset class doesn’t produce any cash flow, unlike investing in company stock where the company produces cash flow or Real estate which generates rent or used for agricultural income.`,
                        `Gold value can be very volatile depending on global & country’s economy.`,
                        `Gold returns have been very mediocre over the last decade as compared to stocks`,
                        `Government of India is discouraging individuals from owning physical gold because it drains Country’s foreign exchange reserves. (After Oil, Gold is the biggest forex outflow for India), hence lots of new regulations keep getting introduced.`
                    ]
                },
                // {
                //     title: "Trivia",
                //     text : [
                //         `1.Gold was a medium of exchange and backed by the entire monetary system in various countries (Called the Gold Standard).`,
                //         `2. Currencies used to be backed by Gold in most countries around the world.`,
                //         `3. Gold no longer plays a key role in the global monetary system.`,
                //         `4. But, it is used as a symbol of wealth and investment since it is a key precious metal.`,
                //         `5. It is the scarcity premium that gives gold its value in the current times.`,
                //         `6. In 2019 the World Gold Council estimated that Indian households owned over 25,000 tonnes of gold, making India the largest holder in the world. The value of this gold was estimated to be $1.1 trillion, which was over 40% of India’s GPD.`,
                //         `7. Middle income households buy 56% of India’s gold and hold around 11% of the world’s gold.`,
                //         `8. India has the 9th largest gold reserve in the world, sitting at 760 tonnes, followed by Japan, sitting at 846 tonnes & USA with 8,133 tonnes.`
                //     ]
                // }
            ]
            break;
        }

        case "Real Estate": {
            content = [
                {
                    title : "Definitions",
                    text : [
                        `Real estate is defined as the land and any permanent structures, like a residential, commercial or improvements attached to the land, whether natural or man-made.`,
                        `Real estate is a form of real property.`
                    ]
                },
                {
                    title : "Types",
                    text : [
                        `Residential real estate: Any property used for residential purposes. Examples include apartments, independent houses, bungalow, etc.`,
                        `Commercial real estate: Any property used exclusively for business purposes, such as grocery stores, hospitals, hotels, offices, parking facilities, restaurants, shopping centers,
                        stores, and theaters.`,
                        `Industrial real estate: Any property used for manufacturing, production, distribution, storage, and research and development.`,
                        `Land: Includes undeveloped property, vacant land, and agricultural land.`
                    ]

                },
                {
                    title : "Why do people invest in real estate?",
                    text : [
                        `Sense of safety & confidence since Real estate can be purchased in physical form, like Physical Gold.`,
                        `Steady cashflow from rental income earned out of leased properties`,
                        `Higher returns.`,
                        `Portfolio diversification.`,
                        `Tax Breaks and deductions.`
                    ]
                },
                {
                    title : "What impacts the rates on Real Estate?",
                    text : [
                        `Interest rates scenario: Lower the interest rate, Cheaper it is to buy Real estate, which thereby increases the Demand.`,
                        `Government Policies: Tax credits, deductions, and subsidies are some of the ways Government can boost demand for real estate.`,
                        `Economic Scenario: Generally measured by economic indicators such as the GDP, employment data, manufacturing activity, the prices of goods, etc. Broadly speaking, when the economy is sluggish, so is real estate market.`
                    ]
                },
                // {
                //     title : "Trivia",
                //     text : [
                //         `1. NITI Aayog expects that the Indian real estate sector will reach a market size of $1 trillion by 2030 and will account for 13 per cent
                //         of India’s GDP by 2025.`,
                //         `2. The India real estate market is expected to exhibit a CAGR of 9.60% during 2022-2027.`,
                //         `3. The rising cost of construction is likely to push up real estate prices which would thereby have an impact on existing EMIs which
                //         will shoot up.`,
                //         `4. Home prices increased by 5 per cent Y-o-Y until December 2021, and continued to do so in January–February 2022.`,
                //         `5. Home loan rates which were at 6.50% in April 2022 which has now inched towards 7.60% in June 2022.`
                //     ]
                // }
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

        case "Public Provident Fund": {
            content = [
                {
                    title : "Definitions",
                    text : [
                        "A long term investment instrument (How long – 15 years, due to lock-in features) with guaranteed interest % at the time of investment.",
                        "PPF is a Central government-backed scheme, and the investment is also not market-linked. Due to this, it offers guaranteed returns to protect the investment needs of many people."
                    ]
                },
                {
                    title : "Why do people invest in public provident funds?",
                    text : [
                        "Retirement Corpus",
                        "Savings cum Tax saving investment. (Benefit of deduction under Section 80C of Income Tax Act)",
                        "Risk appetite is low"
                    ]
                },
                {
                    title : "What impacts the rates on public provident funds?",
                    text : [
                        "PPF scheme was started by Government in 1968 with rate of interest being 4.8%. PPF rates have seen many up and downs such as in 1999-2000 where rates went upto 12%.",
                        "PPF returns are fixed by the Central Government. They are set every quarter according to prevailing interest rates on Government Bonds.",
                        "Government bonds are influenced by RBI’s policies based on prevailing economic conditions. While bonds rate have been range bound in last 20-25 years, PPF interest rate has been less range bound. Check historical PPF interest rates from 1968 to 2022."
                    ]
                },
                // {
                //     title : "Trivia",
                //     text : [
                //         "1. PPF scheme was launched in 1968 by the Finance Ministry's National Savings Institute.",
                //         "2. Eligibility to invest in PPF: You can invest in PPF only if you are a Citizen of India. NRIs, Trust & HUF cannot invest in PPF.",
                //         "3. Only 1 PPF account can be opened under your name. No joint ownership of a PPF account allowed (unless a minor).",
                //         "4. You can open the account with (a) Any head post office or general post office (b) Private-sector banks: ICICI Bank, Axis Bank, etc. (c) Branches of nationalized banks: State Bank of India, Bank of Maharashtra, etc.",
                //         "5. One can avail loan via PPF account. Eligible between third financial year and sixth financial year of maintaining PPF account. Loan interest rate is 1% more than current PPF interest rate."
                //     ]
                // }
            ]
            break;
        }

        case "ULIP": {
            content = [
                {
                    title : "Definitions",
                    text : [`ULIP (Unit Linked Insurance Plan) is a Life Insurance product which combines Investment (managed by Fund Managers of Insurance company). This asset class is issued by Insurance Companies.`]
                },
                {
                    title: "Features of ULIPs",
                    text : [
                        `Important things to remember – Life Cover / Sum assured (Insurance), Net Asset Value (Investment) & Death Benefit.`,
                        `Insurance - In most ULIPs, the minimum Life Cover offered is 10 times your annual premium amount. You may go as high as 40x or higher, depending on Insurance Company`,
                        `Investment – Certain portion of the premium paid by you is invested by Insurance Company in financial markets via equity, debt or hybrid funds. Money invested in these funds determine your Net Asset Value`,
                        `Death Benefit – In case of death, nominee receives sum assured or net asset value whichever is higher.`
                    ]
                },
                {
                    title : "Why do people invest in fixed deposits?",
                    text : [
                        `Single plan product which includes Life Insurance + Investment`,
                        `Tax benefit (i.e Tax deductions on investment & certain tax free conditions on gains made on maturity / redemption)`,
                        `To achieve good returns on investment`
                    ]
                },
                {
                    title : "What impacts the returns on ULIPs?",
                    text : [
                        `Economic Scenario of India along with Global market conditions.`,
                        `Fund Manager of your portfolio – Volatility / Risk is dependent on the investment decisions taken by the Fund Managers.`,
                        `List of charges associated to ULIP, which is deducted from your Fund Value. These are:`,
                        `@a. fund management charge`,
                        `@b. premium allocation charge`,                  
                        `@c. mortality charge`,                    
                        `@d. switching charge`,                       
                        `@e. policy administration charge`,                       
                        `@f. partial withdrawal charge`,                        
                        `@g. discontinuance charge`,                      
                        `@h. miscellaneous charges`,
                        `Allocation of Funds – Your selection of funds – Conservative, Moderate or Aggressive will determine the range of returns on the Investment portfolio`
                    ]
                },
            ]
            break;
        }

        case "Equity": {
            content = [
                {
                    title : "Definitions",
                    text : [
                        `An equity market is a market in which shares of companies are issued and traded, either through exchanges or over-the-counter markets. It gives companies access to
                        capital to grow their business, and investors a piece of ownership in a company with the potential to realize gains in their investment based on the company's future
                        performance.`,
                        `@Gold investment can be done in various forms:`,
                        `Listed Shares – Shares which are listed on an exchange (like NSE or BSE). It has benefits of trading into a company’s share with more frequency & liquidity.`,
                        `ETFs and Mutual Funds – Mutual Funds are run by professional fund managers. It is recommended for those investors who have less time and/or knowledge to invest in
                        individual shares. It is still a high risk & high return avenue but has a wider risk diversification.`,
                        `Futures and Options - F&O investors speculate the share price movements of the underlying asset to realize gain.`,
                        `Unlisted Shares – Shares which are no listed on an exchange & are generally over the counter arrangement. Generally referred to as Pre-IPO market, the shares are
                        traded less frequently and thereby lower liquidity.`,
                    ]
                },
                {
                    title : "Why do people invest in equity?",
                    text : [
                        `Historically, India has had high inflation and Equity has consecutively beaten inflation and generated higher returns.`,
                        `Unlike most investments, equity investments are highly liquid.`,
                        `Equity investments are not subject to any tenure / term. Thereby, an investor can hold shares for as long as he/she wants depending on their goals or company’s existence.`,
                    ]
                },
            ]
            break;
        }

        default : content = [];
    }

    return content;
}

export default getInvInfo;