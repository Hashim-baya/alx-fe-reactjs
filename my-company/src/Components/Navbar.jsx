import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav 
        style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '15vh', 
            minHeight: '100%', 
            background: 'lightBlue',
            width: '100%',
            }}
        >
        <ul 
            style={{ 
                listStyleType: 'none', 
                display: 'flex'
                }}
        >
            <li 
                style={{
                    margin: '1rem'
                    }}
                >
                <Link to="/"
                    style={{
                        textDecoration: 'none', 
                        fontSize: '1.2rem', 
                        fontWeight: '700'}} 
                >
                            Home
                </Link>
            </li>
            <li 
                style={{
                    margin: '1rem'
                    }}
                >
                <Link to="about"
                    style={{
                        textDecoration: 'none', 
                        fontSize: '1.2rem', 
                        fontWeight: '700'}} 
                >
                            About
                </Link>
            </li>
            <li 
                style={{
                    margin: '1rem'
                    }}
                >
                <Link to="services"
                    style={{
                        textDecoration: 'none', 
                        fontSize: '1.2rem', 
                        fontWeight: '700'
                        }} 
                >
                            Services
                </Link>
            </li>
            <li 
                style={{
                    margin: '1rem'
                    }}
                >
                <Link to="contact"
                    style={{
                        textDecoration: 'none', 
                        fontSize: '1.2rem', 
                        fontWeight: '700'
                        }} 
                >
                            Contact
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar