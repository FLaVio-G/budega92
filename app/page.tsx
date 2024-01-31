"use client";
import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div>
        <Image
          width={300}
          height={500}
          src="/images/drink-1.png"
          alt="drink1"
        />
      </div>

      <div className="flex- flex-row ">
        <h2 className="text-xl justify-center text-center mb-5 font-semibold">
          O que eu posso fazer no site da budega 92?
        </h2>
        <div className="mb-32 pb-10  grid mx-auto lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3  lg:text-left">
          <div className="group justify-center items-center rounded-lg border  border-transparent  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 inline-block text-center">
            <h2 className=" inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none   justify-center items-center text-lg font-sans">
              Produtos
            </h2>
            <p className="text-sm opacity-50">
              Aqui você pode encontrar todas os produtos vendidos na budega 92
            </p>
          </div>

          <div className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-center">
            <h2 className=" inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-nonemb-3 text-lg font-sans">
              Histórias
            </h2>
            <p className="text-base opacity-50">
              Aqui você irá mergulhar nesse mundo, nosso fundador irá contar a
              você tudo sobre as melhores bebidas da região!
            </p>
          </div>

          <div className="group rounded-lg border border-transparent  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30  text-center">
            <h2 className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-lg font-sans">
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
