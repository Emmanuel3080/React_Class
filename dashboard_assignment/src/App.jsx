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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SigninPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/dashboard" element={<DasboardPage/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
