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
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="grid place-items-center gap-4">
      <div
        className="flex flex-col p-4 cursor-pointer rounded-lg transition-transform hover:scale-105"
        onClick={() => setShowOverlay(true)}
      >
        <div className="relative h-28 w-full rounded-lg bg-gray-200">
          <Image
            src={urlImage}
            layout="fill"
            objectFit="cover"
            alt={`${name} image`}
            onLoadingComplete={handleImageLoad}
            className={`transition-opacity ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <h2 className="mt-4 text-red-500 text-lg font-bold">{name}</h2>
        <p className="text-md font-semibold">R$ {price}</p>
      </div>

      {showOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center justify-center w-full max-w-4xl p-6 bg-white rounded-lg relative">
            <X
              onClick={() => setShowOverlay(false)}
              className="absolute top-2 right-2 bg-red-300 p-2 text-3xl cursor-pointer hover:text-red-500"
            />
            <Image
              src={urlImage}
              alt={`${name} image`}
              width={300}
              height={300}
              objectFit="contain"
              className="rounded-lg"
            />
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold">{name}</h2>
              <div className="mt-2 text-sm h-24 overflow-y-auto text-left">
                {description}
              </div>
              <p className="mt-4 text-lg font-semibold">R$ {price}</p>
              <a
                href="#"
                className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
              >
                Clique aqui para ver o vídeo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
