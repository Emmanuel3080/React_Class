import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const  navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  console.log(formData);

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    // console.log(value, name);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);

   
    try {
      const response = await fetch("http://localhost:3000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json()
      console.log(data);
      if(data.Status == "success"){
        alert(`Welcome ${data.User.name}`)
        navigate("/signin")
      }
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="form">
        <form className="formContainer" onSubmit={handleSubmission}>
          <h2 style={{ textAlign: "center" }}>Sign Up</h2>
          <div>
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              placeholder="emma@gmail.com"
              id="email"
              name="email" required
              onChange={handleUserInput}
            />
          </div>
          <div>
            <label htmlFor="full Name">Your Name</label> <br />
            <input
              type="text"
              placeholder="Emmy"
              id="name"
              name="name" required
              onChange={handleUserInput}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              placeholder="****"
              id="password"
              name="password" required
              onChange={handleUserInput}
            />
          </div>

          <div className="btn">
            <button type="submit" className="btnSubmit" >
              {loading ? "Creating Account...." : "Create Account"}
            </button>
          </div>
          <p>Already have an account ? <a href="
          /signin">Login</a></p>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
