import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header">
        <a
          href="/home
        " className="head"
        >
          <div className="logo">
            <h1 className="logoText">Logo</h1>
          </div>
        </a>
        <div className="navList">
          <ul style={{ display: "flex", listStyle: "none", gap: "10px" }}>
            <li>
              <a href="/products" className="link">
                Products
              </a>
            </li>
            <li>
              <a href="" className="link">
                About
              </a>
            </li>
            <li>
              <a href="" className="link">
                Pricing
              </a>
            </li>
            <li>
              <a href="" className="link">
                Services
              </a>
            </li>
          </ul>
        </div>
        <div className="btn">
          <button>
            <a href="/form">Sign Up</a>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
