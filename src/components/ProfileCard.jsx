import React from "react";

const ProfileCard = (props) => {
  function Test(props) {
    console.log(props);
  }

  return (
    <div className="flex flex-col lg:flex-row  justify-center items-center gap-8">
      <div className="profileImg flex justify-center">
        <img src={props.Photo} alt={props.StageName} />
      </div>
      <div className="profileInfo text-black px-2" onClick={() => Test(props)}>
        {props.StageName && <p>Stage Name: {props.StageName}</p>}
        {props.BirthName && <p>Birth Name: {props.BirthName}</p>}
        {props.VietnameseName && <p>Vietnamese Name: {props.VietnameseName}</p>}
        {props.Position && <p>Position: {props.Position}</p>}
        {props.Birthday && <p>Birthday: {props.Birthday}</p>}
        {props.ZodiacSign && <p>Zodiac Sign: {props.ZodiacSign}</p>}
        {props.ChineseZodiacSign && (
          <p>Chinese Zodiac Sign: {props.ChineseZodiacSign}</p>
        )}
        {props.Height && <p>Height: {props.Height}</p>}
        {props.Weight && <p>Weight: {props.Weight}</p>}
        {props.BloodType && <p>Blood Type: {props.BloodType}</p>}
        {props.MbtiType && <p>MBTI Type: {props.MbtiType}</p>}
        {props.Nationality && <p>Nationality: {props.Nationality}</p>}
        {props.RepresentativeColor && (
          <p>Representative Color: {props.RepresentativeColor}</p>
        )}
        {props.BunnyColor && <p>Bunny Color: {props.BunnyColor}</p>}
      </div>
    </div>
  );
};

export default ProfileCard;
