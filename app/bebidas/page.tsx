"use client";
import React from "react";
import Image from "next/image";

import cerveja1 from "../../public/images/cervejas.jpg";
import garrafa1 from "../../public/images/garrafa-agua.jpg";
import Jambu1 from "../../public/images/jambu.jpg";
import snake1 from "../../public/images/snakes.jpg";
import vinho1 from "../../public/images/vinho.jpg";
import Footer from "../components/footer";
import Header from "../components/header";

import "keen-slider/keen-slider.min.css";

export default function Bebidas() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div className="grid grid-cols-2  md:grid-cols-3  gap-8 pb-4 pt-4">
        <a href="/destilados">
          <div>
            <div className="h-[350px] w-[350px] text-white">
              <Image src={Jambu1} alt="Picture of the author" />
            </div>
            <p className="flex font-semibold text-gray-500 justify-center">
              Destilados
            </p>
          </div>
        </a>

        <a href="/destilados">
          <div>
            <div className="h-[350px] w-[350px] text-white">
              <Image src={vinho1} alt="Picture of the author" />
            </div>
            <p className="flex font-semibold text-gray-500 justify-center">
              Vinho
            </p>
          </div>
        </a>

        <a href="/destilados">
          <div>
            <div className="h-[350px] w-[350px] text-white">
              <Image src={cerveja1} alt="Picture of the author" />
            </div>
            <p className="flex font-semibold text-gray-500 justify-center">
              Cervejas
            </p>
          </div>
        </a>
        <a href="/destilados">
          <div>
            <div className="h-[350px] w-[350px] text-white">
              <Image src={snake1} alt="Picture of the author" />
            </div>
            <p className="flex font-semibold text-gray-500 justify-center">
              Diversos
            </p>
          </div>
        </a>

        <a href="/destilados">
          <div>
            <div className="h-[350px] w-[350px] text-white">
              <Image src={garrafa1} alt="Picture of the author" />
            </div>
            <p className="flex font-semibold text-gray-500 justify-center">
              Água
            </p>
          </div>
        </a>
      </div>

      <Footer />
    </div>
  );
}
