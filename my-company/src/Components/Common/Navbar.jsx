import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <ul style={{ listStyleType: 'none', display: 'flex'}}>
                <li style={{margin: '1em'}}>
                    <Link  style={{textDecoration: 'none'}} to='/'>Home</Link>
                </li>
                <li style={{margin: '1em'}}>
                    <Link style={{textDecoration: 'none'}} to='about'>About</Link>
                </li>
                <li style={{margin: '1em'}}>
                    <Link style={{textDecoration: 'none'}} to='contact'>Contact</Link>
                </li>
                <li style={{margin: '1em'}}>
                    <Link style={{textDecoration: 'none'}} to='services'>Services</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar