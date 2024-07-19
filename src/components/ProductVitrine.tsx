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
            <Carousel className="mx-auto w-full max-w-lg">
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
                      className="h-[300px] w-[300px] rounded-lg"
                    />
                    <h2 className="mt-2 text-lg font-bold">{product.name}</h2>
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
