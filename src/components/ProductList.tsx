import React, { useState, useMemo, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from "lucide-react";
import ProductFetch from "../components/data/productFetch";
import { Button } from "./ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  typeDrink: string;
  image: {
    url: string;
  }[];
}

interface CardProductProps {
  product: Product;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="flex w-48 cursor-pointer flex-col rounded-lg p-4 shadow-2xl transition-transform hover:scale-105">
          <div className="relative h-40 w-40 rounded-lg bg-gray-200">
            <Image
              src={product.image[0]?.url}
              layout="fill"
              objectFit="cover"
              alt={`${product.name} image`}
              onLoadingComplete={handleImageLoad}
              className={`transition-opacity ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            />
          </div>
          <div className="mb-2 mt-2">
            <h2 className="text-sm font-bold">{product.name}</h2>
          </div>
          <p className="text-xs font-semibold">R$ {product.price}</p>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative flex h-[560px] w-[860px] flex-col items-center justify-center bg-customBeigeTwo p-6">
            <Dialog.Close asChild>
              <X className="absolute right-2 top-2 h-8 w-8 cursor-pointer p-2 text-3xl hover:text-red-500" />
            </Dialog.Close>

            <Image
              src={product.image[0]?.url}
              alt={`${product.name} image`}
              width={300}
              height={300}
              className="h-[250px] w-[300px] rounded-lg object-contain"
            />

            <div className="mt-4 flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <div className="mt-4 h-24 text-left text-sm">
                {product.description}
              </div>
              <p className="mt-4 text-lg font-semibold">R$ {product.price}</p>
              <div className="flex flex-row gap-2">
                <a className="mt-4 inline-block border-2 border-solid border-black bg-none px-4 py-2 text-black transition-colors">
                  Clique aqui para ver o vídeo
                </a>

                <a className="mt-4 inline-block border-2 border-solid border-black bg-none px-4 py-2 text-black transition-colors">
                  Clique aqui pedir pelo Whatsapp
                </a>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const ProductList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  const handleNextPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, []);

  const handlePreviousPage = useCallback(() => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }, []);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    [],
  );

  return (
    <ProductFetch currentPage={currentPage} itemsPerPage={itemsPerPage}>
      {(data, loading, error) => {
        const filteredProducts = useMemo(() => {
          return data?.products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        }, [data, searchTerm]);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;

        return (
          <>
            <div className="mx-8 flex w-full flex-col items-center justify-center">
              <div className="flex w-full flex-col items-center justify-center">
                <div className="mt-4 flex flex-col items-center justify-center">
                  <h1 className="text-center text-4xl font-semibold lg:text-6xl">
                    ENCONTRE
                  </h1>
                  <h2 className="text-md text-center font-light text-gray-800 lg:text-lg">
                    Aqui você pode buscar cervejas, vinhos, destilados entre
                    outros produtos
                  </h2>
                  <div className="relative mt-2 flex items-center lg:w-[600px]">
                    <FaSearch className="absolute left-3 h-4 text-gray-500" />
                    <Input
                      className="mx-2 h-10 w-full border-2 border-black bg-gray-100 pl-10 pr-4 text-base text-black transition-shadow duration-200 ease-in-out focus:shadow-lg focus:outline-none"
                      value={searchTerm}
                      placeholder="Use palavras chaves para encontrar seu produto"
                      onChange={handleSearch}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex h-auto max-w-7xl flex-col items-center justify-center bg-customBeige text-gray-800 md:w-[780px] lg:h-[780px] lg:w-[1100px]">
              <div className="grid h-full w-full grid-cols-1 items-center justify-start gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                {filteredProducts?.map((product) => (
                  <CardProduct key={product.id} product={product} />
                ))}
              </div>
              <Pagination className="p-2">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious onClick={handlePreviousPage} />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">{currentPage}</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext className="" onClick={handleNextPage} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </>
        );
      }}
    </ProductFetch>
  );
};

export default ProductList;
