import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex  w-full flex-col">
        <Header />
        <main className="flex items-center justify-center mt-[700px] w-full">
          <div className=" flex flex-col h-auto w-full  items-center justify-center  rounded-lg">
            <div className="lg:mx-0 mx-4 w-[850px] lg:p-10 items-center justify-center">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-lg font-extrabold text-gray-800 lg:text-lg lg:justify-start flex items-center justify-center mb-4">
                  NOSSA HISTÓRIA
                </h1>
                <p className="font-normal text-gray-800 text-center lg:text-xl text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  minus similique consequatur, enim ab vel quae maxime incidunt
                  velit saepe neque magnam sit, debitis aliquam ipsum amet
                  laborum nostrum dolorum. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Illum soluta, repellat nihil
                  magni quaerat eligendi praesentium odio. Quod accusantium
                  autem cupiditate saepe labore et distinctio minima, laudantium
                  eligendi vero ad? Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Repudiandae sequi odit aliquid autem
                  provident corrupti nostrum corporis excepturi molestias nobis,
                  necessitatibus, illo est tenetur, explicabo dolor veniam!
                  Consequatur, nesciunt autem. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Ut, assumenda! Voluptate odit
                  distinctio culpa dolore totam dignissimos quos, facilis
                  perferendis, numquam itaque ab pariatur amet iste dolor a
                  aspernatur tenetur.
                </p>
                <div className="flex lg:text-5xl lg:tracking-wide"></div>
              </div>
            </div>
            <div className=" flex flex-row w-full items-center justify-between p-1">
              <div className="flex flex-1 items-center  lg:text-5xl lg:tracking-wide">
                <p className="font-normal text-gray-800 text-center lg:text-xl text-base">
                  The Ring Bar, is a traditional English pub with a twist.
                  Located between Waterloo & Southwark, we have a brilliant beer
                  selection and authentic Thai menu to match. Sat back from the
                  Southbank we offer both takeaway and delivery on our food
                  menu, as well as an extensive wine and beer selection.
                </p>
              </div>
              <div className="flex items-center justify-end flex-1 w-full h-80 overflow-hidden">
                <Image
                  src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
                  className=""
                  width={800}
                  height={500}
                  alt={""}
                />
              </div>
            </div>

            <div className=" flex flex-row w-full  ">
              <div className="flex items-center bg-red-400   w-[1200px] h-[800px] overflow-hidden">
                <Image
                  src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
                  className=""
                  width={1200}
                  height={800}
                  alt={""}
                />
              </div>
              <div className="flex flex-1 flex-col items-center mx-32 w-2 h-2  lg:text-5xl ">
                <h2 className="lg:text-xl text-base  mt-10 font-bold mb-4">
                  Menu de produtos
                </h2>
                <p className="text-center mt-6 lg:text-xl text-base mb-4">
                  Our authentic Thai food, 'Johnny Rice,' is available at The
                  Ring. Grab your takeaway boxes from the Curry Shack or enjoy
                  our full authentic à la carte menu throughout the day.
                </p>
                <p className="text-gray-800 mt-4 text-center lg:text-xl text-base mb-4 ">
                  The Ring Bar, is a traditional English pub with a twist.
                  Located between Waterloo & Southwark, we have a brilliant beer
                </p>
                <div className="h-[600px] w-[300px] bg-red-400">
                  <Image
                    src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
                    className=""
                    width={1200}
                    height={800}
                    alt={""}
                  />
                </div>
              </div>
            </div>
            <div
              id="map-view"
              className=" flex flex-row w-full  items-center justify-between p-1"
            >
              <div className="flex flex-1 flex-col  items-center  lg:tracking-wide">
                <div className="mx-44 flex flex-col items-center">
                  <h2 className="text-lg font-extrabold text-gray-800 lg:text-lg lg:justify-start flex items-center justify-center mb-4">
                    Como encontrar o Bar budega92?
                  </h2>
                  <p className="font-normal text-gray-800 text-center lg:text-xl text-base">
                    Localizado próximo ao Parque da Cidade, na travessa Silva
                    Jardim, entre a Avenida Bartolomeu de Gusmão e a Rua Coraci
                    Nunes.
                  </p>
                  <p className="text-gray-800 mt-4 text-center lg:text-xl text-base mb-4">
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
              <div className="flex flex-1 w-full h-80 overflow-hidden">
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
