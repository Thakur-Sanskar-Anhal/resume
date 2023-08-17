import React from 'react'
import profile from './images/profileImg.png'

function Hero() {
  return (
    <>
        {/* <!-- heading --> */}

        <div className="hero">
            <div className="name">
                Sanskar Anhal
            </div> 
            <img className="profile-img" src={profile} alt="profile pic" /> 
        </div>

        
    </>
  )
}

export default Hero
