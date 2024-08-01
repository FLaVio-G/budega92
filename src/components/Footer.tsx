import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-customBeigeTwo py-8 text-gray-800">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col justify-between space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
          <section className="max-w-xs lg:max-w-sm">
            <h2 className="text-xl font-extrabold uppercase tracking-wide text-gray-800">
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
            <h2 className="text-xl font-extrabold uppercase tracking-wide text-gray-800">
              Funcionalidades
            </h2>
            <ul className="mt-4 space-y-2 text-gray-800">
              <li>
                <a href="#bebidas" className="hover:underline">
                  Bebidas
                </a>
              </li>
              <li>
                <a href="#maps" className="hover:underline">
                  Mapa
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:underline">
                  Sobre
                </a>
              </li>
            </ul>
          </section>

          <section className="max-w-xs lg:max-w-sm">
            <h2 className="text-xl font-extrabold uppercase tracking-wide text-gray-800">
              CONTATO
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="https://www.instagram.com/budega.92/">
                  <span className="flex items-center gap-2 text-gray-800 transition hover:text-gray-600">
                    <CiInstagram size="20" />
                    Instagram
                  </span>
                </Link>
              </li>
              <li>
                <Link href="https://wa.me">
                  <span className="flex items-center gap-2 text-gray-800 transition hover:text-gray-600">
                    <FaWhatsapp size="20" />
                    Whatsapp
                  </span>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com">
                  <span className="flex items-center gap-2 text-gray-800 transition hover:text-gray-600">
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
