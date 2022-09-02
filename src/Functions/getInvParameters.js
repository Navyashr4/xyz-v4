import BitconImg from "../assets/img/bitcon.png";
import EthereumImg from "../assets/img/ethereum.png";
import LitecoinImg from "../assets/img/litecoin.png";

const getInvFacts = (invType) => {
    let content = [];
    switch (invType) {
      case "Bank Fixed Deposit": {
        content = 
        [
          {
            name: "Return vs Inflation",
            color: "text-green-800",
            bgColor: "bg-green-50",
            score : 2,

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
            score : 7,

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
            score : 8,

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
            score : 3,

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
  
      case "Gold": {
        content = 
        [
          {
            name: "Return vs Inflation",
            color: "text-green-800",
            bgColor: "bg-green-50",
            score : 2,

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
            score : 5,

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
            score : 8,

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
            score : 3,

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
        content = 
        [
          {
            name: "Return vs Inflation",
            color: "text-green-800",
            bgColor: "bg-green-50",
            score : 2,

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
            score : 5,

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
            score : 8,

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
            score : 3,

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
        content = 
        [
          {
            name: "Return vs Inflation",
            color: "text-green-800",
            bgColor: "bg-green-50",
            score : 2,

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
            score : 5,

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
            score : 8,

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
            score : 3,

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
        content = ""
      }
    }
  
    return content;
  };

  export default getInvFacts;
  
  