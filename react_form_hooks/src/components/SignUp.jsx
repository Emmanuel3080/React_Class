import React, { useState } from "react";

const SignUp = () => {

    const [form, setUserData] = useState({
        name : "",
        email : "",
        password : ""
    })

    console.log(form);
    
    const handlelogin = (e)=>{
    const {name,value} = e.target
    // console.log(name);
    // console.log(value);
    setUserData((prev)=>({
        ...prev,[name]:value
    }))
    
    }
  return (
    <div>
      <div className="formContainer">
        <form className="form">
          <h1 style={{ textAlign: "center" }}>Sign Up page</h1>
          <div className="formInput">
            <input type="text" placeholder="Name" name="name"  onChange={handlelogin}/>
          </div>
          <div className="formInput">
            <input type="email" placeholder="name@dev.com" name="email" onChange={handlelogin} />
          </div>
          <div className="formInput">
            <input type="password" placeholder="****" name="password" onChange={handlelogin} />
          </div>

          <div className="btn">
            <button className="btn-box">
              <a className="link" href="/home">
                Create Account
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
