import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="mt-3 rounded-md border-8 border-gray-400 bg-gradient-to-tr from-red-300 to-yellow-200 p-4 text-center text-3xl">
      <h1 className="font-bold text-amber-700">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
