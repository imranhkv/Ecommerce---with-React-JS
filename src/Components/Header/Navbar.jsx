import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
function Navbar() {

    return (
        <header>
            <div className='navbar'>
                <div className="container">
                    <div className="navbar-all">
                        <div className="navbar-left">
                            <nav>
                                <ul>
                                    <Logo />
                                    <li><NavLink to="/"> Home</NavLink></li>
                                    <li><NavLink to="/about"> About</NavLink></li>
                                    <li><NavLink to="/faq"> FAQ</NavLink></li>
                                    <li><NavLink to="/contact"> Contact</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="navbar-right">
                        <button><AiOutlineShoppingCart style={{fontSize:"24px"}} /></button>
                        <li><NavLink to="/profile" ><FaUserCircle style={{fontSize:"24px"}} /></NavLink></li>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
<script src="https://kit.fontawesome.com/748e80ba5e.js" crossorigin="anonymous"></script>
export default Navbar