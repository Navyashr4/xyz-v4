import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import borderColor from "../Functions/getBgBorderColors";
import "../index.css";
import "../carousel.css"



const InvCarousel = () => {
    // const parameterColor = (score) => {
    //     let color = "";
    //     switch(score){
    //         case score < 2 : {
    //             color = "text-green-400";
    //             break;
    //         }

    //         case score < 5 : {
    //             color = "text-green-400";
    //             break;
    //         }

    //         case score < 7 : {
    //             color = "text-green-400";
    //             break;
    //         }

    //         case score <= 10 : {
    //             color = "text-green-400";
    //             break;
    //         }

    //         default : color = "text-white"
    //     }

    //     return color;
    // }

    const samples = [
        {
            invName : "Bank Fixed Deposit",
            return : 2,
            liquidity : 10,
            safety : 8,
            taxation : 2,
        },
        {
            invName : "Gold",
            return : 4,
            liquidity : 6,
            safety : 6,
            taxation : 6
        },
        {
            invName : "Real Estate",
            return : 4,
            liquidity : 2,
            safety : 10,
            taxation : 6
        },
        {
            invName : "Guaranteed Income Plan",
            return : 2,
            liquidity : 5,
            safety : 8,
            taxation : 3
        },
        {
            invName : "Public Provident Fund",
            return : 4,
            liquidity : 2,
            safety : 10,
            taxation : 10
        },
        {
            invName : "ULIP",
            return : 6,
            liquidity : 2,
            safety : 6,
            taxation : 6
        }
    ]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1,
        },
      };

  return (
    <section
    data-aos='fade-up'
    data-aos-delay='400'>
        <div className="container mx-auto mt-10 bg-darkblue p-10">
            <Carousel 
            responsive={responsive} 
            autoPlay={false}
            showDots={true}
            renderDotsOutside={true}
            arrows={true}
            infinite={true}
            className="text-black">
                {samples.map((sample) => {
                    const returnColor = borderColor(sample.return).text;
                    const liquidityColor = borderColor(sample.liquidity).text;
                    const safetyColor = borderColor(sample.safety).text;
                    const taxationColor = borderColor(sample.taxation).text;

                    const totalScore = sample.return + sample.liquidity + sample.safety + sample.taxation;
                    const totalScoreColor = borderColor(Math.round(totalScore/4)).text;

                    return(
                    <div className="tracking-wide h-full mx-auto md:mx-4 border-2 rounded-2xl border-darkblue
                     text-white bg-white p-10 text-center flex flex-col justify-between max-w-[345px]">
                        <div className="text-xl font-semibold text-darkblue min-h-[56px]">{sample.invName}</div>
                        <div className={`flex justify-between mt-5 ${returnColor}`}>
                            <div>Return vs Inflation</div>
                            <div>{sample.return} / 10</div>
                        </div>
                        <div className={`flex justify-between mt-2 ${liquidityColor}`}>
                            <div>Liquidity</div>
                            <div>{sample.liquidity} / 10</div>
                        </div>
                        <div className={`flex justify-between mt-2 ${safetyColor}`}>
                            <div>Safety</div>
                            <div>{sample.safety} / 10</div>
                        </div>
                        <div className={`flex justify-between mt-2 mb-5 ${taxationColor}`}>
                            <div>Taxation</div>
                            <div>{sample.taxation} / 10</div>
                        </div>
                        <div className={`flex flex-col justify-between mt-2 mb-10 text-darkblue text-xl font-semibold`}>
                            <div>Total Score</div>
                            <div>{totalScore} / 40</div>
                        </div>
                        <button className="btnCards flex justify-center w-full text-base lg:max-w-[300px] border-[1.5px] bg-indigo-600
                         text-white border-indigo-600 hover:text-white hover:bg-indigo-800 hover:border-indigo-800">
                            Analyze
                        </button>
                        <button className="btnCards mt-5 flex justify-center w-full text-base lg:max-w-[300px] border-[1.5px] bg-white
                         text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white">
                            Learn 
                        </button>
                    </div>)
                })}        
            </Carousel>
        </div>
    </section>
  );
};

export default InvCarousel;

// bg-darkblue border-[2px] font-normal border-white w-full text-center mx-auto
// bgborder-[2px] font-normal bg-white border-darkblue text-darkblue w-full text-center mx-auto
// "mx-auto mt-6 btn text-centre bg-white text-blue border-[1.5px] border-gray-400 hover:border-none hover:text-white hover:bg-blue px-8 flex justify-center w-[60vw] max-w-[200px] lg:text-lg lg:w-[60vw] text-base lg:max-w-[300px]"
