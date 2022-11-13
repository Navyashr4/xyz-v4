import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import borderColor from "../Functions/getBgBorderColors";
import "../index.css";
import "../carousel.css"


const ButtonGroup = ({ invType, next, previous, goToSlide, ...rest }) => {
    // console.log("received by button group", invType)
    // const {
    //   carouselState: { currentSlide }
    // } = rest;

    useEffect(() => {

        if(invType == "Bank Fixed Deposit") goToSlide(0);
        else if(invType == "Gold") goToSlide(1);
        else if(invType == "Real Estate") goToSlide(2);
        else if(invType == "ULIP") goToSlide(3);
        else if(invType == "Public Provident Fund") goToSlide(4);
        else goToSlide(0);
    }, [invType])

    return (
      <div >
      </div>
    );
  };


const InvCarousel = ({ slideToFirst, handleSlideToFirst, handleInvTypeApp, invType, calculator, scrollToCalculator, learnMoreSection, scrollToLearnMoreSection}) => {
    // const [slideToFirst, setSlideToFirst] = useState(true);

    const samples = [
        {
            invName : "Bank Fixed Deposit",
            id: 1,
            return : 2,
            liquidity : 10,
            safety : 8,
            taxation : 2,
        },
        {
            invName : "Gold",
            id: 2,
            return : 4,
            liquidity : 6,
            safety : 6,
            taxation : 6
        },
        {
            invName : "Real Estate",
            id: 3,
            return : 4,
            liquidity : 2,
            safety : 10,
            taxation : 6
        },
        // {
        //     invName : "Guaranteed Income Plan",
        //     return : 2,
        //     liquidity : 5,
        //     safety : 8,
        //     taxation : 3
        // },
        {
            invName : "ULIP",
            id: 4,
            return : 6,
            liquidity : 2,
            safety : 6,
            taxation : 6
        },
        {
            invName : "Public Provident Fund",
            id: 5,
            return : 4,
            liquidity : 2,
            safety : 10,
            taxation : 10
        },
    ]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1215 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1215, min: 1080 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 1080, min: 0 },
          items: 1,
        },
      };
    
    
    const handleCarouselSelection = (invTypeName) => {
        handleSlideToFirst(false);
        handleInvTypeApp(invTypeName);

    }

    console.log(slideToFirst);


  return (
    <section
    data-aos='fade-up'> 
        <div className="container mx-auto mt-10 bg-darkblue p-10">
            <Carousel 
            responsive={responsive} 
            // autoPlay={false}
            showDots={true}
            renderDotsOutside={true}
            arrows={true}
            infinite={window.innerWidth >=1215 ? true : false}
            autoPlay={false}
            renderButtonGroupOutside
            customButtonGroup={slideToFirst && <ButtonGroup invType={invType}/>}
            className="text-black">
                {samples.map((sample) => {
                    const returnColor = borderColor(sample.return).text;
                    const liquidityColor = borderColor(sample.liquidity).text;
                    const safetyColor = borderColor(sample.safety).text;
                    const taxationColor = borderColor(sample.taxation).text;

                    const totalScore = sample.return + sample.liquidity + sample.safety + sample.taxation;
                    const totalScoreColor = borderColor(Math.round(totalScore/4)).text;

                    return(
                    <div 
                    key={sample.id} 
                    className={sample.invName === invType ?
`                    tracking-wide mx-auto md:min-mx-4 border-2 rounded-2xl border-white
                    text-white bg-white p-10 text-center flex flex-col justify-between max-w-[345px] cursor-pointer` :
                    `tracking-wide h-full mx-auto md:min-mx-4 border-2 rounded-2xl border-indigo-600
                    text-white bg-darkblue p-10 text-center flex flex-col justify-between max-w-[345px] cursor-pointer`}
                    onClick={()=>handleCarouselSelection(sample.invName)}>
                        <div className={sample.invName === invType 
                            ?`text-xl font-semibold text-darkblue min-h-[56px]`
                            :`text-xl font-semibold text-white min-h-[56px]`}>{sample.invName}</div>
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
                        <div className={sample.invName === invType
                            ?`flex flex-col justify-between mt-2 mb-10 text-darkblue text-xl font-semibold`
                            :`flex flex-col justify-between mt-2 mb-10 text-white text-xl font-semibold`}>
                            <div>Total Score</div>
                            <div>{totalScore} / 40</div>
                        </div>
                        <button className="btnCards flex justify-center w-full text-base lg:max-w-[300px] border-[1.5px] bg-indigo-600
                         text-white border-indigo-600 hover:text-white hover:bg-indigo-800 hover:border-indigo-800"
                         onClick={() => scrollToCalculator(calculator)}>
                            Return Calculator
                        </button>
                        <button 
                        className="btnCards mt-5 flex justify-center w-full text-base lg:max-w-[300px] border-[1.5px] bg-white
                         text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white"
                         onClick={()=>scrollToLearnMoreSection(learnMoreSection)}>
                            Score Analysis
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
