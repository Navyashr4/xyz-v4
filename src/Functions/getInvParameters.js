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
            `@Score`,
            `Low (You are losing money by not beating inflation)`,
            `@Features`,
            `Real Interest Rate: Negative in current scenario (i.e Inflation > Fixed deposit rate)`,
            `Fact: Trailing 6 months inflation – 6.8% while Interest rate on FDs - 1yr: 6%;
            3yrs: 6.5%; 5yrs: 6.25%.`,
            `@Conclusion`,
            `If Fixed deposit is your furniture, then
              inflation is the termite!`,
          ],
        },
        {
          name: "Liquidity",
          color: "text-yellow-400",
          bgColor: "bg-yellow-50",
          score: 10,

          image: BitconImg,
          content: [
            `@Score`,
            `Score: High [You can withdraw fixed deposits anytime]`,
            `@Features`,
            `An Investor can do pre-mature withdrawal of a fixed deposit.`,
            `However, Pre-mature withdrawal penalty % is applied on the fixed
            deposit amount on withdrawal.`,
            `Such penalty ranges from 0.5% to 1%. (eg, Interest rate - 6%, Effective rate due to Penalty on Pre-
              Mature Withdrawl - 5%)`,
            `Maximum within T+1, the amount is received in the savings bank account.`,
            `@Conclusion`,
            `Easy liquidity facility, thereby helpful in scenario of any
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
            `@Score`,
            `Medium to High [Insured & Guaranteed]`,
            `@Features`,
            `Insurance - Fixed deposit + Savings account + Current account are insured to extent of Rs 5,00,000 per depositor by Deposit Insurance and Credit Guarantee Corporation (DICGC), a subsidiary of RBI.`,
            `This guarantee is provided in case Bank fails to pay the Fixed deposit money (Principal + Interest) & on liquidation of the bank.`,
            `Guaranteed Income - Interest rate on Fixed deposit is guaranteed & not subject to any volatility.`,
            `Credit Risk - Choose the Bank or NBFC for placing Fixed deposit based on the credit rating provided by CRISIL/ ICRA or CARE. Lower the rating, higher the risk of the Bank.`,
            `@Conclusion`,
            `Principal safe only to extent of Rs.5 lacs per bank. Rate of return on Fixed deposit is guaranteed.`,
          ],
        },
        {
          name: "Taxation",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 2,

          image: EthereumImg,
          content: [
            `@Score`,
            `Low`,
            `@Features`,
            `Disadvantages`,
            `*(a) Interest income earned on Fixed deposit is taxed as per your income tax slab. (eg. If in 30% tax slab due to salary or other source of income, interest income on fixed deposit is also taxed at 30%).`,
            `*(b) No Indexation benefit is provided to income earned in fixed deposit. However tax
            benefit available for income earned from debt mutual funds, if held for 3+ years (Long term capital
            gain with indexation benefit available).`,
            `Advantage`,
            `*(a) 5 year Tax Saver Fixed deposits can be utilized as deduction in 80C of Income tax act to the extent of Rs 1,50,000.`,
            `@Conclusion`,
            `Based on net of tax returns, certain Debt Funds can give 7% return vs 5% of Fixed deposits (when holding period is 3 or more years).`,
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
            `@Score`,
            `Low to Medium`,
            `@Features`,
            `Gold acts as a good hedge against currency fluctuations (dollar to rupee) and inflation.`,
            `Optimal price discovery is not wide spread.
            Unorganized jewelers might not provide the right value for Physical
            gold.`,
            `General perception about Gold is:`,
            `*(a) when equity stock markets rise, the price of Gold declines`,
            `*(b) when equity stock markets declines, the price of Gold rises`,
            `Over the last 3, 5, 7 and 10 Years, Gold returns have been mediocre. In the last 10 years, Gold has given 4.7% compounded annual return.`,
            `@Conclusion`,
            `Over the last 1 year, while inflation around the world has been going up, Gold has not acted as a good hedge against inflation. Returns has been around 6%, which does not beat inflation of approx. 7-8% in current times.`,
          ],
        },
        {
          name: "Liquidity",
          color: "text-yellow-400",
          bgColor: "bg-yellow-50",
          score: 8,

          image: BitconImg,
          content: [
            `@Score`,
            `Medium`,
            `@Features`,
            `Liquidity in Gold depends on the mode of holding`,
            `*(a) Liquidity of Physical Gold is lower as you need to find a buyer/vendor to purchase the same at the market price with minimal expenses on exchange. Liquidity is lower compared to some asset classes like Stocks and Bond funds, but is better than Real estate.`,
            `*(b) Liquidity is high when it comes to Gold ETFs, Gold Mutual funds or Digital Gold. The folio
            numbers in gold ETFs surged to 46 lakh in June this year from 16 lakh in May last year, an
            increase of 2.9 times.`,
            `*(c) Liquidity with Sovereign Gold Bonds is very low as the investment is locked-in for 8 years.
            However you can trade in SGBs in secondary markets but the liquidity is very low.`,
            `@Conclusion`,
            `Content to be provided`,
          ],
        },
        {
          name: "Safety",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 8,

          image: EthereumImg,
          content: [
            `@Score`,
            `Medium`,
            `@Features`,
            `Security of Physical Gold storage can be an issue (change to - can be a concern). You can either
            store it our house or find a bank to deposit the same.`,
            `Optimal price discovery is not wide spread. Unorganized jewelers might not provide the right value for Physical gold.`,
            `Sovereign gold bonds, Gold ETFs / Funds &amp; Digital gold are
            held by authorities like RBI &amp; Mutual Funds. Thereby the custody of
            such investments are considered safe..`,
            `@Conclusion`,
            `Mutual funds and Digital gold are very safe to buy, hold and sell, but storage and transactions of physical gold is not optimal.`,
          ],
        },
        {
          name: "Taxation",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 6,

          image: EthereumImg,
          content: [
            `@Score`,
            `Medium`,
            `@Features`,
            `All forms of Gold are taxed as short term capital gain if held for less than 3 years and taxed as per your income tax slab. After 3 years they are taxed at 20% with indexation benefit.`,
            `Accounting for Jewellery Gold taxation is tricky in terms of it’s pricing & documentation.`,
            `GST on purchasing Physical Gold is 3%`,
            `Custom duty charges levied on purchase of Gold (on imports) attract a rate of 15%. Before Jul22, the rate was at 10%.`,
            `@Conclusion`,
            `Apart from Income tax on gains, Indirect tax (GST & Custom duty) is also levied on your purchase of Gold (directly or indirectly).`,
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
            `@Score`,
            `Low to Medium`,
            `@Features`,
            `Highly scattered returns: Return on Residential &amp; Commercial varies as per geographies across
            periods. Refer to the link below in reference section for housing price index for top 10 cities in India
            for last 10 years.`,
            `Poor CAGR return in the last 3yrs (2.7%), 5yrs (3.8%) & 10yrs (6.9%).`,
            `Rental yields in India range between 2-3% which does not cover the EMI in
            most cases (home loan interest range 7-8% p.a)`,
            `@Conclusion`,
            `Return can be unpredictable in the shorter tenure due to effects of external factors such
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
            `@Score`,
            `Low`,
            `@Features`,
            `Real estate is a highly illiquid asset class since it is a long-drawn process. The transaction period to purchase or sell can take months to complete.`,
            `Optimal price discovery is not wide spread and can thereby lead to delay for your liquidity requirements.`,
            `Liquidity can also vary considerably between different asset types (commercial, residential, etc), geographies and time periods.`,
            `@Conclusion`,
            `In the language of equity market intra day trading, Real estate’s intra day trading means a time span of 4-8 months.`,
          ],
        },
        {
          name: "Safety",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 6,

          image: EthereumImg,
          content: [
            `@Score`,
            `Medium`,
            `@Features`,
            `Advantages`,
            `*(a) Legal Ownership: You own a tangible asset which is legally documented under your name.`,
            `Disadvantages`,
            `*(a) Government intervention: At times, government can take over properties for infrastructure developments wherein the compensation offered might not match the true value.`,
            `*(b) Legal issues on ownership: Previous ownerships, restricted zone development, family fueds are important parameters.`,
            `*(c) Builder & Long gestation: Possession of properties can be subjected to builder risk`,
            `@Conclusion`,
            `Due diligence before purchasing, can ensure Real estate to be a safe investment class.`,
          ],
        },
        {
          name: "Taxation",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 6,

          image: EthereumImg,
          content: [
            `@Score`,
            `Medium`,
            `@Features`,
            `Tax Impacts`,
            `*(a) If it is a short term capital gain (<3 years) then Income tax slab rate applies. If it is a long term capital gain, then tax rate is 20% with indexation `,
            `*(b) Stamp duty charges (2 to 8%) are levied on purchase of real estate which varies as per state. Refer link in reference section for state wise stamp
            duty charges.`,
            `Relief`,
            `*(a) You can avail deduction of up to Rs. 1.5lacs (under section 80 of Income tax act) on principal payment made on home loan.`,
            `*(b) Under section 24, maximum of Rs 2lacs of deductions on interest payment on home loan can be availed (self-occupied property). In case of
            let-out property for rental income, you can avail entire interest payment on the home loan.`,
            `*(c) Standard Deduction of 30% of Net-Annual Value on Rental income.`,
            `*(d) Section 54 gives capital gain relief to a taxpayer on sale of residential house only when the sale proceeds are utilized to acquire another
            residential house.`,
            `@Conclusion`,
            `Tax heavy asset class but with reliefs provided by Income Tax department`,
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
            `@Score`,
            `Low to Medium`,
            `@Features`,
            `PPF interest rates have provided a delta of 2-4% above inflation during the last 15 years.`,
            `Better interest rate provided compared to Fixed Deposits and Recurring deposits.`,
            `It is a guaranteed interest income scheme. However subjected to interest rates which are adjusted each year based on long term government securities interest rates.`,
            `@Conclusion`,
            `If you have low risk appetite along with low long term returns, certain allocation of your retirement corpus can be invested in PPF.`,
          ],
        },
        {
          name: `Liquidity`,
          color: `text-yellow-400`,
          bgColor: `bg-yellow-50`,
          score: 2,

          image: BitconImg,
          content: [
            `@Score`,
            `Low `,
            `@Features`,
            `Highly illiquid since you enter a mandatory lock-in for 15 years from the year of opening the PPF account.`,
            `Premature closure of a PPF account is not permissible except in the following scenarios:`,
            `*(a) Death of the account holder`,
            `*(b) After completion of five years, from the end of the financial year in which the account is opened, if the money is required for treatment of a critical illness or to fund higher education only partial withdrawal is allowed (upto 50% in a year).`,
            `Minimum investment of Rs 500 and Maximum of Rs 1.5lacs allowed year financial year.`,
            `@Conclusion`,
            `It’s an exile for 15 years.`,
          ],
        },
        {
          name: `Safety`,
          color: `text-red-800`,
          bgColor: `bg-red-50`,
          score: 10,

          image: EthereumImg,
          content: [
            `@Score`,
            `High`,
            `@Features`,
            `It’s a Central government back investment scheme.`,
            `Since this plan is mandated by the Government of India, it is backed up with guaranteed returns to protect the financial needs of the masses (principal + interest).`,
            `@Conclusion`,
            `Safe!`,
          ],
        },
        {
          name: `Taxation`,
          color: `text-red-800`,
          bgColor: `bg-red-50`,
          score: 10,

          image: EthereumImg,
          content: [
            `@Score`,
            `High`,
            `@Features`,
            `PPF falls under the Exempt- Exempt- Exempt investment category (i.e Investment, Accumulation & Withdrawal phase, PPFs are tax efficient).`,
            `*(a) Investment Phase – PPF deposit is deductible from your total income. Maximum amount deductible is limited to Rs 1.5 lacs per financial year.`,
            `*(b) Accumulation Phase – Interest income accumulated are tax-free.`,
            `*(c) Withdrawal Phase – On maturity of PPF account or partial withdrawal interest income is exempted from tax.`,
            `@Conclusion`,
            `An overall tax saving instrument, but with limited investment allowed per year.`,
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
            `@Score`,
            `Medium (You lose onto high expenses you pay)`,
            `@Features`,
            `You spend 3% on per annum basis towards ULIP expenses for a 10 year investment period.`,
            `Your selection of fund – Equity, Debt, Hybrid determines the overall return. Higher Equity - Higher Returns - Higher volatility – Higher Risk.`,
            `Recommendation to earn good returns is 10 years since high costs are loaded in earlier premium paying years.`,
            `You can switch plans between Equity, Debt & Hybrid. Insurers
            charge switch expense for the same. 10-12% returns which average
            ULIP plans has given in 10 year investment horizon.`,
            `However, with introduction of new tax laws in 2021, post tax returns
            is important for evaluation.`,
            `@Conclusion`,
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
            `@Score`,
            `Low`,
            `@Features`,
            `First 5 years:`,
            `*(a) No withdrawals of your investment (net asset value).`,
            `*(b) Even if you surrender your ULIP within 5 years, withdrawal would have to wait until the lock-in period is over.`,
            `Post 5 years:`,
            `*(a) Partial Withdrawals allowed to extent of 10% - 20% of Premium paid till date (varied between insurers).`,
            `On Surrender:`,
            `*(a) On policy surrender within 5 years of lock-in, surrender value (NAV less all expenses till date) can only be withdrawn after end of 5 years lock in.`,
            `*(b) Also, life cover will cease to exist on surrender.`,
            `@Conclusion`,
            `No matter what, you are locked up for 5 years. Even after 5 years, bail is available only on piecemeal basis.`,
          ],
        },
        {
          name: "Safety",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 8,

          image: EthereumImg,
          content: [
            `@Score`,
            `Medium [Insured & Market Linked]`,
            `@Features`,
            `Insurance`,
            `*(a) Life cover insurance linked to ULIP is guaranteed in case of death of policyholder.`,
            `*(b) Even if Net asset value is Zero, in case of death, life cover is guaranteed.`,
            `Investment`,
            `*(a) Portfolio is subjected to market risk. In case, choosing ULIP for returns & not life cover was your intent, then portfolio value is subject to volatilities, which could lead to significant downside risk scenario too.`,
            `*(b) Thereby, safety of portfolio value is contingent.`,
            `@Conclusion`,
            `Life can be safeguarded but not returns.`,
          ],
        },
        {
          name: "Taxation",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 6,

          image: EthereumImg,
          content: [
            `@Score`,
            `Medium`,
            `@Features`,
            `Premium invested`,
            `*(a) Premium paid for investing in ULIP is eligible of deduction from income in a financial year to extent of Rs 1.5lacs under 80C of Income Tax Act.`,
            `ULIP follows conditional taxation on redemption/ withdrawal for policies issued after 1-Feb-2021 as detailed below`,
            `*1. When total ULIP premium is more than Rs 2.5 lacs (“High Premium”) in any of the financial year [no matter how many ULIPs you hold]:`,
            `*(a)  The capital gains on consideration received towards maturity or partial withdrawal obtained is taxable like equity or debt instruments based on holding period [short term or long term]. Refer link of Taxmann in reference section to read about taxability.`,
            `*(b) Tax of 10% (short term) / 15% (long term) for Equity oriented ULIP plan while Non-Equity oriented ULIP plans would be taxed as per
            debt instruments.`,
            `*2. When total ULIP premium is less than Rs 2.5 lacs in any of the financial year [no matter how many ULIPs you hold] or Policies issued prior to 1-Feb-2021.`,
            `*(a) Capital Gains is tax free`,
            `@Conclusion`,
            `Expenses + Lock-in + Lower Return & Now Taxability has made ULIP even more less attractive.`,
          ],
        },
      ];
      break;
    }

    case "Equity": {
      content = [
        {
          name: "Return",
          color: "text-green-800",
          bgColor: "bg-green-50",
          score: 10,

          image: LitecoinImg,
          content: [
            `@Score`,
            `High`,
            `@Features`,
            `Equity mutual funds can be active funds or passive funds.`,
            `*(a) Passive Funds try to mirror market returns, i.e., they follow an index like the Nifty 50 to match its returns.`,
            `*(b) Active Funds try to beat the index returns. However, the fees for active funds are significantly higher, since the fund is being actively managed by a fund manager.`,
            `When it comes to active funds, Large Cap funds generate 14 to 18% returns per annum, Mid cap funds generate 15 to 32% returns per annum and small cap funds generate 15 to 38% returns.`,
            `When it comes to passive funds, Large Cap funds generate around 16% returns per annum, Mid cap funds generate around 25% returns per annum and small cap funds generate around 30% returns.`,
            `While active funds have the potential to beat passive funds, active funds tend to underperform as the tenure of the investment increases. Furthermore, past returns aren’t an indicator of future returns.`,
            `While mutual funds give good returns, individual stocks can generate even better returns, provided the investor is experienced. But this comes at price, this superior return is associated with a very high risk.`,
            `Nifty hasn’t given negative returns in the last 7 calendar years.`,
            `@Conclusion`,
            `Needs to be provided`,
          ],
        },
        {
          name: "Liquidity",
          color: "text-yellow-400",
          bgColor: "bg-yellow-50",
          score: 8,

          image: BitconImg,
          content: [
            `@Score`,
            `High`,
            `@Features`,
            `First 5 years:`,
            `Liquidity of Equity is higher when compared to other asset classes.`,
            `Equity fund redemption takes a maximum of 3-4 working days.`,
            `Having upto 6 months of expenses in the bank is recommended, beyond that, investing in equity is a great
            idea since your money wouldn’t rot away in the bank, being eroded by inflation.`,
            `@Conclusion`,
            `Liquidity is high with equity instruments.`,
          ],
        },
        {
          name: "Safety",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 10,

          image: EthereumImg,
          content: [
            `@Score`,
            `High`,
            `@Features`,
            `When it comes to individual stocks, they are held in dematerialized form in the investor’s DEMAT account.`,
            `While a DEMAT account isn’t required to invest in mutual funds, investors can opt to hold mutual fund
            units in dematerialized form in their DEMAT accounts.`,
            `Since the assets are dematerialized, there is no risk of tampering by a 3rd party.`,
            `@Conclusion`,
            `Equity instruments are very safe to buy, hold and sell.`,
          ],
        },
        {
          name: "Taxation",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 6,

          image: EthereumImg,
          content: [
            `@Score`,
            `High`,
            `@Features`,
            `Short term capital gains (if the units are sold before 1 year) in equity funds are taxed at the rate of 15% plus 4% cess.`,
            `Long term capital gains tax in equity funds is 10% + 4% cess provided the gain in a financial year is over Rs 1 Lakh. Long
            term capital gains upto Rs 1 Lakh is totally tax free.`,
            `@Conclusion`,
            `Equity investments are incredibly tax efficient.`,
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
