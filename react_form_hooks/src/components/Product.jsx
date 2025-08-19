import React, { useState, useEffect } from "react";

const Products = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <div>
      <h1>Products Page</h1>

      <div className="body">
        {userData.map((item, index) => (
          <div key={index}>
            <div className="content">
              <img src={item.image} width={200} height={200} alt="" />
              <p>
                <b>Title</b> :{item.title}
              </p>
              <p>
                <b>Category</b>: {item.category}
              </p>
              <p>
                <b>Price</b>: {item.price}
              </p>
              <a href={`/single/${item.id}`}>View Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
