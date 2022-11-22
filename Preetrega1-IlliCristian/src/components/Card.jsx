import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Articulo 1</h3>
      <img
        src="https://dummyimage.com/600x400/000/fff"
        className="w-full rounded-xl"
      />
      <h1 className="text-center font-bold">Item 1</h1>
      <p className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
        {" "}
        Compra este hermoso item{" "}
      </p>
      <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg hover:bg-orange-200">
        Agregar al carrito{" "}
      </button>
    </div>
  );
};

export default Card;
