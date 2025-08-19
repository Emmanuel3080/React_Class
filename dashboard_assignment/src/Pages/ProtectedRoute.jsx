import React, { useEffect, useState } from "react";
import { data, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const baseUrl = import.meta.env.VITE_BASE_URL;
  // console.log(baseUrl);

  const verifyToken = async () => {
    try {
      const response = await fetch(`${baseUrl}/user/verify-token`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.user) {
        alert("eieii")
        return data.user;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const user = verifyToken();

  const navigate = useNavigate();
  useEffect(() => {
    // const myToken = localStorage.getItem("token");
    if (!token || !user) {
      alert("No Token was provided , Log In Firstt");
      navigate("/signin");
    } else {
      alert("Welocomee");
      // alert(data.user)
    }
  }, []);
  return (
    <div>
      {/* <p> {user.name}</p> */}
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
