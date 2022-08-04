import React, { useState } from "react";
import { currency } from "../data/data";
import { IoIosArrowForward } from "react-icons/io";
import BitconImg from "../assets/img/bitcon.png";
import EthereumImg from "../assets/img/ethereum.png";
import LitecoinImg from "../assets/img/litecoin.png";

const invFacts = (invType) => {
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



const GoodBadUgly = ({ invType }) => {
  const [itemName, setItemName] = useState("Bitcoin");
  const goodBadUglyContent = invFacts(invType);

  return (
    <section
      className="section  text-darkblue lg:pt-[320px] lg:-mt-[320px]">
      <div 
        className="container mx-auto"
        data-aos="fade-up"
        data-aos-offset="200">
        {/* Section Heading */}
        <div>
          <p
            className="section-title text-center mb-16 text-white md:text-3xl"

          >
            Facts about {invType.toLowerCase()} investments
          </p>
        </div>

        {/* items */}
        <div
          className="flex flex-col lg:flex-row gap-[45px]">
          {goodBadUglyContent && goodBadUglyContent.map((item, index) => {
            const { name, image, content } = item;
            return (
              <div
                onClick={() => setItemName(name)}
                className={`${
                  name === itemName ? `bg-violet text-white` : "bg-white"
                }
                w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}
                key={index}
              >
                <div className="flex flex-col justify-center items-center">
                  <img src={image} alt={name} className="mb-12" />
                  <div className="flex mb-4 items-center gap-x-2">
                    <p className={`text-[32px] font-bold`}>{name}</p>
                    {/* <p className='text-lg text-gray-400 font-normal'>{abbr}</p> */}
                  </div>
                  {content &&
                    item.content.map((content, idx) => {
                      return (
                        <div className="mb-6 px-4 lg:px-2 text-center" key={idx}>
                          {content}
                        </div>
                      );
                    })}
                  <button
                    className={`${
                      name === itemName
                        ? "text-white bg-blue hover:bg-blue-hover border-none pl-8 mt-4 pr-6 gap-x-3"
                        : "text-blue w-16 mt-4"
                    }  border-2 border-gray-300 rounded-full h-16 
                    flex justify-center items-center`}
                  >
                    {name === itemName && (
                      <div className="text-lg font-medium">Learn more </div>
                    )}

                    <IoIosArrowForward
                      className={`${
                        name === itemName ? "text-2xl" : "text-3xl"
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GoodBadUgly;
