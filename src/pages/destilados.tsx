"use client";

import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CardProduct } from "@/components/CardProduct";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

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

export default function Destilados() {
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

      <div className="grid grid-cols-4 gap-8 bg-gray-800 rounded-lg p-8 items-center justify-center ">
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

      <Footer />
    </div>
  );
}
