"use client";

import React, { useState } from "react";

export default function Page3() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">{count}</h1>
      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Incrementar
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Decrementar
        </button>
      </div>
    </div>
  );
}
