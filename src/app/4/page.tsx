"use client";

import React, { useState } from "react";

export default function Page4() {
  const [color, setColor] = useState("bg-gray-300");

  const changeColor = (newColor: React.SetStateAction<string>) => {
    setColor(newColor);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className={`w-64 h-32 mb-6 ${color} rounded-lg`}></div>
      <div className="flex space-x-4">
        <button
          onClick={() => changeColor("bg-red-500")}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Rojo
        </button>
        <button
          onClick={() => changeColor("bg-blue-500")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Azul
        </button>
        <button
          onClick={() => changeColor("bg-green-500")}
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Verde
        </button>
        <button
          onClick={() => changeColor("bg-yellow-500")}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Amarillo
        </button>
      </div>
    </div>
  );
}
