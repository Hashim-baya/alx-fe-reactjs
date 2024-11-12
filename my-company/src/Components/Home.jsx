import React from 'react'
import image from './images/HeroImage.jpg'

function Home() {
  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#13961F28',
      height: '80vh',
      }}>
         <h1 style={{ 
          textAlign: 'center', 
          color: 'rebeccapurple', 
          fontSize: '3rem', 
          fontWeight: '900'
      }}
          >
            Welcome to Our Company
          </h1>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img 
            src={image} 
            alt="Image" 
            height={300} 
            style={{
              borderRadius: '10%',
              margin: '4rem 2rem'
            }}
            />
            <p style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            fontWeight: '400',
            marginTop: '1rem'
         }}
         >
          We are dedicated to delivering excellence in all our services.
        </p>
          </div>
         
       </div>
  )
}

export default Home