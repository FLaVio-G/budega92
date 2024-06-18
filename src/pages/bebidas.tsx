"use client";

import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CardProduct } from "@/components/CardProduct";
import { gql, useQuery } from "@apollo/client";
import type { SearchProps } from "antd/es/input/Search";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const GET_ALL_PRODUCT = gql`
  query AllProducts {
    products {
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

export default function Bebidas() {
  const [showOverlay, setShowOverlay] = useState(false);
  const { data, loading, error } = useQuery<AllProductsData>(GET_ALL_PRODUCT);

  const handleClick = () => {
    setShowOverlay(true);
  };

  const handleClose = () => {
    setShowOverlay(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data?.products);

  return (
    <div className="flex mx-auto max-w-7xl flex-col items-center justify-between">
      <Header />
      <div className=" flex flex-col w-full items-center justify-center ">
        <div className=" flex flex-col justify-center items-center">
          <div className="relative w-full">
            <Input className="bg-gray-100 w-full text-black rounded-lg h-10 pl-10 pr-4 border-none focus:outline-none focus:shadow-lg transition-shadow duration-200 ease-in-out" />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="mt-4 flex items-center justify-center flex-col">
            <h1 className="lg:text-6xl font-semibold">Encontre</h1>
            <h2 className="lg:text-lg mb-10 text-gray-800 font-light">
              Aqui você pode buscar cervejas, vinhos, destilidados entre outros
              produtos
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-gray-100  text-gray-800 rounded-lg h-[500px]    lg:w-[1100px] md:w-[780px] lg:h-[780px] max-w-7xl  items-center justify-center ">
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-4  w-full h-full ">
          {data?.products.map((product) => (
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
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <Footer />
    </div>
  );
}
