"use client";
import React from "react";
import Image from "next/image";

import Footer from "../components/Footer";
import Header from "../components/Header";
import cerveja1 from "../../public/images/cervejas.jpg";
import garrafa1 from "../../public/images/garrafa-agua.jpg";
import Jambu1 from "../../public/images/jambu.jpg";
import snake1 from "../../public/images/snakes.jpg";
import vinho1 from "../../public/images/vinho.jpg";

import "keen-slider/keen-slider.min.css";

export default function Bebidas() {
  return (
    <div className="flex mx-auto max-w-7xl flex-col items-center justify-between">
      <Header />

      <div className="grid grid-cols-2 bg-gray-100 p-8 rounded-lg  md:grid-cols-3  gap-8">
        <a href="/destilados">
          <div>
            <div className="h-[350px] w-[350px] rounded-lg text-white">
              <Image src={Jambu1} alt="Picture of the author" />
            </div>
            <p className="flex font-semibold text-gray-800  justify-center">
              Destilados
            </p>
          </div>
        </a>

        <a className="rounded-lg" href="/destilados">
          <div>
            <div className="h-[350px] w-[350px] text-white">
              <Image src={vinho1} alt="Picture of the author" />
            </div>
            <p className="flex font-semibold text-gray-800  justify-center">
              Vinho
            </p>
          </div>
        </a>

        <a href="/destilados">
          <div>
            <div className="h-[350px] w-[350px] text-white">
              <Image src={cerveja1} alt="Picture of the author" />
            </div>
            <p className="flex font-semibold text-gray-800  justify-center">
              Cervejas
            </p>
          </div>
        </a>
        <a href="/destilados">
          <div>
            <div className="h-[350px] w-[350px] text-white">
              <Image src={snake1} alt="Picture of the author" />
            </div>
            <p className="flex font-semibold text-gray-800  justify-center">
              Diversos
            </p>
          </div>
        </a>

        <a href="/destilados">
          <div>
            <div className="h-[350px] w-[350px] text-white">
              <Image src={garrafa1} alt="Picture of the author" />
            </div>
            <p className="flex font-semibold text-gray-800  justify-center">
              Água
            </p>
          </div>
        </a>
      </div>

      <Footer />
    </div>
  );
}
