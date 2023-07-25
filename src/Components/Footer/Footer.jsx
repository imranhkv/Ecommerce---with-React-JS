import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-content">
                    <div className="categories">
                        <h2>Categories</h2>
                        <p><Link to="/" >Woman</Link></p>
                        <p><Link to="/">Man</Link></p>
                        <p><Link to="/">Electronics</Link></p> 
                        <p><Link to="/">Jewelery</Link></p>
                    </div>
                    <div className="help">
                        <h2>HELP</h2>
                        <p><Link to="/" >Home</Link></p>
                        <p><Link to="/about" >About</Link></p>
                        <p><Link to="/faq" >FAQ</Link></p>
                        <p><Link to="/contact" >Contact</Link></p>
                    </div>
                    <div className="getintouch">
                        <h2>Get in Touch</h2>
                        <p>Any questions? Let us know in store at 8th <br /> floor, 379 Hudson St, New York, NY 10018 or <br />
                            call us on
                            (+1) 96 716 6879</p>
                    </div>
                    <div className="newslatter">
                        <h2>NEWSLETTER</h2>
                        <form action="post">
                            <label htmlFor="newslatter">
                                <input type="email" placeholder='email@example.com' id='newslatter' />
                            </label>
                            <button type='submit'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer