import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetAllProducts = () => {
  const myToken = localStorage.getItem("token");

  const [token, setToken] = useState("");
  const naviagate = useNavigate();
  const [product, setProducts] = useState([]);
  const [userData, setUserData] = useState({});
  // console.log(baseUrl);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const verifyToken = async () => {
    try {
      const response = await fetch(`${baseUrl}/user/verify-token`, {
        headers: {
          authorization: `Bearer ${myToken}`,
        },
      });
      // console.log(response);
      const data = await response.json();
      console.log(data);
      // const user = data.user
      if (data.status == "success") {
        setUserData(data.user);
        // return data.user;
      }
      
      // const data = await response.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
      // return null;
    }
  };
  // const userVerify = verifyToken();
  useEffect(() => {
    if (myToken) {
      verifyToken();
    }
  }, []);
  
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/product/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myToken}`,
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.Status == "Successful") {
        setProducts(data.AllProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchProducts();
    const savedToken = localStorage.getItem("token");
    if (!savedToken) {
      alert("Token Not Available");
      naviagate("/signin");
    } else {
      // alert(`Welcome ${userData.name}`)
      setToken(savedToken)
      // alert(`Welcome ${userData.name}`)
    }
  }, []);
  return (
    <div>
      <div style={{ border: "1px solid purple", padding: "10px" }}>
        <p>Token : {token}</p>
      </div>

      <div>
        <p>
          Welcome Name:<b>{userData.name}</b> <br />
          <br />
          {userData.name}: <b>{userData.email}</b> <br />
          <br />
          Id : <b>{userData._id}</b>
        </p>
      </div>

      {product.map((item, index) => (
        <div key={index} style={{ border: "1px solid" }}>
          <h1>{item.name}</h1>
          <h1>{item.price}</h1>
        </div>
      ))}
    </div>
  );
};

export default GetAllProducts;
