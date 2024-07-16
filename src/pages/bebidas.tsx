import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CardProduct } from "@/components/CardProduct";
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

interface AllProductsData {
  products: Product[];
}

const Bebidas: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Default items per page
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error } = useQuery<AllProductsData>(GET_ALL_PRODUCT, {
    variables: {
      first: itemsPerPage,
      skip: (currentPage - 1) * itemsPerPage,
    },
    onError: (err) => {
      console.error("Error loading products:", err);
    },
  });

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredProducts = data?.products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between">
      <Header />
      <div className="mx-8 flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative lg:w-80">
            <Input
              className="h-10 w-full rounded-lg border-none bg-gray-100 pl-10 pr-4 text-black transition-shadow duration-200 ease-in-out focus:shadow-lg focus:outline-none"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
          </div>
          <div className="mt-4 flex flex-col items-center justify-center">
            <h1 className="text-center text-4xl font-semibold lg:text-6xl">
              Encontre
            </h1>
            <h2 className="text-md mb-10 text-center font-light text-gray-800 lg:text-lg">
              Aqui você pode buscar cervejas, vinhos, destilados entre outros
              produtos
            </h2>
          </div>
        </div>
      </div>
      <div className="flex h-auto max-w-7xl flex-col items-center justify-center bg-customBeige text-gray-800 md:w-[780px] lg:h-[780px] lg:w-[1100px]">
        <div className="grid h-full w-full grid-cols-1 items-center justify-start gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {filteredProducts?.map((product) => (
            <CardProduct
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              typeDrink={product.typeDrink}
              urlImage={product.image[0]?.url}
            />
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
      <Footer />
    </div>
  );
};

export default Bebidas;
