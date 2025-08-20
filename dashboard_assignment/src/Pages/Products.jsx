import React, { useContext, useEffect } from "react";
import { productContext } from "../Contexts/ProductContext";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";

const Products = () => {


  // const {id} = useParams(/)
  const { fetchProducts, products, loading } = useContext(productContext);

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <div>
      <Header />
      <h1>All Products Page</h1>
      {loading ? (
        "Loadinng..."
      ) : (
        <>
          {products.length == 0 ? (
            <h1>No results</h1>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "1rem",
                margin: "4rem ",
              }}
            >
              {products.map((item) => (
                <div style={{ border: "1px solid", padding: "10px" }}>
                  <img src={item.image} alt="" width={300} height={200} />
                  <p>{item.title}</p>
                  <a href={`/single/${item.id}`}>View Details</a>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
