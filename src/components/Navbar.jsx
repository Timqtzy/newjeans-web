import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  function handleClickMenu() {
    setIsOpen(!isOpen);
    console.log(isOpen ? "Menu Close" : "Menu Open");
  }

  const isTransparentPage = () => {
    const transparentPages = ["/"]; // Add paths where the navbar should be transparent
    return transparentPages.includes(location.pathname);
  };

  return (
    <>
      <div
        className={`px-6 md:px-24 py-4 md:py-6 flex justify-between items-center fixed top-0 left-0 w-full z-50 ${
          isTransparentPage() ? "bg-none" : "bg-white"
        }`}
      >
        {" "}
        <Link to="/" className="title text-2xl font-bold cursor-pointer">
          Newjeans
        </Link>
        <button className="cursor-pointer" onClick={handleClickMenu}>
          {isOpen ? (
            <IoClose className="text-black text-4xl" />
          ) : (
            <IoMenu className="text-black text-4xl" />
          )}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 flex items-center justify-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center">
          <Link to="/Profile" className="page text-black text-2xl">
            PROFILE
          </Link>
          <Link to="/Discography" className="text-black page text-2xl">
            DISCOGRAPHY
          </Link>
          <Link to="/Gallery" className="text-black page text-2xl">
            GALLERY
          </Link>
          <Link to="/Video" className="text-black page text-2xl">
            VIDEO
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
