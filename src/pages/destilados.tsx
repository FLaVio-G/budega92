"use client";

import React, { useState } from "react";
import { X } from "@phosphor-icons/react";
import Image from "next/image";

import Footer from "../components/Footer";
import Header from "../components/Header";
import vodkaRedImage from "../../public/images/vodka-red.jpg";

export default function Spirits() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(true);
  };

  const handleClose = () => {
    setShowOverlay(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div className="grid grid-cols-4 gap-16">
        <div
          className="flex flex-col cursor-pointer p-5 rounded-lg transition-transform transform-gpu hover:scale-110 border-2 border-transparent hover:border-gray-200 hover:shadow-lg relative"
          onClick={handleClick}
        >
          <div className="h-28 w-28 text-white">
            <Image src={vodkaRedImage} alt="Picture of the author" />
          </div>
          <h2 className="pt-14">Vodka Red 300ml</h2>
          <p className="pt-5 font-bold">R$ 12,00</p>
        </div>

        {showOverlay && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex justify-center items-center  h-[600px] w-[1200px] bg-white rounded-lg relative">
              <div className="flex flex-row ">
                <div className="h-[350px] w-[350px] ml-5 flex justify-center items-center bg-red-300  text-white">
                  <Image
                    className=""
                    src={vodkaRedImage}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex-col mr-5 w-[350px] justify-center items-center">
                  <div className="flex flex-col items-start">
                    <h2 className="font-bold text-4xl">Vodka Red 300ml</h2>
                    <p className="pt-14 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis nihil nam sapiente dolorum, possimus quis
                      nesciunt neque labore cum sit aspernatur voluptatem
                      cupiditate ut delectus animi enim. Quisquam, asperiores
                      saepe.
                    </p>
                    <p className="mt-4 font-semibold text-lg">R$ 12,00</p>
                  </div>
                  <a
                    href="seu-link-aqui"
                    className="inline-block mt-4 bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Clique aqui para ver o vídeo
                  </a>
                </div>
              </div>

              <X
                onClick={handleClose}
                className="absolute top-0 right-0 p-4 hover:text-red-500 cursor-pointer"
                size={55}
              />
            </div>
          </div>
        )}

        {/* The rest of the items */}
      </div>

      <Footer />
    </div>
  );
}
