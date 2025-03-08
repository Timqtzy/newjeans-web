import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";

const Discography = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    // Dynamically import all images from the "../gallery" folder
    const imageModules = import.meta.glob("../gallery/*", { eager: true });

    const imageData = Object.entries(imageModules).map(([_, module]) => ({
      photo: module.default,
    }));

    setImages(imageData);
  }, []);

  const totalPages = Math.ceil(images.length / itemsPerPage);
  const currentItems = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="h-full w-full bg-white">
      <Navbar />
      <div className="Content flex flex-col items-center justify-center w-full min-h-screen pt-16">
        <div className="w-full max-w-5xl">
          <h1 className="pageTitle text-center py-4 text-2xl text-black">
            GALLERY
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-black">
            {currentItems.map((item, index) => (
              <Card key={index} photo={item.photo} className="flex" />
            ))}
          </div>
          <div className="flex items-center justify-center py-8 gap-2">
            <button
              className="btn btn-outline text-black hover:text-white"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <GrPrevious />
            </button>
            <button
              className="btn btn-outline text-black hover:text-white"
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
