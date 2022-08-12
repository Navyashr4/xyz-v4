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
            name: "The Good",
            color: "text-green-800",
            bgColor: "bg-green-50",
            image: LitecoinImg,
            content: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            ],
          },
          {
            name: "The Bad",
            color: "text-yellow-400",
            bgColor: "bg-yellow-50",
            image: BitconImg,
            content: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            ],
          },
          {
            name: "The Ugly",
            color: "text-red-800",
            bgColor: "bg-red-50",
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
            name: "The Good",
            color: "text-green-800",
            bgColor: "bg-green-50",
            image: LitecoinImg,
            content: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            ],
          },
          {
            name: "The Bad",
            color: "text-yellow-400",
            bgColor: "bg-yellow-50",
            image: BitconImg,
            content: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            ],
          },
          {
            name: "The Ugly",
            color: "text-red-800",
            bgColor: "bg-red-50",
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
            name: "The Good",
            color: "text-green-800",
            bgColor: "bg-green-50",
            image: LitecoinImg,
            content: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            ],
          },
          {
            name: "The Bad",
            color: "text-yellow-400",
            bgColor: "bg-yellow-50",
            image: BitconImg,
            content: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            ],
          },
          {
            name: "The Ugly",
            color: "text-red-800",
            bgColor: "bg-red-50",
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
            name: "The Good",
            color: "text-green-800",
            bgColor: "bg-green-50",
            image: LitecoinImg,
            content: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            ],
          },
          {
            name: "The Bad",
            color: "text-yellow-400",
            bgColor: "bg-yellow-50",
            image: BitconImg,
            content: [
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ipsam et ea autem. ",
            ],
          },
          {
            name: "The Ugly",
            color: "text-red-800",
            bgColor: "bg-red-50",
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
  
  