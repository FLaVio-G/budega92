import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <div className="flex mx-auto max-w-7xl flex-col">
        <Header />
        <main className="flex items-center  justify-center   w-full">
          <div className="lg:max-w-5xl w-auto  mx-4 relative">
            <Carousel>
              <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-900 cursor-pointer" />
              <CarouselContent>
                <CarouselItem className="p-2">
                  <img
                    className="w-full h-auto"
                    src="https://via.placeholder.com/800x400?text=Slide+1"
                    alt="Slide 1"
                  />
                </CarouselItem>
                <CarouselItem className="p-2">
                  <img
                    className="w-full h-auto "
                    src="https://via.placeholder.com/800x400?text=Slide+2"
                    alt="Slide 2"
                  />
                </CarouselItem>
                <CarouselItem className="p-2">
                  <img
                    className="w-full h-auto "
                    src="https://via.placeholder.com/800x400?text=Slide+3"
                    alt="Slide 3"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-900 cursor-pointer" />
            </Carousel>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
