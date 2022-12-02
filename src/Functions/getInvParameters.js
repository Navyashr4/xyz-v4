import BitconImg from "../assets/img/bitcon.png";
import EthereumImg from "../assets/img/ethereum.png";
import LitecoinImg from "../assets/img/litecoin.png";

const getInvFacts = (invType) => {
  let content = [];
  switch (invType) {
    case "Bank Fixed Deposit": {
      content = [
        {
          name: "Return",
          color: "text-green-800",
          bgColor: "bg-green-50",
          score: 2,

          image: LitecoinImg,
          content: [
            `Score: Low (You are losing money by not beating inflation)`,
            `Real Interest Rate: Negative in current scenario (i.e Inflation > Fixed deposit rate)`,
            `Fact: Trailing 6 months inflation – 6.8% while Interest rate on FDs - 1yr: 6%;
            3yrs: 6.5%; 5yrs: 6.25%.`,
            `Conclusion: If Fixed deposit is your Furniture, then
              Inflation is the Termite!`,
          ],
        },
        {
          name: "Liquidity",
          color: "text-yellow-400",
          bgColor: "bg-yellow-50",
          score: 10,

          image: BitconImg,
          content: [
            `Score: High [You can withdraw fixed deposits anytime]`,
            `An Investor can do pre-mature withdrawal of a fixed deposit.`,
            `However, Pre-mature withdrawal penalty % is applied on the fixed
            deposit amount on withdrawal.`,
            `Such penalty ranges from 0.5% to 1%. (eg, Interest rate - 6%, Effective rate due to Penalty on Pre-
              Mature Withdrawl - 5%)`,
            `Maximum within T+1, the amount is received in the savings bank account.`,
            `Conclusion: Easy liquidity facility, thereby helpful in scenario of any
            emergency.`,
          ],
        },
        {
          name: "Safety",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 8,

          image: EthereumImg,
          content: [
            `Score: Medium to High [Insured & Guaranteed]`,
            `Insurance - Fixed deposit + Savings account + Current account are insured to extent of Rs 5,00,000 per depositor by Deposit Insurance and Credit Guarantee Corporation (DICGC), a subsidiary of RBI.`,
            `This guarantee is provided in case Bank fails to pay the Fixed deposit money (Principal + Interest) & on liquidation of the bank.`,
            `Guaranteed Income - Interest rate on Fixed deposit is guaranteed & not subject to any volatility.`,
            `Credit Risk - Choose the Bank or NBFC for placing Fixed deposit based on the credit rating provided by CRISIL/ ICRA or CARE. Lower the rating, higher the risk of the Bank.`,
            `Conclusion: Principal safe only to extent of Rs.5 lacs per bank. Rate of return on Fixed deposit is guaranteed.`,
          ],
        },
        {
          name: "Taxation",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 2,

          image: EthereumImg,
          content: [
            `Score: Low`,
            `Disadvantage #1: Interest income earned on Fixed deposit is taxed as per your income tax slab. (eg. If in 30% tax slab due to salary or other source of income, interest income on fixed deposit is also taxed at 30%).`,
            `Disadvantage #2: No Indexation benefit is provided to income earned in fixed deposit. However tax
            benefit available for income earned from debt mutual funds, if held for 3+ years (Long term capital
            gain with indexation benefit available).`,
            `Advantage: 5 year Tax Saver Fixed deposits can be utilized as deduction in 80C of Income tax act to the extent of Rs 1,50,000.`,
            `Conclusion: Based on net of tax returns, certain Debt Funds can give 7% return vs 5% of Fixed deposits (when holding period is 3 or more years).`,
          ],
        },
      ];
      break;
    }

    case "Gold": {
      content = [
        {
          name: "Return",
          color: "text-green-800",
          bgColor: "bg-green-50",
          score: 4,
          content: [
            `Score: Low to Medium`,
            `Gold acts as a good hedge against currency fluctuations (dollar to rupee) and inflation.`,
            `Optimal price discovery is not wide spread.
            Unorganized jewelers might not provide the right value for Physical
            gold.`,
            `General perception about Gold is: 
            (a) when equity stock markets rise, the price of Gold declines
            (b) when equity stock markets declines, the price of Gold rises`,
            `Over the last 3, 5, 7 and 10 Years, Gold returns have been mediocre. In the last 10 years, Gold has given 4.7% compounded annual return.`,
            `Conclusion: Over the last 1 year, while inflation around the world has been going up, Gold has not acted as a good hedge against inflation. Returns has been around 6%, which does not beat inflation of approx. 7-8% in current times.`,
          ],
        },
        {
          name: "Liquidity",
          color: "text-yellow-400",
          bgColor: "bg-yellow-50",
          score: 6,

          image: BitconImg,
          content: [
            `Score: Medium`,
            `Liquidity in Gold depends on the mode of holding`,
            `Liquidity of Physical Gold is lower as you need to find a buyer/vendor to purchase the same at the market price with minimal expenses on exchange. Liquidity is lower compared to some asset classes like Stocks and Bond funds, but is better than Real estate.`,
            `Liquidity is high when it comes to Gold ETFs, Gold Mutual funds or Digital Gold. The folio
            numbers in gold ETFs surged to 46 lakh in June this year from 16 lakh in May last year, an
            increase of 2.9 times.`,
            `Liquidity with Sovereign Gold Bonds is very low as the investment is locked-in for 8 years.
            However you can trade in SGBs in secondary markets but the liquidity is very low.`,
          ],
        },
        {
          name: "Safety",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 6,

          image: EthereumImg,
          content: [
            `Score: Medium`,
            `Security of Physical Gold storage can be an issue (change to - can be a concern). You can either
            store it our house or find a bank to deposit the same.`,
            `Optimal price discovery is not wide spread. Unorganized jewelers might not provide the right value for Physical gold.`,
            `Sovereign gold bonds, Gold ETFs / Funds &amp; Digital gold are
            held by authorities like RBI &amp; Mutual Funds. Thereby the custody of
            such investments are considered safe..`,
            `Conclusion: Mutual funds and Digital gold are very safe to buy, hold and sell, but storage and transactions of physical gold is not optimal.`,
          ],
        },
        {
          name: "Taxation",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 6,

          image: EthereumImg,
          content: [
            `Score: Medium`,
            `All forms of Gold are taxed as short term capital gain if held for less than 3 years and taxed as per your income tax slab. After 3 years they are taxed at 20% with indexation benefit.`,
            `Accounting for Jewellery Gold taxation is tricky in terms of it’s pricing & documentation.`,
            `GST on purchasing Physical Gold is 3%`,
            `Custom duty charges levied on purchase of Gold (on imports) attract a rate of 15%. Before Jul22, the rate was at 10%.`,
            `Conclusion: Apart from Income tax on gains, Indirect tax (GST & Custom duty) is also levied on your purchase of Gold (directly or indirectly).`,
          ],
        },
      ];
      break;
    }

    case "Real Estate": {
      content = [
        {
          name: "Return",
          color: "text-green-800",
          bgColor: "bg-green-50",
          score: 4,

          image: LitecoinImg,
          content: [
            `Score: Low to Medium`,
            `Highly scattered returns: Return on Residential &amp; Commercial varies as per geographies across
            periods. Refer to the link below in reference section for housing price index for top 10 cities in India
            for last 10 years.`,
            `Poor CAGR return in the last 3yrs (2.7%), 5yrs (3.8%) & 10yrs (6.9%).`,
            `Rental yields in India range between 2-3% which does not cover the EMI in
            most cases (home loan interest range 7-8% p.a)`,
            `Conclusion: Return can be unpredictable in the shorter tenure due to effects of external factors such
            as location, government policies, demand supply, etc.`,
          ],
        },
        {
          name: "Liquidity",
          color: "text-yellow-400",
          bgColor: "bg-yellow-50",
          score: 2,

          image: BitconImg,
          content: [
            `Score: Low`,
            `Real estate is a highly illiquid asset class since it is a long-drawn process. The transaction period to purchase or sell can take months to complete.`,
            `Optimal price discovery is not wide spread and can thereby lead to delay for your liquidity requirements.`,
            `Liquidity can also vary considerably between different asset types (commercial, residential, etc),geographies and time periods.`,
            `Conclusion: In the language of equity market intra day trading, Real estate’s intra day trading means a time span of 4-8 months.`,
          ],
        },
        {
          name: "Safety",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 6,

          image: EthereumImg,
          content: [
            `Score: High`,
            `Advantage #1: Legal Ownership: You own a tangible asset which is legally documented under your name.`,
            `Disadvantage #1: Government intervention: At times, government can take over properties for infrastructure developments wherein the compensation offered might not match the true value.`,
            `Disadvantage #2: Legal issues on ownership: Previous ownerships, restricted zone development, family fueds are important parameters.`,
            `Disadvantage #3: Builder & Long gestation: Possession of properties can be subjected to builder risk`,
            `Conclusion: Due diligence before purchasing, can ensure Real estate to be a safe investment class.`,
          ],
        },
        {
          name: "Taxation",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 6,

          image: EthereumImg,
          content: [
            `Score: Medium`,
            `Tax impact #1: If it is a short term capital gain (<3 years) then Income tax slab rate applies. If it is a long term capital gain, then tax rate is 20% with indexation `,
            `Tax impact #2: Stamp duty charges (2 to 8%) are levied on purchase of real estate which varies as per state. Refer link in reference section for state wise stamp
            duty charges.`,
            `Relief #1: You can avail deduction of up to Rs. 1.5lacs (under section 80 of Income tax act) on principal payment made on home loan.`,
            `Relief #2: Under section 24, maximum of Rs 2lacs of deductions on interest payment on home loan can be availed (self-occupied property). In case of
            let-out property for rental income, you can avail entire interest payment on the home loan.`,
            `Relief #3: Standard Deduction of 30% of Net-Annual Value on Rental income.`,
            `Relief #4: Section 54 gives capital gain relief to a taxpayer on sale of residential house only when the sale proceeds are utilized to acquire another
            residential house.`,
            `Conclusion: Tax heavy asset class but with reliefs provided by Income Tax department`,
          ],
        },
      ];
      break;
    }

    case "Guaranteed Income Plan": {
      content = [
        {
          name: "Return",
          color: "text-green-800",
          bgColor: "bg-green-50",
          score: 2,

          image: LitecoinImg,
          content: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
          ],
        },
        {
          name: "Liquidity",
          color: "text-yellow-400",
          bgColor: "bg-yellow-50",
          score: 5,

          image: BitconImg,
          content: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
          ],
        },
        {
          name: "Safety",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 8,

          image: EthereumImg,
          content: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
          ],
        },
        {
          name: "Taxation",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 3,

          image: EthereumImg,
          content: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
          ],
        },
      ];
      break;
    }

    case "Public Provident Fund": {
      content = [
        {
          name: "Return",
          color: "text-green-800",
          bgColor: "bg-green-50",
          score: 4,

          image: LitecoinImg,
          content: [
            "Score: Low to Medium",
            "PPF interest rates have provided a delta of 2-4% above inflation during the last 15 years.",
            "Better interest rate provided compared to Fixed Deposits and Recurring deposits.",
            "It is a guaranteed interest income scheme. However subjected to interest rates which are adjusted each year based on long term government securities interest rates.",
            "Conclusion: If you have low risk appetite along with low long term returns, certain allocation of your retirement corpus can be invested in PPF.",
          ],
        },
        {
          name: "Liquidity",
          color: "text-yellow-400",
          bgColor: "bg-yellow-50",
          score: 2,

          image: BitconImg,
          content: [
            "Score: Low ",
            "Highly illiquid since you enter a mandatory lock-in for 15 years from the year of opening the PPF account.",
            "Premature closure of a PPF account is not permissible except in the following scenarios: (a) Death of the account holder, (b) After completion of five years, from the end of the financial year in which the account is opened, if the money is required for treatment of a critical illness or to fund higher education.",
            "Only partial withdrawal is allowed (upto 50% in a year).",
            "Minimum investment of Rs 500 and Maximum of Rs 1.5lacs allowed year financial year.",
            "Conclusion: It’s an exile for 15 years.",
          ],
        },
        {
          name: "Safety",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 10,

          image: EthereumImg,
          content: [
            "Score: High",
            "It’s a Central government back investment scheme.",
            "Since this plan is mandated by the Government of India, it is backed up with guaranteed returns to protect the financial needs of the masses (principal + interest).",
            "Conclusion: Safe!",
          ],
        },
        {
          name: "Taxation",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 10,

          image: EthereumImg,
          content: [
            "Score: High",
            "PPF falls under the Exempt- Exempt- Exempt investment category (i.e Investment, Accumulation & Withdrawal phase, PPFs are tax efficient).",
            "Investment Phase – PPF deposit is deductible from your total income. Maximum amount deductible is limited to Rs 1.5 lacs per financial year.",
            "Accumulation Phase – Interest income accumulated are tax-free.",
            "Withdrawal Phase – On maturity of PPF account or partial withdrawal interest income is exempted from tax.",
            "Conclusion: An overall tax saving instrument, but with limited investment allowed per year.",
          ],
        },
      ];
      break;
    }

    case "ULIP": {
      content = [
        {
          name: "Return",
          color: "text-green-800",
          bgColor: "bg-green-50",
          score: 6,

          image: LitecoinImg,
          content: [
            `Score: Medium (You lose onto high expenses you pay)`,
            `You spend 3% on per annum basis towards ULIP expenses for a 10 year investment period.`,
            `Your selection of fund – Equity, Debt, Hybrid determines the overall return. Higher Equity - Higher Returns - Higher volatility – Higher Risk.`,
            `Recommendation to earn good returns is 10 years since high costs are loaded in earlier premium paying years.`,
            `You can switch plans between Equity, Debt & Hybrid. Insurers
            charge switch expense for the same. 10-12% returns which average
            ULIP plans has given in 10 year investment horizon.`,
            `However, with introduction of new tax laws in 2021, post tax returns
            is important for evaluation.`,
            `Conclusion: Clubbing Insurance + Investment = Can eat your return !`,
          ],
        },
        {
          name: "Liquidity",
          color: "text-yellow-400",
          bgColor: "bg-yellow-50",
          score: 2,

          image: BitconImg,
          content: [
            `Score: Low`,
            `First 5 years: No withdrawals of your investment (net asset value). Even if you surrender your ULIP within 5 years, withdrawal would have to wait until the lock-in period is over.`,
            `Post 5 years: Partial Withdrawals allowed to extent of 10% - 20% of Premium paid till date (varied between insurers).`,
            `On Surrender: On policy surrender within 5 years of lock-in, surrender value (NAV less all expenses till date) can only be withdrawn after
            end of 5 years lock in. Also, life cover will cease to exist on surrender.`,
            `Conclusion: No matter what, you are locked up for 5 years. Even after 5 years, bail is available only on piecemeal basis.`,
          ],
        },
        {
          name: "Safety",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 6,

          image: EthereumImg,
          content: [
            `Score: Medium [Insured & Market Linked]`,
            `Insurance #1: Life cover insurance linked to ULIP is guaranteed in case of death of policyholder.`,
            `Insurance #2: Even if Net asset value is Zero, in case of death, life cover is guaranteed.`,
            `Investment #1: Portfolio is subjected to market risk. In case, choosing ULIP for returns & not life cover was your intent, then portfolio value
            is subject to volatilities, which could lead to significant downside risk scenario too.`,
            `Investment #2: Thereby, safety of portfolio value is contingent.`,
            `Conclusion: Life can be safeguarded but not returns.`,
          ],
        },
        {
          name: "Taxation",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 6,

          image: EthereumImg,
          content: [
            `Score: Medium`,
            `Premium Invested: Premium paid for investing in ULIP is eligible of deduction from income in a financial year to extent of Rs 1.5lacs under 80C of Income Tax Act.`,
            `Conditional Taxation on Redemption / Withdrawal [for policies issued after 1-Feb-2021]`,
            `When total ULIP premium is more than Rs 2.5 lacs (“High Premium”) in any of the financial year [no matter how many ULIPs you hold].`,
            `The capital gains on consideration received towards maturity or partial withdrawal obtained is taxable like equity or debt instruments based on holding period [short term or long term]. Refer link of Taxmann in reference section to read about taxability.`,
            `Tax of 10% (short term) / 15% (long term) for Equity oriented ULIP plan while Non-Equity oriented ULIP plans would be taxed as per
            debt instruments.`,
            `When total ULIP premium is less than Rs 2.5 lacs in any of the financial year [no matter how many ULIPs you hold] or Policies issued prior to 1-Feb-2021.`,
            `Capital Gains is tax free`,
            `Conclusion: Expenses + Lock-in + Lower Return & Now Taxability has made ULIP even more less attractive.`,
          ],
        },
      ];
      break;
    }

    default: {
      content = "";
    }
  }

  return content;
};

export default getInvFacts;
