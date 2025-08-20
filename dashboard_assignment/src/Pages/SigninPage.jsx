import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const navigate = useNavigate();
  const [loading, setLoding] = useState(false);
  const [error, handleError] = useState("")
//   const [submitting , setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

//   console.log(formData);

  const baseUrl = import.meta.env.VITE_BASE_URL;
  //   console.log(baseUrl);

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    setLoding(true);
    try {
      const response = await fetch(`${baseUrl}/user/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json()
      console.log(data);
      if(data.Status == "Success"){
        alert(`Welocomee ${data.User.name}`)
        localStorage.setItem("token", data.Token)
        navigate("/dashboard")
      }
      else if(data.Status == "error"){
        handleError(data.Message)
      }
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoding(false);
    }
  };
  return (
    <>
      <div className="form">
        <form className="formContainer" onSubmit={handleSubmission}>
          <h2 style={{ textAlign: "center" }}>Sign In</h2>
          <div>
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              placeholder="emma@gmail.com"
              id="email"
              required
              name="email"
              onChange={handleUserInput}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              placeholder="****"
              id="password"
              name="password"
              required
              onChange={handleUserInput}
            />
          </div>

          <div className="btns">
            <button type="submit" className="btnSubmit" disabled={loading}>
           {loading ? "Authenticating User..." : "Log in"}
            </button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <p>
            Don't have an account? <a href="/signup">Create Account</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SigninPage;
