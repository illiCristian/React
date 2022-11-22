import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const CardWidget = ({ cantidad }) => {
  return (
    <div className="m-4 flex">
      <button className="mx-2 mt-1 text-2xl hover:text-orange-200">
        <HiShoppingCart />
      </button>
      <p className="text-2xl font-bold text-black">
        <strong>{cantidad}</strong>{" "}
      </p>
    </div>
  );
};

export default CardWidget;
