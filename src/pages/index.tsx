import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";

import { DialogFooter, DialogHeader } from "@/components/ui/dialog";

import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col">
        <Header />
        <main className="mt-[700px] flex w-full items-center justify-center">
          <div className="flex h-auto w-full flex-col items-center justify-center rounded-lg">
            <div className="mx-4 w-[850px] items-center justify-center lg:mx-0 lg:p-10">
              <div className="flex flex-col items-center justify-center">
                <h1 className="mb-4 flex items-center justify-center text-lg font-extrabold text-gray-800 lg:justify-start lg:text-lg">
                  NOSSA HISTÓRIA
                </h1>
                <p className="mb-4 text-center text-base font-normal text-gray-800 lg:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  minus similique consequatur, enim ab vel quae maxime incidunt
                  velit saepe neque magnam sit, debitis aliquam ipsum amet
                  laborum nostrum dolorum. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Illum soluta, repellat nihil
                  magni quaerat eligendi praesentium odio. Quod accusantium
                  autem cupiditate saepe labore et distinctio minima, laudantium
                  eligendi vero ad?
                </p>
                <p className="mb-4 text-center text-base font-normal text-gray-800 lg:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repudiandae sequi odit aliquid autem provident corrupti
                  nostrum corporis excepturi molestias nobis, necessitatibus,
                  illo est tenetur, explicabo dolor veniam! Consequatur,
                  nesciunt autem.
                </p>
                <p className="text-center text-base font-normal text-gray-800 lg:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  assumenda! Voluptate odit distinctio culpa dolore totam
                  dignissimos quos, facilis perferendis, numquam itaque ab
                  pariatur amet iste dolor a aspernatur tenetur.
                </p>
                <div className="flex lg:text-5xl lg:tracking-wide"></div>
              </div>
            </div>
            <div className="flex w-full flex-row items-center justify-between p-1">
              <div className="flex flex-1 flex-col items-center lg:text-5xl lg:tracking-wide">
                <h2 className="mb-4 mt-10 text-base font-bold lg:text-xl">
                  BEBIDAS REGIONAIS
                </h2>
                <p className="text-center text-base font-normal text-gray-800 lg:text-xl">
                  Aqui você encontrará uma variedade de bebidas regionais do
                  Pará, incluindo a tradicional cachaça de jambu. Além disso,
                  oferecemos diversos produtos populares no mercado, como
                  cervejas, vinhos e muito mais.
                </p>
              </div>
              <div className="flex h-80 w-full flex-1 items-center justify-end overflow-hidden">
                <Image
                  src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
                  className=""
                  width={800}
                  height={500}
                  alt={""}
                />
              </div>
            </div>

            <div className="flex w-full flex-row">
              <div className="flex h-[800px] w-[1200px] items-center overflow-hidden bg-red-400">
                <Image
                  src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
                  className=""
                  width={1200}
                  height={800}
                  alt={""}
                />
              </div>
              <div className="mx-32 flex h-2 w-2 flex-1 flex-col items-center lg:text-5xl">
                <h2 className="mb-4 mt-10 text-base font-bold lg:text-xl">
                  MENU DE PRODUTOS
                </h2>
                <p className="mb-4 mt-6 text-center text-base lg:text-xl">
                  Aqui você encontrará uma variedade de bebidas regionais do
                  Pará, incluindo a tradicional cachaça de jambu.
                </p>
                <p className="mb-4 mt-4 text-center text-base text-gray-800 lg:text-xl">
                  Além disso, oferecemos diversos produtos populares no mercado,
                  como cervejas, vinhos e muito mais.
                </p>

                <div className="flex flex-col items-center justify-center">
                  <Carousel className="w-full max-w-sm">
                    <CarouselContent className="-ml-1 w-full">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <Image
                                src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
                                className="h-full w-full object-cover"
                                width={500}
                                height={500}
                                alt="Imagem da bebida"
                              />
                            </CardContent>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  <div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="rounded-none border-2 border-black"
                          variant="customOne"
                        >
                          VER TODAS AS BEBIDAS
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="fixed inset-0 flex w-full flex-col items-center justify-center bg-customBeige">
                        <ProductList />
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button type="button" variant="secondary">
                              Voltar
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="map-view"
              className="flex w-full flex-row items-center justify-between p-1"
            >
              <div className="flex flex-1 flex-col items-center lg:tracking-wide">
                <div className="mx-44 flex flex-col items-center">
                  <h2 className="mb-4 flex items-center justify-center text-lg font-extrabold text-gray-800 lg:justify-start lg:text-lg">
                    NO CORAÇÃO DE SANTARÉM
                  </h2>
                  <p className="text-center text-base font-normal text-gray-800 lg:text-xl">
                    Localizado próximo ao Parque da Cidade, na travessa Silva
                    Jardim, entre a Avenida Bartolomeu de Gusmão e a Rua Coraci
                    Nunes.
                  </p>
                  <p className="mb-4 mt-4 text-center text-base text-gray-800 lg:text-xl">
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
              <div className="flex h-80 w-full flex-1 overflow-hidden">
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
