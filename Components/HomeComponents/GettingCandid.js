"use client"
import React, { useState } from "react"
import Image from "next/image"

const VideoPlayer = () => {
  const [currentVideo, setCurrentVideo] = useState({
    url: "https://www.youtube.com/embed/SLoAonybiFc",
    title: "Episode 1:",
    title2:
      "Dialogue with Sri. TM Thomas Issac, Finance Minister, Kerala & VD Satheesan, MLA- Full Video",
    description:
      "In conversation with TM Thomas Isaac, Former Finance Minister, Kerala",
  })

  const videos = [
    {
      url: "https://www.youtube.com/embed/SLoAonybiFc",
      title: "Episode 1:",
      title2:
        "Dialogue with Sri. TM Thomas Issac, Finance Minister, Kerala & VD Satheesan, MLA- Full Video",
      description:
        "In conversation with TM Thomas Isaac, Former Finance Minister, Kerala",
    },
    {
      url: "https://www.youtube.com/embed/IvWmxZGs30o",
      title: "Episode 2:",
      title2:
        "COVID-19 & HEALTHCARE. Dr.M.V Pillai, World Famous Oncologist discusses with VD Satheesan MLA",
      description: "In conversation with Dr MV Pillai, World Famous Oncologist",
    },
    {
      url: "https://www.youtube.com/embed/IlHwsHBdnS0",
      title: "Episode 3:",
      title2:
        "COVID - 19, EMPLOYMENT & DIFFERENTLY ABLED. Dr.G.Vijayaraghavan with VD Satheesan MLA- Episode 3",
      description:
        "VD In conversation with Dr G.Vijayaraghavan, Former Planning Board Member & Former CEO, Technopark Trivandrum",
    },
    {
      url: "https://www.youtube.com/embed/oYmXSL8ZGhk",
      title: "Episode 4:",
      title2:
        "Sri.Jose Dominic, CEO, CGH Earth Group with VD Satheesan MLA about Hospitality Industry",
      description:
        "In conversation with Sri. Jose Dominic, CEO, CGH Earth Group",
    },
    {
      url: "https://www.youtube.com/embed/mZ5Jac2pDXU",
      title: "Episode 5:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description: "In conversation with Dr.CJ John, renowned Psychiatrist",
    },
    {
      url: "https://www.youtube.com/embed/bG8gQdgGF5w",
      title: "Episode 6:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with Sri.Kochousepp Chittilappillly, Chairman Emeritus, V Guard",
    },
    {
      url: "https://www.youtube.com/embed/EQPylyZtQ2U",
      title: "Episode 7:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with Dr.K.N Raghavan, Executive Director Rubber Board and Former Customs Commissioner",
    },
    {
      url: "https://www.youtube.com/embed/clw7VQN0Hco",
      title: "Episode 8:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with Dr.Madhusoodanan, River Management expert",
    },
    {
      url: "https://www.youtube.com/embed/ijJAABxfYKc",
      title: "Episode 9:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with Mr.Jose Mathew Kochukudy, planter from Thodupuzha",
    },
    {
      url: "https://www.youtube.com/embed/qayu86AHqu0",
      title: "Episode 10:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description: "In conversation with Viju B, Journalist and Author",
    },
    {
      url: "https://www.youtube.com/embed/1gEmcgz7PXM",
      title: "Episode 11:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description: "  In conversation with Ranjith, Film Director",
    },
    {
      url: "https://www.youtube.com/embed/Xlo4YE8MB5o",
      title: "Episode 12:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description: "  In conversation with UK Kumaran, renowned Writer",
    },
    {
      url: "https://www.youtube.com/embed/GGkyo4X2KQ4",
      title: "Episode 13:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with Dr.Jancy James, former M G University Vice Chancellor",
    },
    {
      url: "https://www.youtube.com/embed/ifSkvPRbjns",
      title: "Episode 14:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with Venkitesh Ramakrishnan, Frontline Associate Editor",
    },
    {
      url: "https://www.youtube.com/embed/oT0GJU86oTU",
      title: "Episode 15:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "  In conversation with Padma Shri Dr.Jose Chacko Periappuram, renowned Cardiac Surgeon",
    },
    {
      url: "https://www.youtube.com/embed/bJNygFEIGtc",
      title: "Episode 16:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        " In conversation with Mrinal Das Vengalat, famous Food Vlogger and Restaurant Consultant",
    },
    {
      url: "https://www.youtube.com/embed/fOiGsSua4WE",
      title: "Episode 17:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with MD Santhosh George, Traveller and Safari TV Founder",
    },
    {
      url: "https://www.youtube.com/embed/uQ-Uqmk5zHc",
      title: "Episode 18:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with Shri.Sethu, Ex CEO & Chairman of South Indian Bank and famous writer",
    },
    {
      url: "https://www.youtube.com/embed/Ay6yO33IyO8",
      title: "Episode 19:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with Mr.Navas Meeran, young entrepreneur and Managing Director of Eastern Condiments Private Limited",
    },
    {
      url: "https://www.youtube.com/embed/je-PiLqc9pQ",
      title: "Episode 20:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation Smt.Sheeba Ameer, Philanthropist, Social Worker and Founder of Solace.",
    },
    {
      url: "https://www.youtube.com/embed/_zqv7E6oPgE",
      title: "Episode 21:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        " In conversation with Baiju N Nair, Automobile-travel Journalist",
    },
    {
      url: "https://www.youtube.com/embed/y9_iR17BPz0",
      title: "Episode 22:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with Fr.Davis Chiramel, Founder of Kidney Federation of India",
    },
    {
      url: "https://www.youtube.com/embed/FDOi5y6DQKc",
      title: "Episode 23:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with Padma Shri Peruvanam Kuttan Marar, famous Chenda Artist",
    },
    {
      url: "https://www.youtube.com/embed/zBwFRgL8Jpc",
      title: "Episode 24:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with M. K. Sanu – Writer, Critic, retired Professor, Biographer, Journalist, Orator, Social and Human Rights Activist",
    },
    {
      url: "https://www.youtube.com/embed/tuSUVoTHKyw",
      title: "Episode 25:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with Jacob Punnoose, Executive Director of Pushpagiri Medical College, Secretary of the Pastoral Council in the Major Archieparchy of Trivandrum and former Director General of Police of Kerala",
    },
    {
      url: "https://www.youtube.com/embed/YXNN4-gQf3g",
      title: "Episode 26:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with S.Adikesavan, Chief General Manager of SBI and popular Columnist",
    },
    {
      url: "https://www.youtube.com/embed/OQLPE7x7NbI",
      title: "Episode 27:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "The facts and figures behind agricultural strike all over India",
    },
    {
      url: "https://www.youtube.com/embed/JhVHB2COluU",
      title: "Episode 28:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description: "The facts behind the PUNERJENI project in Paravur",
    },
    {
      url: "https://www.youtube.com/embed/3dUly_DWQ24",
      title: "Episode 29:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        " In-depth discussion on the real apprehensions about the labour code",
    },
    {
      url: "https://www.youtube.com/embed/g3sW8h6vrLI",
      title: "Episode 30:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        " In conversation with Mr.Tony Thomas – Senior advisor,Boston Consulting & former CIO,Nissan",
    },
    {
      url: "https://www.youtube.com/embed/SFyP9iQj_Ks",
      title: "Episode 31:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        " In conversation with Venu Rajamoni, former Ambassador of India, Netherlands",
    },
    {
      url: "https://www.youtube.com/embed/00jrWTc6qj8",
      title: "Episode 32:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        " Reproduction of the Special Budget Programme by Mathrubhumi news telecasted on 14.01.2021",
    },
    {
      url: "https://www.youtube.com/embed/K6yN-XpDo14",
      title: "Episode 33:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        " In conversation with P. K. Rajasekharan, Kerala Sahitya Akademi Award winner",
    },
    {
      url: "https://www.youtube.com/embed/WFQCcOBkFMo",
      title: "Episode 34:",
      title2: "Dialogue with Dr. CJ John, Psychiatrist and VD Satheesan, MLA",
      description:
        "In conversation with Kunhikrishnan K, retired Dy. Director General Doordarshan",
    },
  ]


  const handleVideoClick = (video) => {
    // Update the URL with autoplay parameter
    const updatedVideo = {
      ...video,
      url: `${video.url}?autoplay=1`,
    }
    setCurrentVideo(updatedVideo)
  }

  return (
    <>
      <div className="bg-[url('/home_images/about_satheesan_background.png')] w-full h-full pb-10">
        <p className="text-4xl text-[#035C96] text-center font-semibold pt-10 ">
        Getting Candid
        </p>
        <p className="text-xl text-center font-semibold pt-4">
          ‘Dialogue with VDS’ is a series of weekly in-depth interviews with
          experts from various fields
        </p>
    
      <div className="container mx-auto p-4 ">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Main video player */}
          <div className="w-full lg:w-2/3 mt-7 ">
            <div className="aspect-w-16  aspect-h-9 hidden sm:block  ">
              <iframe
                width="900"
                height="500"
                src={currentVideo.url}
                title="Main Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="aspect-w-16  aspect-h-9 lg:hidden  ">
              <iframe
                width="360"
                height="300"
                src={currentVideo.url}
                title="Main Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="relative overflow-hidden w-full aspect-w-16 aspect-h-9">
              {/* <!-- Responsive iframe --> */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src={currentVideo.url}
                title="Main Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-semibold">{currentVideo.title}</p>
              <p className="text-lg mt-2">{currentVideo.description}</p>
            </div>
            <div className="mt-5">
              <a
                href="https://www.youtube.com/c/dialoguewithvds/videos"
                target="_blank"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Subscribe
              </a>
            </div>
          </div>

          {/* Playlist */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-xl bg-red-700 me-4 mt-7 text-white  text-center">
              Playlist
            </h2>
            <div className="flex flex-col gap-2 h-[100vh] p-3   overflow-y-auto">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="flex-1 cursor-pointer "
                  onClick={() => handleVideoClick(video)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="lg:w-200 lg:h-110">
                      <img
                        src={`https://img.youtube.com/vi/${
                          video.url.split("/")[4]
                        }/0.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default VideoPlayer
