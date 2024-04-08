"use client";
import React from "react";

import Header from "./components/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div className="flex flex-col">
        <h2 className="text-xl justify-center text-center mb-5 font-semibold">
          O que eu posso fazer no site da budega 92?
        </h2>

        <div className="mb-32 pb-10 grid mx-auto   lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          <div className="group rounded-lg border mr-10 border-gray-300 p-4 hover:border-gray-300 hover:bg-gray-100 text-center">
            <h2 className="inline-block text-lg font-sans">Produtos</h2>
            <span>
              <p className="text-sm opacity-50">
                Aqui você pode encontrar todos os produtos vendidos na budega 92
              </p>
            </span>
          </div>

          <div className="group rounded-lg mr-10 border border-gray-300 p-4 hover:border-gray-300 hover:bg-gray-100 text-center">
            <h2 className="inline-block text-lg font-sans">Histórias</h2>
            <span>
              <p className="text-base opacity-50">
                Aqui você irá mergulhar nesse mundo, nosso fundador irá contar a
                você tudo sobre as melhores bebidas da região!
              </p>
            </span>
          </div>

          <div className="group rounded-lg border border-gray-300 p-4 hover:border-gray-300 hover:bg-gray-100 text-center">
            <h2 className="inline-block text-lg font-sans">
              Contéudos exclusivos
            </h2>
            <span>
              <p className="text-base opacity-50">
                Acompanhe nossa página e receba as novidades antes de todo mundo
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
