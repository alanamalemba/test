import React from "react";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../features/apiSlice";

export default function Data() {
  const { data } = useGetAllProductsQuery();
  const { data: productData } = useGetProductQuery("iphone");

  console.log(productData);

  return <div>Data</div>;
}
