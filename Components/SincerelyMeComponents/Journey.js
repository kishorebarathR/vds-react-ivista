import React from "react"
import Image from "next/image"

const Journey = () => {
  return (
    <>
      <div className="bg-[#EFEFEF] lg:p-5 lg:flex merriweather-regular">
        {/* Left Side Content Start */}
        <div className="border-r-2 border-slate-500 text-xl">
          <Image
            width={80}
            height={50}
            className=" flex justify-center"
            src="/sincere_images/quote_up.svg"
            alt="sincere_images"
          />
          <h6 className=" font-bold lg:w-32 mt-4 lg:p-0 p-3">
            “As a Leader of Opposition, the diligent research and homework that
            he puts into all of the topics that he talks about is commendable”
          </h6>
          <h6 className=" font-bold lg:w-32 mt-4 lg:p-0 p-3">
            – M.B. Rajesh, Speaker of Kerala
          </h6>
          <div className="flex-col">
            <div className="flex justify-end ">
              <Image
                width={100}
                height={50}
                className="p-3"
                src="/sincere_images/quote_down.svg"
                alt="sincere_images"
              />
            </div>
            <div className="justify-center flex">
              <Image
                className=""
                src="/sincere_images/si_3.png"
                width={100}
                height={50}
                alt="sincere_images"
              />
            </div>
            <Image
              width={80}
              height={50}
              className="mt-4 mb-4"
              src="/sincere_images/quote_up.svg"
              alt="sincere_images"
            />
          </div>

          <h6 className=" font-bold lg:w-32 lg:p-0 p-3">
            Currently, I am honoured to hold important positions such as the
            Leader of Opposition, Kerala Legislative Assembly, and the UDF
            Chairman, Kerala. I am also a member of the Political Affairs
            Committee, Congress, Kerala.
          </h6>
          <div className="flex-col">
            <div className="flex justify-end ">
              <Image
                width={100}
                height={50}
                className="p-3"
                src="/sincere_images/quote_down.svg"
                alt="sincere_images"
              />
            </div>
            <div className="justify-center flex">
              <Image
                width={100}
                height={50}
                className=""
                src="/sincere_images/si_4.png"
                alt="sincere_images"
              />
            </div>

            <div className="lg:bg-[url('/sincere_images/left_side_img.svg')] w-full lg:h-[130vh] bg-cover mt-5 me-2 -mx-2">
              <div className="text-left  lg:pt-24 ms-5 ">
                <Image
                  width={80}
                  height={50}
                  className="mt-10 "
                  src="/sincere_images/quote_up.svg"
                  alt="sincere_images"
                />
                {/* <!--  Desktop view --> */}
                <p className=" text-white lg:w-32 hidden lg:block text-xl ">
                  “I believe that serving the people is not just a
                  responsibility, but a privilege, and I will continue to work
                  hard to fulfill this purpose.”
                </p>

                {/* <!-- Mobile view --> */}
                <p className="block lg:hidden bg-red-800 lg:w-32 p-5 text-white">
                  “I believe that serving the people is not just a
                  responsibility, but a privilege, and I will continue to work
                  hard to fulfill this purpose.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Left Side Content End */}

        <div className="lg:flex-1  ">
          <h3 className="text-6xl p-4 font-bold">
            The journey that made me who I am today
          </h3>
          <h6 className="text-3xl p-4 font-medium">
            A brief history of my life
          </h6>

          <div className="lg:flex w-full text-xl">
            <p
              className="p-4 lg:w-4/6"
              data-aos="fade-in"
              data-aos-duration="800"
            >
              <span className="font-bold">Nettoor:</span> I was born on May 31,
              1964 to my parents, K Damodara Menon and Smt. V Vilasini Amma in
              Nettoor, Eranakulam. Growing up in a middle-class household as one
              of six siblings, we had a humble upbringing. As a student, I was
              an avid reader and I enjoyed participating in many debate and
              speech competitions. During my days at Panangad High School, I
              also served as the school leader. After receiving my Bachelor’s
              degree from Sacred Hearts College in Thevara, I went on to do my
              Master’s in Social Work (MSW) from Rajagiri College of Social
              Sciences.
            </p>
            <div
              className="border-b-8 border-[#525252] lg:flex "
              data-aos="fade-in"
            >
              <div className="bg-[#818181] text-white p-5 W-11 flex justify-center items-center">
                <p className="lg:w-52">
                  With my wife, Lakshmipriya and my daughter, Unnimaya, my
                  biggest supporters and honest critics.
                </p>
              </div>
              <div className="lg:flex lg:w-96">
                <Image
                  width={600}
                  height={300}
                  src="/sincere_images/family.png"
                  alt="sincere_images"
                />
              </div>
            </div>
          </div>
          <div className="lg:flex p-3 border-4 mt-5 border-gray-500 lg:ms-4 text-xl">
            <Image
              width={600}
              height={300}
              src="/sincere_images/thiruvanadhapuram-vds-speech.png"
              alt="sincere_images"
              data-aos="fade-in"
              data-aos-duration="800"
            />
            <div
              className="lg:p-5 p-2"
              data-aos="fade-in"
              data-aos-duration="800"
            >
              <p>
                <b>Thiruvananthapuram:</b> I stepped into students’ politics
                during my undergraduate days, and my aspiration to keep serving
                the people led me to take up law for my higher education. I did
                my LLB degree from Kerala Law Academy Law College and my LLM
                from the Government Law College in Thiruvananthapuram. After my
                post-graduation, I briefly practised law in the Kerala High
                Court before beginning my political career.
              </p>
            </div>
          </div>

          {/* Work So Far Start */}
          <h3 className="text-5xl ms-4 mt-8 font-semibold px-1">
            My Work So Far
          </h3>
          <div className="lg:flex p-4 gap-2 text-xl">
            <p
              className=" lg:border-r-2 border-black mb-9 lg:w-6/12 px-1"
              data-aos="fade-in"
              data-aos-duration="800"
            >
              As a politician, I have always been passionate about serving the
              people, and I have been fortunate to hold various positions that
              have allowed me to do so. In my previous organisational positions,
              I served as an AICC Secretary and a member of the Committee on
              Economic Resolution at the 84th Plenary Session. I also had the
              privilege of serving as the Chairman of the Screening Committee
              for the Orissa Assembly Election and as the Whip for the Congress
              Legislative Party in Kerala. Furthermore, I served as the Vice
              President of the Kerala Pradesh Congress Committee.
            </p>
            <p
              className="px-1 lg:w-6/12"
              data-aos="fade-in"
              data-aos-duration="800 "
            >
              As a five-time Member of the Kerala Legislative Assembly, my
              unwavering commitment has always been to represent the people.
              During my tenure, I have served as a valuable member of the UDF
              Higher Affairs Committee in Kerala, as well as the esteemed
              Chairman of both the Public Accounts Committee and the Assembly
              Estimates Committee. Through these roles, I have consistently
              worked towards the betterment of my community, advocating for the
              needs and concerns of my constituents.
            </p>
          </div>
          {/* Work So Far End */}

          {/* My Interests Start */}
          <h3 className="text-5xl ms-4  font-semibold ">My Interests</h3>
          <p
            className="p-4 lg:w-9/12 text-xl "
            data-aos="fade-in"
            data-aos-duration="800"
          >
            Ever since I was a child, I have been captivated by a wide range of
            interests that have shaped my life. My love for reading was the
            first to blossom, and as I grew older, my curiosity was piqued by
            history, which became a cherished pursuit during my college days.
            Being a nature lover, I have always been drawn to the wilderness,
            and whenever I get the chance, I go on treks through the woods. The
            serenity of nature has a profound effect on me, and I am constantly
            fascinated by the different aspects of nature. This appreciation for
            nature has also ignited a deep passion for environmental
            conservation, driving me to actively contribute towards protecting
            our natural world through my services.
          </p>
          <div>
            <Image
              data-aos="zoom-in-right"
              width={700}
              height={400}
              className="w-full"
              alt="sincere_images"
              src="/sincere_images/bg_gray.svg"
            />
            <div className="relative">
              <p className="bg-[#173A5B] lg:ms-4 text-white p-9 text-xl">
                In addition to my work in politics, I have also served as
                president of various trade unions, including:
              </p>
              <Image
                width={300}
                height={200}
                className="lg:absolute right-0 bottom-0  w-80 h-96"
                src="/sincere_images/vds_casual.png"
                alt="VDS Casual"
              />
            </div>
          </div>

          <div className="lg:flex p-3 border-b-2 ms-4 border-black text-xl">
            <h6>
              <ul className="list-disc p-4" data-aos="fade-in">
                <li>Cochin Refineries Employees Association</li>
                <li>Premier Tyres Workers Union </li>
                <li>TCC Employees Union</li>
                <li>IRE Workers Union</li>
                <li>Hindalco Workers Union</li>
                <li>Carborandom Universal Employees Union Koratty</li>
                <li>Ernakulam Dist. Co-Op Bank Employees Union</li>
                <li>
                  Kerala State Co-Operative Rubber Marketing Federation
                  Employees Congress
                </li>
                <li>Masoneilan Employees Union, INTUC </li>
                <li> TELK Employees Union</li>
              </ul>
            </h6>
            <div className="lg:ms-20 p-4">
              <h6>
                <ul className="list-disc" data-aos="fade-in">
                  <li>HMT Employees Union, Kalamassery </li>
                  <li> KMML Employees Union, Kollam</li>
                  <li> CIAL Officers Association, Nedumbassery</li>
                  <li>Employees Union Binani Zinc Limited</li>
                  <li>Hindustan Latex, Employees Union, Trivandrum</li>
                  <li>Backward Development Corporation Employees Union</li>
                  <li>CWRDM, Employees Union, Kozhikode </li>
                  <li>Sree Padhmanabha Temple Employees Union</li>
                  <li>INTUC, Trivandrum</li>
                  <li>
                    NITA Gelatin India Limited, Employees Union, Chalakudy{" "}
                  </li>
                  <li>Kerala State Housing Board Employees Union</li>
                </ul>
              </h6>
            </div>
          </div>
          {/* My Interests End */}

          {/* Awards and  Recognitions Start*/}
          <div>
            <h3 className="text-5xl mt-5 p-4 font-semibold">
              Awards and Recognitions
            </h3>
          </div>

          <div className="lg:ms-4">
            <div className="lg:border-4 border-[#173A5B] mx-auto m-0 ">
              <div className="relative bg-[#173A5B] text-xl">
                <p
                  className=" text-white lg:p-24 p-9 lg:w-9/12 "
                  data-aos="fade-in"
                >
                  My passion for serving the people as a politician has been
                  unwavering for the last 20 years. Throughout this time, I have
                  been dedicated to making sure that the voices of the people
                  are heard, and I feel grateful to have received recognition
                  for my work from various sources.
                </p>
                <Image
                  width={350}
                  height={100}
                  className="absolute right-0 bottom-0 h-96 hidden lg:block me-3"
                  src="/sincere_images/award_and_record_.png"
                  alt="sincere_images"
                />
              </div>
              <div
                className="lg:flex lg:p-3 lg:ms-10 text-xl"
                data-aos="fade-in"
              >
                <h6>
                  <ul className="list-disc lg:p-4 ms-8">
                    <li> AA Rahim Memorial Award for Best Parliamentarian</li>
                    <li>
                      Global Malayali Council, Singapore Chapter – Best MLA
                    </li>
                    <li>
                      Cherian J Kappan Memorial Award for Best MLA in the state
                      from the Rajiv Gandhi
                    </li>
                    <li>National Centre for Humanitarian Studies, Palai</li>
                    <li> Vasthavam Daily – Best Parliamentarian Award </li>
                    <li>
                      FOKANA – Outstanding Performance in the Legislative
                      Assembly
                    </li>
                    <li>
                      Rajeev Gandhi foundation, Kollam – Best Political Leader
                      of the State
                    </li>
                    <li>A Pachan Foundation, Kollam – Yuva Parliamentarian </li>
                    <li>
                      KS Narayanan Namboothiri Foundation – Best MLA of the
                      State
                    </li>
                    <li>
                      Shri N Sundaran Nadar National Foundation – Best Political
                      Leader award
                    </li>
                    <li>TM Jacob Foundation – Best Parliamentarian Award </li>
                    <li>
                      Rajeev Gandhi Study Centre, Malappuram – Rajiv Gandhi
                      Memorial Award 2013
                    </li>
                    <li>
                      VC Padmanabhan Memorial Award for achieving excellence in
                      public governance
                    </li>
                    <li> Reporter TV Jananayakan Award – Best MLA of State</li>
                    <li>
                      MP Gangadaran Foundation Award – Best MLA 2013 of State
                    </li>
                    <li>
                      KMA Latheef Memorial Award for excellence in the field of
                      Public service
                    </li>
                    <li>
                      Sreenarayana Sahithya Parishath Award – Best Political
                      Reformer
                    </li>
                    <li>S Sujanapal Memorial Award </li>
                    <li>CC Ismail Sahib Memorial Award – Best MLA</li>
                    <li>
                      PT Madhusoodanakurup Memorial Award – Best Politician
                    </li>
                    <li>
                      PR Francis Memorial Award for excellence in the field of
                      Public service
                    </li>
                  </ul>
                </h6>
              </div>
            </div>
          </div>

          {/* Awards and  Recognitions End */}
        </div>
      </div>


      
    </>
  )
}

export default Journey
