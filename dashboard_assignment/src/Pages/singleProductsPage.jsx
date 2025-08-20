import React, { useContext, useEffect } from "react";
import  { singleContext } from "../Contexts/SingleProdutsContext";

const SingleProductsPage = () => {
  const { fetchSingleProducts, products , loading } = useContext(singleContext)

  useEffect(() => {
    fetchSingleProducts();
  },[]);
  console.log(products);
  
  // console.log(products);

  return <div>SingleProductsPage</div>;
};

export default SingleProductsPage;
