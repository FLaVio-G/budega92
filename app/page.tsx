"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";

import Header from "./components/header";

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">1</div>
        <div className="keen-slider__slide number-slide2">2</div>
        <div className="keen-slider__slide number-slide3">3</div>
        <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div>
      </div>

      <div className="flex flex-row">
        <h2 className="text-xl justify-center text-center mb-5 font-semibold">
          O que eu posso fazer no site da budega 92?
        </h2>

        <div className="mb-32 pb-10 grid mx-auto lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          <div className="group rounded-lg border border-gray-300 hover:border-gray-300 hover:bg-gray-100 text-center">
            <h2 className="inline-block text-lg font-sans">Produtos</h2>
            <p className="text-sm opacity-50">
              Aqui você pode encontrar todos os produtos vendidos na budega 92
            </p>
          </div>

          <div className="group rounded-lg border border-gray-300 hover:border-gray-300 hover:bg-gray-100 text-center">
            <h2 className="inline-block text-lg font-sans">Histórias</h2>
            <p className="text-base opacity-50">
              Aqui você irá mergulhar nesse mundo, nosso fundador irá contar a
              você tudo sobre as melhores bebidas da região!
            </p>
          </div>

          <div className="group rounded-lg border border-gray-300 hover:border-gray-300 hover:bg-gray-100 text-center">
            <h2 className="inline-block text-lg font-sans">
              Contéudos exclusivos
            </h2>
            <p className="text-base opacity-50">
              Acompanhe nossa página e receba as novidades antes de todo mundo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
