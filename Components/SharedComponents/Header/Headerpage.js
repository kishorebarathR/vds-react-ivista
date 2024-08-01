"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const Headerpage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleLinkClick = () => {
    setDrawerOpen(false)
  }

  const handleCloseButtonClick = () => {
    setDrawerOpen(false)
  }

  return (
    <div>
      <nav className="bg-[#033B5F] drop-shadow-lg">
        <div className="max-w-screen-xl flex lg:flex-wrap items-center justify-between p-0">
          <div className="lg:flex justify-between">
            <div className="">
              <Link href="/" passHref>
                <div className="lg:flex items-center">
                  <Image
                    width={250}
                    height={250}
                    src="/home_images/vds-main.png"
                    className="p-0 h-32"
                    alt="vds"
                  />
                  <div className="self-center ml-4">
                    <h6 className="text-white text-4xl font-bold mb-1 lg:text-center merriweather-regular">
                      V D Satheesan
                    </h6>
                    <p className="text-white text-[23px] merriweather-light">
                      For the people
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex lg:grid lg:grid-col lg:py-0 lg:grid-flow-row justify-center items-center lg:w-[50%] ">
              <p className="text-white lg:m-5 ms-2 font-mono  text-[20px]">
                “People respect us not for our ability to make laws, but because
                of our ability to undo the injustice done to our people.”
              </p>
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed top-7 right-5">
        <button
          className="px-5 py-2.5 mb-2 mt-2"
          type="button"
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-label="Toggle Menu"
        >
          <Image className="h-auto w-full" src="/home_images/menu.svg" alt="Menu" width={100} height={100}  />
        </button>
        
      </div>

      <div
        id="drawer-right-example"
        className={`bg-[#033B5F] fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } w-80 dark:bg-gray-800`}
        tabIndex="-1"
      >
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg p-2 absolute top-2 right-2 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={handleCloseButtonClick}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M13.414 6.586a2 2 0 0 1 2.828 2.828L12.828 12l3.414 3.414a2 2 0 1 1-2.828 2.828L10 14.828l-3.414 3.414a2 2 0 1 1-2.828-2.828L7.172 12 3.758 8.586a2 2 0 1 1 2.828-2.828L10 9.172l3.414-3.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="merriweather-regular text-xl">
          <ul className="space-y-3 font-medium text-white">
            <li onClick={handleLinkClick} className="border-b">
              <Link href="/" passHref>
                <div className="flex items-center py-5 mt-10 rounded-lg cursor-pointer">
                  <span className="ms-3">Home</span>
                </div>
              </Link>
            </li>
            <li onClick={handleLinkClick} className="border-b">
              <Link href="/my-journey" passHref>
                <div className="flex items-center py-5 rounded-lg cursor-pointer">
                  <span className="ms-3">My Journey</span>
                </div>
              </Link>
            </li>
            <li onClick={handleLinkClick} className="border-b">
              <Link href="/sincerely-me" passHref>
                <div className="flex items-center py-5 rounded-lg cursor-pointer">
                  <span className="ms-3">Sincerely, Me</span>
                </div>
              </Link>
            </li>
            <li onClick={handleLinkClick} className="border-b">
              <Link href="/my-constituency" passHref>
                <div className="flex items-center py-5 rounded-lg cursor-pointer">
                  <span className="ms-3">My Constituency</span>
                </div>
              </Link>
            </li>
            <li onClick={handleLinkClick} className="border-b">
              <Link href="/in-my-book-shelf" passHref>
                <div className="flex items-center py-5 rounded-lg cursor-pointer">
                  <span className="ms-3">In My Book Shelf</span>
                </div>
              </Link>
            </li>
            <li onClick={handleLinkClick} className="border-b">
              <Link href="/press-releases" passHref>
                <div className="flex items-center py-5 rounded-lg cursor-pointer">
                  <span className="ms-3">Press Releases</span>
                </div>
              </Link>
            </li>
            <li onClick={handleLinkClick} className="">
              <Link href="/newsletters" passHref>
                <div className="flex items-center py-5 rounded-lg cursor-pointer">
                  <span className="ms-3">Newsletters</span>
                </div>
              </Link>
            </li>
            <li onClick={handleLinkClick} className="">
              <Link href="/get-in-touch" passHref>
                <div className="flex items-center py-5 rounded-lg cursor-pointer">
                  <span className="ms-3">Get in Touch</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-30"
          onClick={handleCloseButtonClick}
        ></div>
      )}
    </div>
  )
}

export default Headerpage
