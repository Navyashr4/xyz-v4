import BitconImg from "../assets/img/bitcon.png";
import EthereumImg from "../assets/img/ethereum.png";
import LitecoinImg from "../assets/img/litecoin.png";

const getInvFacts = (invType) => {
  let content = [];
  switch (invType) {
    case "Bank Fixed Deposit": {
      content = [
        {
          name: "Return vs Inflation",
          color: "text-green-800",
          bgColor: "bg-green-50",
          score: 2,

          image: LitecoinImg,
          content: [
            `Score: Low (You are losing money by not beating inflation)`,
            `Real Interest Rate: Negative in current scenario (i.e Inflation > Fixed deposit rate)`,
            `Fact: Trailing 6 months Inflation – 6.8% (vs) 1 year FD –
              5.1% to 5.4% & 3 year FD – 5.4% to 5.7%`,
            `Conclusion: If Fixed deposit is your Furniture, then
              Inflation is the Termite !`,
          ],
        },
        {
          name: "Liquidity",
          color: "text-yellow-400",
          bgColor: "bg-yellow-50",
          score: 7,

          image: BitconImg,
          content: [
            `Score: High [Can be withdrawn anytime]`,
            `An Investor can do pre-mature withdrawal of a fixed deposit.`,
            `However, Pre-mature withdrawal penalty % is applied on the fixed
            deposit amount on withdrawal.`,
            `Such penalty ranges from 0.5%-1%. Certain banks charge 0% penalty.`,
            `Within T+1, the amount is received in the savings bank account.`,
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
            `Insurance - Fixed deposit + Savings account + Current account are insured to extent of Rs 5,00,000 (Rupees 5 lacs) per depositor by Deposit Insurance and Credit Guarantee Corporation (DICGC), a subsidiary of RBI.`,
            `This guarantee is provided in case Bank fails to pay the Fixed deposit money (Principal + Interest) & on liquidation of the bank.`,
            `Guaranteed Income - Interest rate on Fixed deposit is guaranteed & not subject to any volatility.`,
            `Credit Risk - Choose the Bank or NBFC for placing Fixed deposit based on the credit rating provided by CRISIL/ ICRA or CARE. Lower the rating, higher the risk of the Bank.`,
            `Conclusion: Safe only to extent of Rs 5lacs per bank. Guarantee of agreed fixed deposit return %`,
          ],
        },
        {
          name: "Taxation",
          color: "text-red-800",
          bgColor: "bg-red-50",
          score: 3,

          image: EthereumImg,
          content: [
            `Score: Low`,
            `Disadvantage #1: Interest income earned on Fixed deposit is taxed as per your income tax slab. (eg. If in 30% tax slab due to salary or other source of income, interest income on fixed deposit is also taxed at 30%).`,
            `Disadvanatge #2: No Indexation benefit is provided to income earned in fixed deposit. However in debt mutual funds
            income realized after 3 years is treated as long term capital gain with indexation`,
            `Advantage: 5 year Tax Saver Fixed deposits can be utilized as deduction in 80C of Income tax act to the extent of Rs 1,50,000.`,
            `Conclusion: Net return on fixed deposit is lower post tax, leading to even further negative interest rate (inflation > post tax fixed deposit return)`
          ],
        },
      ];
      break;
    }

    case "Gold": {
      content = [
        {
          name: "Return vs Inflation",
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

    case "Real Estate": {
      content = [
        {
          name: "Return vs Inflation",
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

    case "Guaranteed Income Plan": {
      content = [
        {
          name: "Return vs Inflation",
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

    default: {
      content = "";
    }
  }

  return content;
};

export default getInvFacts;
