import React from "react";

const Card = (props) => {
  return (
    <div className="Container w-64">
      <div className="flex justify-center">
        <img src={props.photo} alt="Photo of album" />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold overflow-hidden text-ellipsis  whitespace-nowrap max-w-2/5">
          {props.title}
        </p>
        <p className="text-sm">{props.date}</p>
      </div>
    </div>
  );
};

export default Card;
