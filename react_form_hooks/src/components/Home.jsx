import React from 'react'
import LandImage from './LandImage'

const Home = () => {
  return (
    <div>
        <h1>My Home Pageee</h1>
        <div style={{display:"flex", alignItems:"center",gap:"10px"}}>
            <div className="image">
            <LandImage image="https://media.istockphoto.com/id/2166573931/photo/reflection-of-people-on-glass-window.webp?a=1&b=1&s=612x612&w=0&k=20&c=UdSzmftZeqCloH6onoK1t11jXsocSfv7QNJzTkwFfVU="/>
            </div>
            <div className="text">
                <h4 style={{fontFamily:"cursive"}}>Welcome To My Emmart Comapany</h4>
            </div>

        </div>
    </div>
  )
}

export default Home