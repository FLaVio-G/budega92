import React, { ReactNode } from "react";
import { gql, useQuery } from "@apollo/client";

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

interface ProductFetchProps {
  currentPage: number;
  itemsPerPage: number;
  children: (
    data: { products: Product[] } | undefined,
    loading: boolean,
    error: any,
  ) => ReactNode;
}

const ProductFetch: React.FC<ProductFetchProps> = ({
  currentPage,
  itemsPerPage,
  children,
}) => {
  const { data, loading, error } = useQuery<{ products: Product[] }>(
    GET_ALL_PRODUCT,
    {
      variables: {
        first: itemsPerPage,
        skip: (currentPage - 1) * itemsPerPage,
      },
    },
  );

  return <>{children(data, loading, error)}</>;
};

export default ProductFetch;
