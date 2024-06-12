"use client";
import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full text-gray-800">
      <div className="flex items-center  justify-center p-4 ">
        <div className="flex flex-col lg:space-y-0 space-y-4  lg:mt-0   items-center  lg:flex-row justify-center max-w-5xl lg:items-start p-6 space-x-4">
          <div className="max-w-xs mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-sm">
            <div className="md:flex">
              <div className="md:shrink-0"></div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-gray-800 font-semibold">
                  Sobre a Budega 92
                </div>

                <p className="mt-2 text-gray-800">
                  O Bar Budega 92 é um destino exclusivo para apreciadores de
                  bebidas, oferecendo uma experiência única centrada em uma
                  variedade exuberante de coquetéis, destilados e cervejas
                  artesanais.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto bg-gray-100 rounded-xl shadow-md  md:max-w-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:shrink-0"></div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-gray-800 font-semibold">
                  Funcionalidades
                </div>

                <p className="mt-2 text-gray-800">Bebidas</p>
                <p className="mt-2 text-gray-800">Mapa</p>
                <p className="mt-2 text-gray-800">Sobre</p>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto bg-gray-100 rounded-xl shadow-md  md:max-w-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:shrink-0"></div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-gray-800  font-semibold">
                  Social
                </div>
                <Link
                  className="text-gray-800 mt-2 gap-1 flex row items-center"
                  href="Instagram"
                >
                  <CiInstagram size="20" />
                  <p>Instagram</p>
                </Link>
                <Link
                  className="text-gray-800 mt-1 gap-1  flex row items-center"
                  href="IWhatsapp"
                >
                  <FaWhatsapp size="20" />
                  <p>Whatsapp</p>
                </Link>
                <Link
                  className="text-gray-800 mt-1 gap-1  flex row items-center"
                  href="IWhatsapp"
                >
                  <FaYoutube size="20" />
                  <p>Youtube</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
