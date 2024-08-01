// "use client";
// import React, { useEffect, useState } from "react";
// import { Image } from "react-bootstrap";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const WhatDrivesMee = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `http://docs.vdsatheesan.com/wp-json/wp/v2/gallery_1`
//         );
//         const data = await response.json();
//         setData(data);
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   var settings = {
//     dots: false,
//     infinite: true,
//     arrows: false,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <div className="lg:flex bg-[url('/home_images/about_satheesan_background.png')] merriweather-regular">
//         <div className="flex items-center justify-center lg:ms-5 mt-10 mb-10 h-72 bg-[#173A5B]">
//           <h3 className="text-4xl text-white text-center">What Drives Me</h3>
//         </div>

//         <div className="flex flex-col container justify-center w-full mt-10 mb-10">
//           <Slider {...settings}>
//             {data.map((post) => (
//               <div key={post.id} className="px-1">
//                 <div className="relative flex items-center group">
//                   <div className="relative">
//                     <Image
//                       src={post.acf.modal_popup_banner.url}
//                       alt={post.title.rendered}
//                       className="w-60 h-48  p-0 grayscale transition duration-300 ease-in-out group-hover:grayscale-0 cursor-pointer"
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
//                       <div
//                         className="text-white text-2xl p-2"
//                         dangerouslySetInnerHTML={{
//                           __html: post.title.rendered,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WhatDrivesMee;
