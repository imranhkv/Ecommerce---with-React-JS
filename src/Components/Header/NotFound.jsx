import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div style={{ display:"flex",justifyContent:"center",alignItems:"center",height: "80vh" }} >
            <div className="notfound-context">
                <h2 style={{fontSize:"40px",fontFamily:"Arial",fontWeight:"600",marginBottom:"30px"}}>Page Not Found</h2>
                <Link to="/"style={{fontSize:"25px",fontFamily:"Arial",fontWeight:"600",marginBottom:"30px",
                color:"#fff",backgroundColor:"#000" ,border:"1px solid #000",padding:"10px"}} >Back to Home Page</Link>
            </div>
        </div>
    )
}

export default NotFound