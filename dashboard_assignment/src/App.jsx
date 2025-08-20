import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import SigninPage from "./Pages/SigninPage";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Home from "./Pages/Home";
import DasboardPage from "./Pages/DasboardPage";
import AuthProvider from "./Contexts/AuthContext";
import Products from "./Pages/Products";
import ProductProvider from "./Contexts/ProductContext";
import SingleProductsPage from "./Pages/singleProductsPage";
import SingleProdutsContextProvider from "./Contexts/SingleProdutsContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
          
              <Routes>
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/signin" element={<SigninPage />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/home" element={<Home />} />
                </Route>
                <Route path="/dashboard" element={<DasboardPage />} />
                <Route path="/products" element={<Products />} />

                <Route path="/single/:id" element={
                  <SingleProdutsContextProvider>
                    <SingleProductsPage/>
                  </SingleProdutsContextProvider>
                }/>
                
              </Routes>



              
            
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
