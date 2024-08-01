"use client"
import React, { useEffect, memo } from "react"
import Image from "next/image"

const MeUnfiltered = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <div className="relative">
      <div className="bg-[url('/home_images/gallery-img-07.png')] bg-cover bg-center w-full h-full">
        <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10 container mx-auto">
          <h1 className="text-4xl font-bold mb-14 text-center text-white pt-10 ">
            Me, Unfiltered
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto pb-10 text-white">
            {/* First column (scrollable) */}
            <div className="flex justify-center items-center">
              <a
                className="twitter-timeline"
                data-width="350"
                data-height="500"
                href="https://twitter.com/vdsatheesan?ref_src=twsrc%5Etfw"
              >
                Tweets by vdsatheesan
              </a>
            </div>

            {/* Second column (Instagram logo) */}
            <div className="bg-[#C0C0C0] rounded-lg shadow-md flex items-center justify-center lg:mx-8">
              <Image
                src="/home_images/Instagram-Logo.wine.svg"
                alt="Instagram logo"
                className="w-40 h-40"
                width={100}
                height={100}
              />
            </div>

            {/* Third column */}
            <div className="">
              <div className="flex justify-center items-center">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVDSatheeshanParavur&tabs=timeline&width=350&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                  width="350"
                  height="490"
                  style={{ borderRadius: "17px", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeUnfiltered
