import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" bg-red-600 w-full h-28  items-center justify-around font-mono text-sm lg:flex">
      <div className=" flex flex-row items-center max-w-6xl pt-4 justify-between w-full px-3">
        <Link
          className="text-white text-xl transition duration-300 hover:border-b-2 hover:border-white"
          href="/"
        >
          Budega 92
        </Link>
        <div className="flex space-x-4">
          <Link
            className="text-white text-xl transition duration-300 hover:border-b-2 hover:border-white"
            href="/bebidas"
          >
            Bebidas
          </Link>
          <Link
            className="text-white text-xl transition duration-300 hover:border-b-2 hover:border-white"
            href="/sobre"
          >
            Sobre
          </Link>
        </div>
      </div>
    </header>
  );
}
