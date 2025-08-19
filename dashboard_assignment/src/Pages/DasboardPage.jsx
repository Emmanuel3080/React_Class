import React, { useEffect } from "react";
import Header from "../Components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DasboardPage = () => {
  const [token, useToken] = useState(localStorage.getItem("token") || "");
  const [userProfile, setUserProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = localStorage.getItem("token");
    if (!checkToken) {
      alert("Token Not Provided");
      useToken(checkToken);
      navigate("/signin");
    } else {
      alert(`Welcome to dashboard`);
    }
  }, [token]);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const tokenVerify = async () => {
    try {
      const response = await fetch(`${baseUrl}/user/verify-token`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.status == "success") {
        setUserProfile(data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!token) {
      return;
    } else {
      tokenVerify();
    }
  }, [token]);
  return (
    <div>
      <div>
        <Header name={userProfile.name} />
        {/* {token} */}
        <div className="profileBody" style={{ padding: "10px 20px" }}>
          <h1 className="infoHead" style={{ fontSize: "20px" }}>
            Basic Information
          </h1>
          <p>
            Name : <b className="userInfo">{userProfile.name}</b>
          </p>
          <p>
            Email : <b className="userInfo">{userProfile.email}</b>
          </p>
          <p>
            UserId : <b className="userInfo">{userProfile._id}</b>
          </p>
          <p>
            Role : <b className="userInfo">{userProfile.role}</b>
          </p>
          <p>
            SubscriptionPlan : <b  className="userInfo"> {userProfile.subscriptionPlan}</b>
          </p>
          <p>
            IsUserVerified : <b  className="userInfo">{userProfile.isVerified ? "Yes" : "No"}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DasboardPage;
