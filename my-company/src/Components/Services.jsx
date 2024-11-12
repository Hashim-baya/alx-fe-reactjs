import React from 'react'
import image from './images/Services.jpg'
import image1 from './images/Services1.jpg'
import image2 from './images/Services2.jpg'

function Services() {
  return (
    <div 
    height={300}
      style={{ 
        padding: '20px' 
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
          Our Services
        </h1>
         <ul 
            style={{
              listStyleType: 'none',
              textAlign: 'center',
              margin: '2rem 0'
            }}
         >
           <li
            style={{
              fontSize: '1.2rem',
              fontWeight: '400',
            }}
           >
            Technology Consulting
          </li>
           <li 
            style={{
              fontSize: '1.2rem',
              fontWeight: '400',
            }}
           >
            Market Analysis
          </li>
           <li 
            style={{
              fontSize: '1.2rem',
              fontWeight: '400',
            }}
           >
            Product Development
          </li>
         </ul>
         <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '4rem 0'
        }}
         >
          <img 
            src={image} 
            alt="Services" 
            height={300}
            style={{
              borderRadius: '10%',
            }}
          />
          <img 
            src={image1} 
            alt="Services" 
            height={300}
            style={{
              borderRadius: '10%',
            }}
          />
          <img 
            src={image2} 
            alt="Services" 
            height={300}
            style={{
              borderRadius: '10%',
            }}
          />
         </div>
       </div>
  )
}

export default Services