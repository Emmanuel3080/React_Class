import React, { use, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../Contexts/AuthContext";

const SignUpPage = () => {

  // console.log(signUp);
  // signUp()
  
  const {user, signUp} = useContext(authContext)
  const [loading, setLoading] = useState(false);
  const [userData , setUserData] = useState({})
  const [emailNotification, setEmailNotication] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  //   console.log(formData);

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const baseUrl = import.meta.env.VITE_BASE_URL;
  //   console.log(baseUrl);

  const handleSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);
    setEmailNotication(true)

    try {
      const response = await fetch(`${baseUrl}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (data.Status == "success") {
        setUserData(data.User)
        alert("Welcome Redirectinggg✅");
        setEmailNotication(data.EmailMessage);
        alert(data.EmailMessage)
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setEmailNotication(false)
    }
  };

  useEffect(()=>{
    signUp()
  },[authContext])
  return (
    <>
      <div className="form">
        <form className="formContainer" onSubmit={handleSubmission}>
          <h2 style={{ textAlign: "center" }}>Sign Up</h2>
          <div>
            <label htmlFor="email">Email: </label> <br />
            <input
              type="email"
              placeholder="emma@gmail.com"
              id="email"
              name="email"
              required
              onChange={handleUserInput}
            />
          </div>
          <div>
            <label htmlFor="full Name">Your Name: </label> <br />
            <input
              type="text"
              placeholder="Emmy"
              id="name"
              name="name"
              required
              onChange={handleUserInput}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label> <br />
            <input
              type="password"
              placeholder="****"
              id="password"
              name="password"
              required
              onChange={handleUserInput}
            />
          </div>

          {emailNotification ? `Sending Email Verification to ${userData.email}` : ""}
          {/* <p>{emailNotification}</p> */}
          {/* <p>{userData.email}</p> */}

          <div className="btns">
            <button type="submit" className="btnSubmit" disabled={loading}>
              {loading ? "Creatingg Acount.." : "Create Account"}
            </button>
          </div>
          <p>
            Already have an account?
            <a
              href="
          /signin"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
