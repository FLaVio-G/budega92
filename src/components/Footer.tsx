import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full text-gray-800 bg-customBeigeTwo py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <section className="max-w-xs lg:max-w-sm">
            <h2 className="uppercase tracking-wide text-xl text-gray-800 font-extrabold">
              SOBRE A BUDEGA 92
            </h2>
            <p className="mt-4 text-gray-800">
              O Bar Budega 92 é um destino exclusivo para apreciadores de
              bebidas, oferecendo uma experiência única centrada em uma
              variedade exuberante de coquetéis, destilados e cervejas
              artesanais.
            </p>
          </section>

          <section className="max-w-xs lg:max-w-sm">
            <h2 className="uppercase tracking-wide text-xl text-gray-800 font-extrabold">
              Funcionalidades
            </h2>
            <ul className="mt-4 space-y-2 text-gray-800">
              <li>Bebidas</li>
              <li>Mapa</li>
              <li>Sobre</li>
            </ul>
          </section>

          <section className="max-w-xs lg:max-w-sm">
            <h2 className="uppercase tracking-wide text-xl text-gray-800 font-extrabold">
              CONTATO
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="https://www.instagram.com">
                  <span className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition">
                    <CiInstagram size="20" />
                    Instagram
                  </span>
                </Link>
              </li>
              <li>
                <Link href="https://wa.me">
                  <span className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition">
                    <FaWhatsapp size="20" />
                    Whatsapp
                  </span>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com">
                  <span className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition">
                    <FaYoutube size="20" />
                    YouTube
                  </span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}
