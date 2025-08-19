import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const [userData, setUserData] = useState({})

    const {id} = useParams()
    console.log(id);
    

    const getSingleProducts = async()=>{
        try {
            const  response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            console.log(data);
            setUserData(data)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getSingleProducts()
    }, [])

  return (
    <div>
        {/* <h1>dkkkkkkkk</h1> */}
        <img src={userData.image} width={400} height={400} alt="" />
        <p> <b>Title</b>: {userData.title}</p>
        <p> <b>Title</b>: {userData.category}</p>
        <p> <b>Price</b>: {userData.price}</p>
        <button><a href="/products">Back To Shopping</a></button>
        <button><a href="/home">Go Home</a></button>

    </div>
  )
}

export default SingleProduct