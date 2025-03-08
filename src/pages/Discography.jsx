import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Photo from "../img/danni.png";
import ATimeCalledYou from "../img/atimecalledyou.avif";
import BeWhoYouAre from "../img/bewhoyouare.avif";
import Ditto from "../img/ditto.avif";
import GetUp from "../img/getup.avif";
import Gods from "../img/gods.avif";
import HowSweet from "../img/howsweet.jpg";
import MyDemon from "../img/mydemon.avif";
import Newjeans from "../img/newjeans.avif";
import Njwmx from "../img/njwmx.avif";
import Omg from "../img/omg.avif";
import Supernatural from "../img/supernatural.jpg";
import SuperShy from "../img/supershy.avif";
import TellMe from "../img/tell me.avif";
import Zero from "../img/zero.avif";
import ZeroMix from "../img/zeroremix.avif";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";

const Discography = () => {
  const data = [
    { photo: Newjeans, title: "New Jeans", date: "August 1, 2022" },
    { photo: Ditto, title: "Ditto", date: "December 19, 2022" },
    { photo: Omg, title: "OMG", date: "January 2, 2023" },
    { photo: TellMe, title: "Tell Me", date: "January 24, 2023" },
    { photo: Zero, title: "Zero", date: "April 3, 2023" },
    { photo: BeWhoYouAre, title: "Be Who You Are", date: "May 31, 2023" },
    { photo: ZeroMix, title: "Zero (Remix)", date: "June 21, 2023" },
    { photo: SuperShy, title: "NewJeans ‘Super Shy’", date: "July 7, 2023" },
    { photo: GetUp, title: "Get Up", date: "July 21, 2023" },
    {
      photo: ATimeCalledYou,
      title: "A Time Called You (Original Soundtrack From the Netflix Series)",
      date: "September 1, 2023",
    },
    {
      photo: Gods,
      title: "Gods (New Jeans X League of Legends)",
      date: "October 4, 2023",
    },
    { photo: MyDemon, title: "NewJeans x MY DEMON", date: "November 24, 2023" },
    { photo: Njwmx, title: "NJWMX", date: "December 19, 2023" },
    { photo: HowSweet, title: "How Sweet", date: "May 24, 2024" },
    { photo: Supernatural, title: "Supernatural", date: "June 21, 2024" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  const totalPages = Math.ceil(data.length / itemPerPage);
  const currentItems = data.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  return (
    <div className="h-full w-full bg-white ">
      <Navbar />
      <div className="Content flex flex-col items-center justify-center w-full min-h-screen pt-16">
        <div className="w-full max-w-5xl">
          <h1 className="pageTitle text-center py-4 text-2xl text-black">
            DISCOGRAPHY
          </h1>
          <div className=" flex flex-wrap justify-center gap-4 text-black">
            {currentItems.map((item, index) => (
              <Card
                key={index}
                photo={item.photo}
                title={item.title}
                date={item.date}
                className="flex"
              />
            ))}
          </div>
          <div className="flex items-center justify-center py-8 gap-2">
            <button
              className=" btn btn-outline text-black hover:text-white"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <GrPrevious />
            </button>
            <button
              className=" btn btn-outline text-black hover:text-white"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <MdOutlineNavigateNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discography;
