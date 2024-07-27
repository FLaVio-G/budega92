import React, { useState } from "react";
import ProductFetch from "./data/productFetch";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

export default function ProductVitrine() {
  const [currentPage] = useState(1);

  return (
    <div className="container mx-auto py-8">
      <ProductFetch currentPage={currentPage} itemsPerPage={6}>
        {(data, loading, error) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;

          return (
            <Carousel className="w-48 lg:mx-auto lg:w-full lg:max-w-lg">
              <CarouselContent>
                {data?.products.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="flex flex-col items-center"
                  >
                    <Image
                      width={1000}
                      height={1000}
                      src={product.image[0].url}
                      alt={product.name}
                      className="h-[250px] w-[200px] rounded-lg lg:h-[250px] lg:w-[250px]"
                    />
                    <h2 className="mt-2 text-lg font-normal">{product.name}</h2>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          );
        }}
      </ProductFetch>
    </div>
  );
}
