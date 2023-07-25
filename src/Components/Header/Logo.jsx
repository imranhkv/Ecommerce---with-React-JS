import React from 'react'
import "./Logo.css"
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div>
        <Link to="/" style={{fontSize:"22px",fontWeight:"600",fontFamily:"Arial", color:"#000"}} >E-Commerce</Link>
        
    </div>
  )
}

export default Logo