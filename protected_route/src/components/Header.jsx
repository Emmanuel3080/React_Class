import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="head" style={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
        <div className="logo">
          {/* <img src={logo} className="cardImg" alt="Logo" srcset="" /> */}
          <h1 className="logoText">Emmanuel</h1>
        </div>
        <div className="middleNav">
          <ul className="navList">
            <li>
              <a href="" className="active">Home</a>
            </li>
            <li>
              <a href="/products"  className="active">Products</a>
            </li>
            <li>
              <a href=""  className="active">Contact Us</a>
            </li>
            <li>
              <a href=""  className="active">Services</a>
            </li>
          </ul>
        </div>
        <div className="btnBox">
            <button  className="btn"><a href="/signup">Sign Up</a></button>
        </div>
      </header>
    </div>
  )
}

export default Header