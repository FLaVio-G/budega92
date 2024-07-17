import React, { useState, useMemo, useCallback } from "react";
import { gql, useQuery } from "@apollo/client";
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

const GET_ALL_PRODUCT = gql`
  query AllProducts($first: Int!, $skip: Int!) {
    products(first: $first, skip: $skip) {
      description
      id
      name
      price
      typeDrink
      image {
        url
      }
    }
  }
`;

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
        <div className="flex cursor-pointer flex-col rounded-lg p-4 transition-transform hover:scale-105">
          <div className="relative h-28 w-full rounded-lg bg-gray-200">
            <Image
              src={product.image[0]?.url}
              layout="fill"
              objectFit="cover"
              alt={`${product.name} image`}
              onLoadingComplete={handleImageLoad}
              className={`transition-opacity ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            />
          </div>
          <h2 className="mt-4 text-lg font-bold text-red-500">
            {product.name}
          </h2>
          <p className="text-md font-semibold">R$ {product.price}</p>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative flex w-full max-w-4xl flex-col items-center justify-center rounded-lg bg-white p-6">
            <Dialog.Close asChild>
              <X className="absolute right-2 top-2 cursor-pointer bg-red-300 p-2 text-3xl hover:text-red-500" />
            </Dialog.Close>
            <Image
              src={product.image[0]?.url}
              alt={`${product.name} image`}
              width={300}
              height={300}
              objectFit="contain"
              className="rounded-lg"
            />
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <div className="mt-2 h-24 overflow-y-auto text-left text-sm">
                {product.description}
              </div>
              <p className="mt-4 text-lg font-semibold">R$ {product.price}</p>
              <a
                href="#"
                className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
              >
                Clique aqui para ver o vídeo
              </a>
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

  const { data, loading, error } = useQuery<{ products: Product[] }>(
    GET_ALL_PRODUCT,
    {
      variables: {
        first: itemsPerPage,
        skip: (currentPage - 1) * itemsPerPage,
      },
    },
  );

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
              Aqui você pode buscar cervejas, vinhos, destilados entre outros
              produtos
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
      <div className="mt-4 flex h-auto max-w-7xl flex-col items-center justify-center border-2 border-black bg-customBeige text-gray-800 md:w-[780px] lg:h-[780px] lg:w-[1100px]">
        <div className="grid h-full w-full grid-cols-1 items-center justify-start gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {filteredProducts?.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePreviousPage} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">{currentPage}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default ProductList;
