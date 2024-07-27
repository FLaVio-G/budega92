import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@radix-ui/react-dialog";

import ProductList from "@/components/ProductList";
import ProductVitrine from "@/components/ProductVitrine";

export default function Home() {
  return (
    <>
      <div id="inicio" className="flex w-full flex-col">
        <Header />
        <main className="flex w-full items-center justify-center sm:mt-[200px] md:mt-[400px] lg:mt-[700px]">
          <div
            id="sobre"
            className="flex h-auto w-full flex-col items-center justify-center rounded-lg"
          >
            <div className="mx-4 w-full items-center justify-center sm:mx-4 sm:p-4 md:mx-8 md:p-8 lg:mx-0 lg:w-[850px] lg:p-10">
              <div className="flex flex-col items-center justify-center">
                <h1 className="mb-4 flex items-center justify-center text-lg font-extrabold text-gray-800 sm:text-xl lg:justify-start lg:text-lg">
                  NOSSA HISTÓRIA
                </h1>
                <p className="mb-4 text-center text-base font-normal text-gray-800 sm:text-lg md:text-xl lg:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  minus similique consequatur, enim ab vel quae maxime incidunt
                  velit saepe neque magnam sit, debitis aliquam ipsum amet
                  laborum nostrum dolorum. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Illum soluta, repellat nihil
                  magni quaerat eligendi praesentium odio. Quod accusantium
                  autem cupiditate saepe labore et distinctio minima, laudantium
                  eligendi vero ad?
                </p>
                <p className="mb-4 text-center text-base font-normal text-gray-800 sm:text-lg md:text-xl lg:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repudiandae sequi odit aliquid autem provident corrupti
                  nostrum corporis excepturi molestias nobis, necessitatibus,
                  illo est tenetur, explicabo dolor veniam! Consequatur,
                  nesciunt autem.
                </p>
                <p className="text-center text-base font-normal text-gray-800 sm:text-lg md:text-xl lg:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  assumenda! Voluptate odit distinctio culpa dolore totam
                  dignissimos quos, facilis perferendis, numquam itaque ab
                  pariatur amet iste dolor a aspernatur tenetur.
                </p>
                <div className="flex lg:text-5xl lg:tracking-wide"></div>
              </div>
            </div>
            <div className="sm:flex:row flex w-full flex-col items-center justify-between p-1 md:flex-row lg:flex-row">
              <div className="flex flex-1 flex-col items-center lg:text-5xl lg:tracking-wide">
                <h2 className="mb-4 mt-10 text-base font-bold sm:text-lg lg:text-xl">
                  BEBIDAS REGIONAIS
                </h2>
                <p className="text-center text-base font-normal text-gray-800 sm:text-lg md:text-xl lg:text-xl">
                  Aqui você encontrará uma variedade de bebidas regionais do
                  Pará, incluindo a tradicional cachaça de jambu. Além disso,
                  oferecemos diversos produtos populares no mercado, como
                  cervejas, vinhos e muito mais.
                </p>
              </div>

              <div className="hidden h-80 w-full flex-1 items-center justify-end overflow-hidden lg:sm:md:flex">
                <Image
                  src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
                  className=""
                  width={800}
                  height={500}
                  alt={""}
                />
              </div>
            </div>

            <div className="flex w-full flex-col lg:flex-row lg:justify-between">
              <div className="flex h-[300px] w-full items-center overflow-hidden sm:h-[400px] md:h-[600px] lg:h-[800px] lg:w-full">
                <Image
                  src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
                  className=""
                  width={1200}
                  height={800}
                  alt={""}
                />
              </div>
              <div
                id="bebidas"
                className="flex h-full w-full flex-col lg:mx-0 lg:my-0 lg:h-[800px] lg:w-[800px] lg:text-5xl"
              >
                <div className="lg:full flex flex-col items-center justify-center lg:mx-0 lg:my-0 lg:w-full">
                  <div className="mb-4 mt-10 flex flex-col items-center justify-center">
                    <h2 className="text-base font-bold sm:text-lg lg:text-xl">
                      MENU DE PRODUTOS
                    </h2>
                  </div>
                  <div className="mb-4 mt-6 flex w-[280px] flex-col items-center justify-center text-center lg:w-[350px]">
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl">
                      Aqui você encontrará uma variedade de bebidas regionais do
                      Pará, incluindo a tradicional cachaça de jambu.
                    </p>
                  </div>
                  <div className="mb-4 mt-4 w-[280px] flex-col items-center justify-center text-center text-gray-800 lg:w-[350px]">
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl">
                      Além disso, oferecemos diversos produtos populares no
                      mercado, como cervejas, vinhos e muito mais. Além disso,
                      oferecemos diversos produtos populares no mercado, como
                      cervejas, vinhos e muito mais.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col">
                    <ProductVitrine />
                    <div className="flex flex-col items-center justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="w-[200px] rounded-none border-2 border-black"
                            variant="customOne"
                          >
                            VER TODAS AS BEBIDAS
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="fixed inset-0 flex w-full flex-col items-center justify-center bg-customBeige">
                          <DialogClose
                            className="below290:right-1 fixed right-4 top-4"
                            asChild
                          >
                            <Button
                              type="button"
                              className="below290:w-[30px] below290:text-xs rounded-none border-2 border-black lg:w-[100px]"
                              variant="customOne"
                            >
                              Voltar
                            </Button>
                          </DialogClose>
                          <ProductList />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="map-view"
              className="flex w-full flex-col items-center justify-between p-1 lg:flex-row"
            >
              <div className="mt-10 flex flex-1 flex-col items-center lg:mt-0 lg:tracking-wide">
                <div className="mx-4 flex flex-col items-center sm:mx-8 md:mx-16 lg:mx-44">
                  <h2 className="mb-4 text-center text-lg font-extrabold text-gray-800 sm:text-xl lg:text-2xl">
                    NO CORAÇÃO DE SANTARÉM
                  </h2>
                  <div className="text-center">
                    <p className="text-base font-normal text-gray-800 sm:text-lg md:text-xl lg:text-xl">
                      Localizado próximo ao Parque da Cidade, na travessa Silva
                      Jardim, entre a Avenida Bartolomeu de Gusmão e a Rua
                      Coraci Nunes.
                    </p>
                    <p className="mb-4 mt-4 text-base text-gray-800 sm:text-lg md:text-xl lg:text-xl">
                      Horário de funcionamento:
                      <br />
                      Segunda a Sexta: 12h - 15h / 17h - 22h
                      <br />
                      Sábado: 12h - 22h
                      <br />
                      Domingo: 12h - 21h30
                    </p>
                  </div>
                </div>
              </div>

              <div
                id="maps"
                className="flex h-80 w-full flex-1 overflow-hidden"
              >
                <GoogleMap />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
