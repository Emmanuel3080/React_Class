import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Home from './components/Home'
import LayoutComponents from './components/layoutComponents'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import GetAllProducts from './pages/GetAllProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     


    <BrowserRouter>
    <Routes>
      <Route element={<LayoutComponents/>}>
      <Route path='/home' element={<Home/>}/>
      <Route path='/products' element={<GetAllProducts/>}/>
      </Route>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/signin' element={<SignInPage/>}/>
    </Routes>
    
    </BrowserRouter>
    
    {/* <Signup/> */}
    
    </>
  )
}

export default App
