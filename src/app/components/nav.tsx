import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <>
      <header>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex font-bold text-xl items-center cursor-pointer text-gray-900"
            href="/"
          >
            Logo
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" href="/">
              Home
            </Link>
            <Link className="mr-5 hover:text-gray-900" href="/1">
              1
            </Link>
            <Link className="mr-5 hover:text-gray-900" href="/2">
              2
            </Link>
            <Link className="mr-5 hover:text-gray-900" href="/3">
              3
            </Link>
            <Link className="mr-5 hover:text-gray-900" href="/4">
              4
            </Link>
            <Link className="mr-5 hover:text-gray-900" href="/5">
              5
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
