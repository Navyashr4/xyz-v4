import React from "react";

function DomInvPills({ handleInvTypeApp }) {
  return (
    <section className="mt-6">
      <div
        data-aos="fade-down"
        data-aps-delay="700"
        className="container mx-auto px-6 lg:px-0"
      >
        {/* <div className="flex flex-col gap-y-5 items-center"> */}
        <div className="mx-auto flex gap-x-2 flex-wrap gap-y-4 justify-center max-w-[70%] lg:max-w-[600px]">
          <button
            className="btnCards flex justify-center text-base lg:max-w-[300px] border-[2px] bg-darkblue
                    text-white border-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
            // data-aos="fade-down"
            // data-aps-delay="700"
            onClick={() => handleInvTypeApp("Bank Fixed Deposit")}
          >
            Bank Fixed Deposit
          </button>
          <button
            className="btnCards flex justify-center text-base lg:max-w-[300px] border-[2px] bg-darkblue
            text-white border-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
            // className="btnCards mt-5 flex justify-center text-base lg:max-w-[300px] border-[1.5px] bg-white
            // text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white"
            // data-aos="fade-down"
            // data-aps-delay="700"
            onClick={() => handleInvTypeApp("Gold")}
          >
            Gold
          </button>
          <button
            className="btnCards flex justify-center text-base lg:max-w-[300px] border-[2px] bg-darkblue
                    text-white border-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
            // data-aos="fade-down"
            // data-aps-delay="700"
            onClick={() => handleInvTypeApp("Real Estate")}
          >
            Real Estate
          </button>

          <button
            className="btnCards flex justify-center text-base lg:max-w-[300px] border-[2px] bg-darkblue
                    text-white border-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
            // data-aos="fade-down"
            // data-aps-delay="700"
            onClick={() => handleInvTypeApp("Public Provident Fund")}
          >
            Public Provident Fund
          </button>
          <button
            className="btnCards flex justify-center text-base lg:max-w-[300px] border-[2px] bg-darkblue
           text-white border-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
            onClick={() => handleInvTypeApp("ULIP")}
          >
            ULIP
          </button>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default DomInvPills;

// import React from 'react'

// function DomInvPills({handleInvTypeApp}) {
//   return (
//         <section className="mt-6">
//           <div className="container mx-auto px-6 lg:px-0">
//             {/* <div className="flex flex-col gap-y-5 items-center"> */}
//               <div className='mx-auto flex gap-x-2 flex-wrap gap-y-4 justify-center lg:max-w-[40%]'>
//                 <button
//                     className="btn gap-x-6 text-sm lg:order-0 lg:h-16 lg:text-base text-center
//                     bg-darkblue border-2 border-white hover:bg-blue"
//                     data-aos="fade-down"
//                     data-aps-delay="700"
//                     onClick={()=>handleInvTypeApp("Bank Fixed Deposit")}
//                 >
//                     Bank Fixed Deposit
//                 </button>
//                 <button
//                     className="btn gap-x-6 px-6 lg:order-1 lg:px-10 text-sm lg:h-16 lg:text-base text-center
//                     bg-darkblue border-2 border-white hover:bg-blue"
//                     data-aos="fade-down"
//                     data-aps-delay="700"
//                     onClick={()=>handleInvTypeApp("Gold")}
//                 >
//                     Gold
//                 </button>
//                 <button
//                     className="order-4 lg:order-4 btn gap-x-6 px-6 lg:px-10 text-sm lg:h-16 lg:text-base text-center
//                     bg-darkblue border-2 border-white hover:bg-blue"
//                     data-aos="fade-down"
//                     data-aps-delay="700"
//                     onClick={()=>handleInvTypeApp("ULIP")}
//                 >
//                     ULIP
//                 </button>
//                 <button
//                     className="order-2 lg:order-2 btn gap-x-6 text-sm lg:h-16 lg:text-base text-center
//                     bg-darkblue border-2 border-white hover:bg-blue"
//                     data-aos="fade-down"
//                     data-aps-delay="700"
//                     onClick={()=>handleInvTypeApp("Real Estate")}
//                 >
//                     Real Estate
//                 </button>
//                 <button
//                     className="btn gap-x-6 px-8 lg:order-3 text-sm lg:h-16 lg:text-base text-center
//                     bg-darkblue border-2 border-white hover:bg-blue"
//                     data-aos="fade-down"
//                     data-aps-delay="700"
//                     onClick={()=>handleInvTypeApp("Public Provident Fund")}
//                 >
//                     Public Provident Fund
//                 </button>
//               </div>
//             </div>
//           {/* </div> */}
//         </section>
//   )
// }

// export default DomInvPills
