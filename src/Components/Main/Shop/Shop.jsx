import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons';
import "./Shop.css"

function Shop() {
    const [prod, setProd] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(
        () => {
            axios.get(`https://fakestoreapi.com/products/${id}`)
                .then(res => { setProd(res.data); setLoading(false) })
                .catch(err => alert("connnect problem"))
        }, []
    )
    if (loading) {
        return <LoadingOutlined style={{ fontSize: 48, display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }} spin />
    }
    return (
        <div>
            {
                prod &&
                <div className="shop-card">
                    <div className='shop-page'>
                        <img src={prod.image} alt="" />
                        <div className="shop-text">
                            <h2>Product: {prod.title}</h2>
                            <span>Description: {prod.description}</span>
                            <h3>Category: {prod.category}</h3>
                            <h4> Price: {prod.price + `$`} </h4>
                            <article>
                                <Link to="/" >Return Shopping</Link>
                            </article>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default Shop