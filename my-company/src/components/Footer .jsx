import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <footer
      style={{
        backgroundColor: '#f4f4f4',
        color: '#333',
        textAlign: 'center',
        padding: '1rem',
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
      }}
    >
      <ul style={{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
      }}>
        <li 
          style={{
            margin: '.5rem'
            }}
            >
          <Link to="/" 
          style={{
            textDecoration: 'none', 
            fontSize: '1rem', 
            fontWeight: '700'
            }} 
            >
              Home
            </Link>
        </li>
        <li 
          style={{
            margin: '.5rem'
            }}
            >
          <Link to="about" 
          style={{
            textDecoration: 'none', 
            fontSize: '1rem', 
            fontWeight: '700',
            }} 
            >
              About
            </Link>
        </li>
        <li 
          style={{
            margin: '.5rem'
            }}
            >
          <Link to="services" 
          style={{
            textDecoration: 'none', 
            fontSize: '1rem', 
            fontWeight: '700'
            }} 
            >
              Services
            </Link>
        </li>
        <li 
          style={{
            margin: '.5rem'
            }}
            >
          <Link to="contact" 
          style={{
            textDecoration: 'none', 
            fontSize: '1rem', 
            fontWeight: '700'
            }} 
            >
              Contact
            </Link>
        </li>
      </ul>
      <p 
          style={{
            textAlign: 'center',
            fontSize: '.8rem',
            fontWeight: '700',
            color: '#333'
          }}>&copy; Hashim Baya Nassoro.All rights reserved.</p>
    </footer>
  )
}

export default Footer 
