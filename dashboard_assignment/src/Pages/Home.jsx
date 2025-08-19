import React from "react";
import Header from "../Components/Header";

const Home = () => {

  const verifyToken = async()=>{
    try {
      const response = await fetch(``)
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div>
      <div>
        <Header />
      </div>
      <h1>My Dashboard</h1>
      {/* {token} */}
    </div>
  );
};

export default Home;
