"use client"
import React, { useState } from "react"
import Image from "next/image"

const Homepage = () => {

  
  const [isVideoVisible, setIsVideoVisible] = useState(false)

  const handleImageClick = () => {
    setIsVideoVisible(true)
  }
  return (
    <div>
      <div
        className="bg-[url('/home_images/home_banner2.png')] mx-auto w-full h-full relative bg-cover bg-center "
        onClick={handleImageClick}
      >
        {!isVideoVisible ? (
          <div className="relative">
            <Image
              src="/home_images/home_banner.png "
              alt="Banner"
              className="w-full h-auto cursor-pointer bg-no-repeat "
              width={1000}
              height={1000}
              onClick={handleImageClick}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/home_images/play_button.svg"
                alt="Play Button"
                className="w-16 h-16 cursor-pointer bg-white rounded-full"
                width={1000}
                height={1000}
                onClick={handleImageClick}
              />
            </div>
          </div>
        ) : (
          <iframe
            width="100%"
            height="700"
            src="https://www.youtube.com/embed/1DSQ3D0jpaE?autoplay=1"
            title="VDS Hero Banner V2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="  bg-[url('/home_images/about_satheesan_background.png')] mx-auto  w-full h-full">
        <div className="grid lg:grid-cols-2 grid-flow-row gap-4 p-5 lg:mx-5">
          <div className="flex justify-center mt-10 ">
            <Image
              width={400}
              height={350}
              src="/home_images/vds_video_img.png"
              className="h-full  w-[89vh]"
              alt=""
            />
          </div>

          <div className=" mt-10 border-2  border-[#033B5F]  text-center flex justify-center items-center lg:me-10 ">
            <div>
              <h6 className="text-[#035C96] text-[34px] font-semibold merriweather-bold">
                Hello, I am
              </h6>
              <h6 className="text-[#035C96] text-[34px] font-semibold merriweather-bold">
                VD Satheesan…
              </h6>
              <button className="border lg:border-4 border-sky-800 p-2 items-center justify-center bg-white rounded-sm text-[#035C96] text-xl  mt-5 w-40 mb-5 merriweather-regular">
                Know Me
              </button>
            </div>
          </div>
        </div>

        <div className="lg:flex p-4 lg:mx-8">
          {/* <!-- First column --> */}
          <div className="lg:w-[20%] bg-blue-900 text-white p-6 flex flex-col justify-center items-center ">
            <h2 className="text-4xl font-bold text-center">Catch Up with Me</h2>
          </div>

          {/* <!-- Second column --> */}
          <div className="lg:w-[20%] px-2 p-5 ">
            <h3 className="bg-red-800 text-white p-2 mb-2 text-center">
              Highlights of the Week
            </h3>
            <div className="relative ">
              <Image
                width={500}
                height={550}
                src="/home_images/vds_video_img_high.png"
                alt="Video thumbnail"
                className="w-full "
              />
              <button className="absolute inset-0 m-auto w-12 h-12 flex items-center justify-center"></button>
            </div>
          </div>

          {/* <!-- Third column --> */}
          <div className="lg:w-[55%] px-2">
            <div className="w-full h-full bg-[#233876]"></div>
          </div>

          {/* <!-- Fourth column --> */}
          <div className="lg:w-[5%] px-2">
            <div className="w-full h-full bg-[#233876]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
