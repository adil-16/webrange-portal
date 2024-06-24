import React from "react";

const Card = ({ title, quantity }) => {
  return (
    <div className="grid sm:grid-cols-1 grid-cols-3 border border-black  rounded-xl hover:bg-black transition-all duration-300 hover:text-white cursor-pointer">
      <div className="w-full flex flex-col px-5 justify-center h-52 gap-y-2">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-xl">{quantity}</p>
      </div>
    </div>
  );
};

export default Card;
