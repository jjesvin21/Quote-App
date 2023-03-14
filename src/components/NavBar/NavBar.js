import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className='Navbar'>
        <p className='linkp'><Link to='/'className='link' >Home</Link></p>
        <p className='linkp'><Link to='/bookmark' className='link'>Bookmark</Link></p>
    </div>
  )
}
