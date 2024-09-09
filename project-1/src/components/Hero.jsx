import React from 'react'
import amazon from '../assets/amazon.png';
import flipcart from '../assets/flipkart.png';
import shoeimg from '../assets/shoe_image.png'
import '../App.css'

const Hero = () => {
  return (
    <main className='hero'>
      <div className='hero-content'>
        <h1>
          YOUR FEET
          DESERVE
          THE BEST
        </h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className='hero-btn'>
          <button className='first-btn'>Shop Now</button>
          <button  className="secondary-btn">Category</button>
        </div>

        <div className='shopping'>
          <p>Also Available On</p>

          <div className='brand-icons'>
            <img src={flipcart} alt="flipcart" />
            <img src={amazon} alt="amazon" />
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className='hero-image'>
        <img src={shoeimg} alt="boot" />
      </div>
    </main>
  )
}

export default Hero