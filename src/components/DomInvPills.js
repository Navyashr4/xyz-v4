import React from 'react'

function DomInvPills() {
  return (
        <section className="mt-6">
          <div className="container mx-auto px-6 lg:px-0">
            {/* <div className="flex flex-col gap-y-5 items-center"> */}
              <div className='mx-auto flex gap-x-2 flex-wrap gap-y-4 justify-center lg:max-w-[50%]'>
                <button
                    className="btn gap-x-6 text-sm lg:h-16 lg:text-base text-center
                    bg-darkblue border-2 border-white hover:bg-blue"
                    data-aos="fade-down"
                    data-aps-delay="700"
                    onClick={()=>(console.log("put function here"))}
                >
                    Bank Fixed Deposit
                </button>
                <button
                    className="btn gap-x-6 px-8 text-sm lg:h-16 lg:text-base text-center
                    bg-darkblue border-2 border-white hover:bg-blue"
                    data-aos="fade-down"
                    data-aps-delay="700"
                    onClick={()=>(console.log("put function here"))}
                >
                    Gold
                </button>
                <button
                    className="btn gap-x-6 text-sm lg:h-16 lg:text-base text-center 
                    bg-darkblue border-2 border-white hover:bg-blue"
                    data-aos="fade-down"
                    data-aps-delay="700"
                    onClick={()=>(console.log("put function here"))}
                >
                    Guaranteed Income Plan 
                </button>
                <button
                    className="btn gap-x-6 text-sm lg:h-16 lg:text-base text-center
                    bg-darkblue border-2 border-white hover:bg-blue"
                    data-aos="fade-down"
                    data-aps-delay="700"
                    onClick={()=>(console.log("put function here"))}
                >
                    Real Estate
                </button>
                <button
                    className="btn gap-x-6 px-8 text-sm lg:h-16 lg:text-base text-center
                    bg-darkblue border-2 border-white hover:bg-blue"
                    data-aos="fade-down"
                    data-aps-delay="700"
                    onClick={()=>(console.log("put function here"))}
                >
                    Public Provident Fund
                </button>
              </div>
            </div>
          {/* </div> */}
        </section>
  )
}

export default DomInvPills