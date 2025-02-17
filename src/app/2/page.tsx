import Link from "next/link";
import React from "react";

export default function Page2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold text-gray-900">Not Found</h1>
      <Link
        href="/"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-xl text-sm px-5 py-3"
      >
        Back to Home
      </Link>
    </div>
  );
}
