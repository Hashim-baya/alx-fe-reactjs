import React from 'react'
import image from './images/About.jpg'
import image1 from './images/AboutUs.jpg'
import image2 from './images/OurCompany.jpg'

function About() {
  return (
    <div 
      style={{ 
        padding: '8vh' 
        }}
      >
    <h1 
      style={{
        textAlign: 'center', 
        color: 'rebeccapurple', 
        fontSize: '3rem', 
        fontWeight: '900'
    }}
    >
      About Us
    </h1>
    <p 
      style={{
        textAlign: 'center',
        fontSize: '1.2rem',
        fontWeight: '400',
        marginTop: '1rem'
    }}
    >
      Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
    </p>
    <div 
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: '4rem 0'
      }}
    >
      <img 
        src={image} 
        alt="Passion"  
        height={300}
      />
      <img 
        src={image1} 
        alt="About Us"  
        height={300}
      />
      <img 
        src={image2}
        alt="Our Company" 
        height={300}
      />
    </div>
  </div>
  )
}

export default About