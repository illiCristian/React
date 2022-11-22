import React from "react";
import Card from "./Card";

export const Cards = () => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center py-20 mt-2">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};
