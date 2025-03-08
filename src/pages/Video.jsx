import React from "react";
import Navbar from "../components/Navbar";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";
import { useState } from "react";

const Video = () => {
  const data = [
    { link: "https://www.youtube.com/embed/sVTy_wmn5SU" },
    { link: "https://www.youtube.com/embed/8yXGI3kcLsw" },
    { link: "https://www.youtube.com/embed/vrM2mrI83uk" },
    { link: "https://www.youtube.com/embed/ArmDp-zijuc" },
    { link: "https://www.youtube.com/embed/Km71Rr9K-Bw" },
    { link: "https://www.youtube.com/embed/_03-NQCb-qw" },
    { link: "https://www.youtube.com/embed/11cta61wi0g" },
    { link: "https://www.youtube.com/embed/kdOS94IjzzE" },
    { link: "https://www.youtube.com/embed/kcelgrGY1h8" },
    { link: "https://www.youtube.com/embed/jOTfBlKSQYY" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  const totalPages = Math.ceil(data.length / itemPerPage);
  const currentItems = data.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  function log(item) {
    console.log(item);
  }
  return (
    <div className="h-full w-full bg-white ">
      <Navbar />
      <div className="Content flex flex-col items-center justify-center w-full min-h-screen pt-16">
        <div className="w-full max-w-5xl">
          <h1 className="pageTitle text-center py-4 text-2xl text-black">
            VIDEO
          </h1>
          <div className=" flex flex-wrap justify-center gap-4 text-black px-2">
            {currentItems.map((item, index) => (
              <iframe
                key={index}
                src={item.link}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`video-${index}`}
                className="w-full aspect-video"
                onLoadStart={() => log(item)}
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

export default Video;
