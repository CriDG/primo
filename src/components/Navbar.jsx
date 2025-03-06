import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
    <>
    
     <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '10px', background: '#ddd' }}>
      <Link to="/storia">Storia</Link>
      <Link to='/'>Home</Link>
      <Link to='/registrati'>Registrati</Link>
    </nav>
    </>
  )
}
