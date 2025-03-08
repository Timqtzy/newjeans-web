import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import "../App.css";
import Minji from "../img/minji.png";
import Hanni from "../img/hanni.png";
import Danielle from "../img/danni.png";
import Haerin from "../img/haerin.png";
import Hyein from "../img/hyein.png";

const Profile = () => {
  const data = [
    {
      StageName: "Minji (민지)",
      BirthName: "Kim Minji (김민지)",
      Position: "Rapper",
      Birthday: "May 07, 2004",
      ZodiacSign: "Taurus",
      Height: "169 cm (5’6.5”)",
      BloodType: "A",
      MbtiType: "ESTJ (previous results were ISFJ, ENTJ)",
      Nationality: "Korean",
      RepresentativColor: "Blue",
      BunnyColor: "Yellow",
      Photo: Minji,
    },
    {
      StageName: "Hanni (하니)",
      BirthName: "Hanni Pham",
      VietnameseName: "Phạm Ngọc Hân",
      Position: "Vocalist",
      Birthday: "October 6, 2004",
      ZodiacSign: "Libra",
      ChineseZodiacSign: "Monkey",
      Height: "162 cm (5’4”)",
      Weight: "N/A",
      BloodType: "O",
      MbtiType: "INFP",
      Nationality: "Vietnamese-Australian",
      RepresentativeColor: "Pink",
      BunnyColor: "Pink",
      Photo: Hanni,
    },
    {
      StageName: "Danielle (다니엘)",
      BirthName: "Danielle Marsh",
      KoreanName: "Mo Jihye (모지혜)",
      Position: "N/A",
      Birthday: "April 11, 2005",
      ZodiacSign: "Aries",
      ChineseZodiacSign: "Rooster",
      Height: "165 cm (5’5″)",
      Weight: "N/A",
      BloodType: "AB",
      MbtiType: "ENFP (previous result was ENFJ)",
      Nationality: "Korean-Australian",
      RepresentativeColor: "Yellow",
      BunnyColor: "Green",
      Photo: Danielle,
    },
    {
      StageName: "Haerin (해린)",
      BirthName: "Kang Haerin (강해린)",
      EnglishName: "Vanessa Kang",
      Position: "N/A",
      Birthday: "May 15, 2006",
      ZodiacSign: "Taurus",
      ChineseZodiacSign: "Dog",
      Height: "164.5 cm (5’5”)",
      Weight: "N/A",
      BloodType: "B",
      MbtiType: "INTP (previous results were INTJ, ISTP)",
      Nationality: "Korean",
      RepresentativeColor: "Green",
      BunnyColor: "White",
      Photo: Haerin,
    },
    {
      StageName: "Hyein (혜인)",
      BirthName: "Lee Hyein (이혜인)",
      EnglishName: "Grace Lee",
      Position: "Maknae",
      Birthday: "April 21, 2008",
      ZodiacSign: "Taurus",
      ChineseZodiacSign: "Rat",
      Height: "170 cm (5’7″)",
      Weight: "N/A",
      BloodType: "O",
      MbtiType: "ISFP (previous results were INFP, ENFP)",
      Nationality: "Korean",
      RepresentativeColor: "Purple",
      BunnyColor: "Cyan Blue",
      Photo: Hyein,
    },
  ];
  const [ProfileActive, SetProfileActive] = useState(data[0]);

  function SelectedProfile(Active) {
    const profile = data.find((profile) => profile.StageName === Active);
    SetProfileActive(profile);
  }

  return (
    <div className="h-full w-full bg-white">
      <Navbar />
      <h1 className="pageTitle text-center bg-none py-4 text-2xl text-black sticky top-0">
        PROFILE
      </h1>
      <div className="flex flex-col md:flex-row  justify-center items-center h-screen mt-10">
        <div className="NameBtn pr-8 text-black font-semibold text-sm md:text-xl mb-6">
          {data.map((profile) => (
            <p
              key={profile.StageName}
              onClick={() => SelectedProfile(profile.StageName)}
              className={`cursor-pointer ${
                ProfileActive.StageName === profile.StageName
                  ? "text-[#6F82E9]"
                  : "hover:text-[#6F82E9]"
              }`}
            >
              {profile.StageName}
            </p>
          ))}
        </div>
        <ProfileCard
          Photo={ProfileActive.Photo}
          StageName={ProfileActive.StageName}
          BirthName={ProfileActive.BirthName}
          Position={ProfileActive.Position}
          Birthday={ProfileActive.Birthday}
          ZodiacSign={ProfileActive.ZodiacSign}
          Height={ProfileActive.Height}
          Weight={ProfileActive.Weight}
          BloodType={ProfileActive.BloodType}
          MbtiType={ProfileActive.MbtiType}
          Nationality={ProfileActive.Nationality}
          RepresentativeColor={ProfileActive.RepresentativeColor}
          BunnyColor={ProfileActive.BunnyColor}
        />
      </div>
    </div>
  );
};

export default Profile;
