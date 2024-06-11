import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Sobre() {
  return (
    <div className="flex mx-auto max-w-7xl flex-col items-center justify-between">
      <Header />
      <div className="bg-red-500 w-full">teste</div>

      <div className="flex flex-col lg:flex-row lg:h-[800px] lg:max-w-5xl lg:p-0 p-4  gap-5 justify-center items-center">
        <div className="flex flex-col justify-center items-center  lg:flex-row lg:gap-14 lg:max-w-5xl w-full">
          <div className=" flex-row justify-center  items-center">
            <h1 className="text-lg lg:text-lg lg:justify-start flex items-center justify-center mb-4">
              Sobre a budega 92
            </h1>
            <div className="flexlg:text-5xl lg:tracking-wide">
              <p className="font-normal lg:text-5xl  text-base">
                Somos um bar em Santarém onde você pode encontrar as melhores
                bebidas da região.
              </p>
            </div>
          </div>
          <div className="bg-red-400 lg:mt-0 mt-4 w-full lg:h-[350px] h-[200px] mb-4">
            <p className="text-white">teste</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-0 p-4 gap-8 mb-20 mt-16 lg:max-w-5xl">
        <div className="bg-red-300 lg:h-[350px]  h-[200px]  mb-8 lg:mb-0">
          01
        </div>
        <div className="mb-8">
          <h2 className="font-bold text-3xl lg:text-5xl">Sra joão da Silva</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            esse alias modi adipisci libero! Provident reprehenderit inventore
            repellat ab eveniet, delectus recusandae, facilis accusantium esse
            fuga eligendi minus quidem quam?
          </p>
        </div>
        <div className="mb-8">
          <h2 className="font-bold text-3xl lg:text-5xl">Sra Maria da Silva</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            esse alias modi adipisci libero! Provident reprehenderit inventore
            repellat ab eveniet, delectus recusandae, facilis accusantium esse
            fuga eligendi minus quidem quam?
          </p>
        </div>
        <div className="bg-red-300 lg:h-[350px] h-[200px]  mb-8 lg:mb-0">
          01
        </div>
      </div>

      <Footer />
    </div>
  );
}
