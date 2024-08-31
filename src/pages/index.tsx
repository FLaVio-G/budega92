import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import * as Dialog from "@radix-ui/react-dialog";

import ProductList from "@/components/ProductList";
import ProductVitrine from "@/components/ProductVitrine";
import SimpleMap from "@/components/GoogleMap";
import budegaThree from "../../public/images/IMG_1942.jpg";
import budegaSecond from '../../public/images/IMG_5206.jpg'

export default function Home() {
  return (
    <>
      <div id="inicio" className="flex w-full flex-col">
        <Header />
        <main className="flex w-full items-center justify-center sm:mt-4 md:mt-4 lg:mt-[700px]">
          <div
            id="sobre"
            className="flex h-auto w-full flex-col items-center justify-center rounded-lg"
          >
            <div className="mx-4 w-full items-center justify-center sm:mx-4 sm:p-4 md:mx-8 md:p-8 lg:mx-0 lg:w-[850px] lg:p-10">
              <div className="mb-4 flex flex-col items-center justify-center">
                <h1 className="mb-4 flex items-center justify-center text-lg font-extrabold text-gray-800 sm:text-xl lg:justify-start lg:text-lg">
                  NOSSA HISTÓRIA
                </h1>
                <p className="mb-4 text-center text-base font-normal text-gray-800 sm:text-lg md:text-xl lg:text-xl">
                  A Budega 92 nasceu em Santarém com o objetivo de oferecer uma
                  seleção exclusiva de bebidas para todos os gostos. Nossa
                  paixão por vinhos, destilados e cervejas artesanais nos levou
                  a criar um espaço único, onde cada garrafa conta uma história.
                </p>
                <p className="mb-4 text-center text-base font-normal text-gray-800 sm:text-lg md:text-xl lg:text-xl">
                  Valorizamos a qualidade e a autenticidade, trabalhando
                  diretamente com produtores locais e internacionais para trazer
                  aos nossos clientes os rótulos mais especiais e autênticos.
                </p>
                <p className="text-center text-base font-normal text-gray-800 sm:text-lg md:text-xl lg:text-xl">
                  Visite a Budega 92 e descubra uma nova experiência em bebidas
                  exclusivas, com um atendimento personalizado e produtos que
                  não se encontram em nenhum outro lugar da região.
                </p>
              </div>
            </div>
            <div className="sm:flex:row m-0 mb-4 flex w-full flex-col-reverse items-center justify-between p-0 md:flex-row lg:mb-0 lg:flex-row">
              <div className="flex flex-1 flex-col items-center lg:text-5xl lg:tracking-wide">
                <h2 className="mb-4 text-base font-bold sm:text-lg lg:mt-10 lg:text-xl">
                  BEBIDAS REGIONAIS
                </h2>
                <p className="text-center text-base font-normal text-gray-800 sm:text-lg md:text-xl lg:text-xl">
                  Oferecemos uma ampla seleção de produtos populares, incluindo
                  cervejas, vinhos e muito mais. Para ajudar você a escolher o
                  destilado ideal, disponibilizamos degustações, garantindo que
                  você encontre exatamente o que procura e saia satisfeito com
                  sua escolha.
                </p>
              </div>

              <div className="w-full flex-1 items-center justify-end overflow-hidden lg:h-80 lg:sm:md:flex">
                <Image
                  src={budegaSecond}
                  alt="Fotos de bebidas"
                  width={3840}
                  height={2160}
                  priority
                  style={{
                    objectFit: "cover", 
                    objectPosition: "center",
                  }}
                />
              </div>
            </div>

            <div className="flex w-full flex-col lg:flex-row lg:justify-between">
              <div className="flex h-[200px] w-full items-center overflow-hidden sm:h-[400px] md:h-[600px] lg:h-[800px] lg:w-full">
                <Image
                  src={budegaThree}
                  alt="Descrição da imagem"
                  style={{
                    objectFit: "fill",
                    objectPosition: "top",
                    width: "100%",
                    height: "auto",
                  }}
                  priority
                />
              </div>
              <div
                id="bebidas"
                className="flex h-full w-full flex-col lg:mx-0 lg:my-0 lg:h-[800px] lg:w-[800px] lg:text-5xl"
              >
                <div className="lg:full flex flex-col items-center justify-center lg:mx-0 lg:my-0 lg:w-full">
                  <div className="mb-4 flex flex-col items-center justify-center lg:mt-10">
                    <h2 className="text-base font-bold sm:text-lg lg:text-xl">
                      MENU DE PRODUTOS
                    </h2>
                  </div>
                  <div className="mb-4 flex w-[280px] flex-col items-center justify-center text-center lg:mt-6 lg:w-[350px]">
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl">
                      Aqui você encontrará uma variedade de bebidas regionais do
                      Pará, incluindo a tradicional cachaça de jambu.
                    </p>
                  </div>
                  <div className="mb-4 w-[280px] flex-col items-center justify-center text-center text-gray-800 lg:w-[350px]">
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl">
                      Além disso, oferecemos uma seleção premium de destilados e
                      vinhos exclusivos. Nossa oferta inclui rótulos
                      sofisticados e edições limitadas, cuidadosamente
                      escolhidos para proporcionar uma experiência única.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col">
                    <ProductVitrine />
                    <div className="flex flex-col items-center justify-center">
                      <Dialog.Root>
                        <Dialog.Trigger asChild>
                          <Button
                            className="w-[200px] rounded-none border-2 border-black"
                            variant="customOne"
                          >
                            VER TODAS AS BEBIDAS
                          </Button>
                        </Dialog.Trigger>
                        <Dialog.Portal>
                          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                          <Dialog.Content className="fixed inset-0 flex w-full flex-col items-center justify-center bg-customBeigeTwo p-4">
                            <Dialog.Title className="sr-only">
                              Lista de Bebidas
                            </Dialog.Title>
                            <Dialog.Description className="sr-only">
                              Aqui estão todas as bebidas disponíveis.
                            </Dialog.Description>
                            <Dialog.Close asChild>
                              <Button
                                type="button"
                                className="fixed right-4 top-4 rounded-none border-2 border-black lg:w-[100px] below290:w-[30px] below290:text-xs"
                                variant="customOne"
                              >
                                Voltar
                              </Button>
                            </Dialog.Close>
                            <ProductList />
                          </Dialog.Content>
                        </Dialog.Portal>
                      </Dialog.Root>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="map-view"
              className="flex w-full flex-col items-center justify-between lg:mt-0 lg:flex-row"
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
                      Segunda a Domingo: 09h - 13h / 15h - 00h
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="maps"
                className="flex h-64 w-full overflow-hidden sm:h-80 md:h-96 lg:h-80 lg:w-[800px]"
              >
                <SimpleMap />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
