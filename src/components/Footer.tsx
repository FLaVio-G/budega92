"use client";
import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full  bg-slate-600 text-white">
      <div className="flex flex-col items-center  justify-center p-4">
        <div className="flex justify-center max-w-5xl items-center p-6   space-x-4">
          <div className="p-4">
            <p className="text-white">
              O Bar Budega 92 é um destino exclusivo para apreciadores de
              bebidas, oferecendo uma experiência única centrada em uma
              variedade exuberante de coquetéis, destilados e cervejas
              artesanais.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="  flex row whitespace-no-wrap justify-start font-semibold ">
              Social
            </h2>
            <Link
              className="text-white mt-2 gap-1 flex row items-center"
              href="Instagram"
            >
              <CiInstagram size="20" />
              <p>Instagram</p>
            </Link>
            <Link
              className="text-white mt-1 gap-1  flex row items-center"
              href="IWhatsapp"
            >
              <FaWhatsapp size="20" />
              <p>Whatsapp</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center pr-10 pl-10 justify-between row-auto bg-slate-500">
        <p>Budega 92</p>
        <p>Desenvolvido por Flávio Viana</p>
        <p className="text-white">Beba com moderação</p>
      </div>
    </footer>
  );
}
