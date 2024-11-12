import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh', minHeight: '100%', background: 'lightBlue'}}>
        <ul style={{ listStyleType: 'none', display: 'flex'}}>
            <li style={{margin: '1rem'}}>
                <Link style={{textDecoration: 'none', fontSize: '1.2rem', fontWeight: '700'}} to="/">Home</Link>
            </li>
            <li style={{margin: '1rem'}}>
                <Link style={{textDecoration: 'none', fontSize: '1.2rem', fontWeight: '700'}} to="about">About</Link>
            </li>
            <li style={{margin: '1rem'}}>
                <Link style={{textDecoration: 'none', fontSize: '1.2rem', fontWeight: '700'}} to="services">Services</Link>
            </li>
            <li style={{margin: '1rem'}}>
                <Link style={{textDecoration: 'none', fontSize: '1.2rem', fontWeight: '700'}} to="contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar