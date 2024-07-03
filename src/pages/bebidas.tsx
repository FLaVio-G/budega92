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
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex mx-auto max-w-7xl flex-col items-center justify-between">
      <Header />
      <div className="flex flex-col w-full items-center justify-center mx-8">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="relative lg:w-80">
            <Input
              className="bg-gray-100 w-full text-black rounded-lg h-10 pl-10 pr-4 border-none focus:outline-none focus:shadow-lg transition-shadow duration-200 ease-in-out"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="mt-4 flex items-center justify-center flex-col">
            <h1 className="lg:text-6xl text-4xl font-semibold text-center">
              Encontre
            </h1>
            <h2 className="lg:text-lg text-md mb-10 text-center text-gray-800 font-light">
              Aqui você pode buscar cervejas, vinhos, destilados entre outros
              produtos
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-customBeige text-gray-800 h-auto lg:w-[1100px] md:w-[780px] lg:h-[780px] max-w-7xl ">
        <div className="grid grid-cols-1 gap-4 w-full h-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 items-center  justify-start">
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
