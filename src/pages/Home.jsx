import React from "react";
import Navbar from "../components/Navbar";
import Bg from "../img/bgnewjeans.png";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
    </div>
  );
};

export default Home;
