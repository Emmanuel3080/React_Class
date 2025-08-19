import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const navigate = useNavigate()
  const myToken = localStorage.getItem("token")

  const baseURl = import.meta.env.VITE_BASE_URL 
  console.log(baseURl)
  

  const verifyToken = async()=>{
    try {
      // const verifyToken = await fetch(`${ba})
      }
       catch (error) {
      
    }
  }

  useEffect(()=>{
    if(!myToken){
      navigate("/signin")
    }
    else{
      alert(`Welocomeee Jhorrr`)
    }
  })
  return (
    <div>
        
        <h1>My Homeeeeeee</h1>
    </div>
  )
}

export default Home