import { X } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

interface CardProductsProps {
  description: string;
  id: string;
  name: string;
  price: number;
  typeDrink: string;
  urlImage: string;
}

export function CardProduct({
  id,
  description,
  name,
  price,
  typeDrink,
  urlImage,
}: CardProductsProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(true);
  };

  const handleClose = () => {
    setShowOverlay(false);
  };

  return (
    <div className=" grid max-w-xs items-center justify-center  grid-cols-4 gap-16">
      <div
        className="flex flex-col  p-5  w-[200px] cursor-pointer  rounded-lg transition-transform transform-gpu hover:scale-110 border-2 border-transparent hover:border-gray-200 hover:shadow-lg"
        onClick={handleClick}
      >
        <div className="h-28 w-full flex items-center justify-center rounded-lg text-white relative">
          <Image
            className="flex items-center justify-center"
            src={urlImage}
            width={60}
            height={60}
            alt={`${name} image`}
          />
        </div>
        <h2 className=" pt-14">{name}</h2>
        <p className="pt-5  font-bold">R$ {price}</p>
      </div>

      {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex justify-center items-center  h-[600px] w-[900px] bg-white rounded-lg relative">
            <div className="flex flex-row gap-16 ">
              <div className="relative flex justify-center items-center  text-white ml-5">
                <Image
                  src={urlImage}
                  alt={`${name} image`}
                  width={500}
                  height={500}
                  objectFit="contain"
                  className="max-w-xs"
                />
              </div>
              <div className="flex-col mr-5 w-[350px] justify-center items-center">
                <div className="flex flex-col items-start">
                  <h2 className="font-bold text-4xl">{name}</h2>
                  <p className="pt-14 text-sm">{description}</p>
                  <p className="mt-4 font-semibold text-lg"> R$ {price}</p>
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
    </div>
  );
}