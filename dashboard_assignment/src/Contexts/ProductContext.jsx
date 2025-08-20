import React, { createContext, useState } from "react";

export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const fakeStoreUrl = import.meta.env.VITE_FAKESTORE;

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${fakeStoreUrl}/products`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const productValue = {
    fetchProducts,
    products,
    loading,
  };
  return (
    <productContext.Provider value={productValue}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
