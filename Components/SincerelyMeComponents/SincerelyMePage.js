import React from "react"
import Image from "next/image"
const SincerelyMe = () => {
  return (
    <>
      <div className="bg-[#EFEFEF] merriweather-bold text-2xl">
        <div className="lg:flex lg:flex-row">
          <div className="flex flex-col lg:w-1/3 lg:pr-5 lg:text-start">
            <div className="text-left font-semibold p-5">
              <p>“In a democracy, we</p>
              <p>don’t need</p>
              <p>monologues</p>
              <p>We need dialogue”</p>
            </div>
          </div>

          <div className="flex flex-col lg:w-1/3  lg:text-center justify-center items-center">
            <h1 className=" lg:text-7xl  mb-4">Sincerely, Me</h1>
            <Image
              width={400}
              height={140}
              className="w-96"
              src="/sincere_images/Nettor_Kerala.png"
              alt="Nettor Kerala"
            />
          </div>
        </div>

        <div className="mx-auto p-5">
          <div className="border-t-8 border-red-900 lg:flex">
            <Image
              width={150}
              height={100}
              className="w-96 p-0"
              src="/sincere_images/si_1.png"
              alt="sincere_images"  
            />
            <h6 className="bg-[#9D9D9D] gap-0 text-white lg:p-6 p-10  lg:w-72 text-xl    ">
              “We need to strike a balance between sustainable development and
              environment…
            </h6>
            <div className="bg-sky-800 w-full">
              <h6 className="text-white text-xl p-12 lg:w-3/5 ">
                There is no space for the conventional kind of opposition for
                the sake of opposing something in this era. We need to have a
                consensus and continuity in developmental activities”
              </h6>
            </div>
            <Image
              width={280}
              height={100}
              className="hidden lg:block top-0 mt-44 p-5 bottom-0 right-0 absolute me-20 "
              src="/sincere_images/si_2.png"
              alt="sincere_images"  
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SincerelyMe
