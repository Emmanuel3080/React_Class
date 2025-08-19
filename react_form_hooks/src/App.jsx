import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import Products from './components/product'
import Layout from './components/layout'
import SingleProduct from './components/SingleProduct'
import SignUp from './components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    {/* <Header/> */}
    <Routes>
      <Route element={<Layout/>}>
    <Route path='/home' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
      </Route>
    <Route path='/single/:id' element={<SingleProduct/>}/>
    <Route path='/form' element={<SignUp/>}/>

    {/* <Route/> */}
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
