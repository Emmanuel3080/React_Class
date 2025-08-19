import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log(formData);

  const handleUserInput = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(name, value);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (data.Status == "Success") {
        alert(`Sign In Successful, Welcome ${data.User.name}`);
        localStorage.setItem("token", data.Token);
        navigate("/home");
      } else if (data.Status == "error") {
        return setError("Emaail or password incorrect");
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

          <div className="btn">
            <button type="submit" className="btnSubmit">
              {loading ? "Authenticatingggg.." : "Sign In"}
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

export default SignInPage;
