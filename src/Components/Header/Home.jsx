import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import "./Home.css";

function Home() {
  const [prod, setProd] = useState([]);
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [limit, setLimit] = useState(8)


  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProd(res.data); setLoading(false);setProducts(res.data); setCategory(res.data)
      })
      .catch((err) => alert("connnect problem"));
  }, []);

  const selectCategory = (cat) => {
    const result = prod.filter(
      (a) => { return a.category === cat }
    )
    setProducts(result)
  }

  const loadMore = () => {
    setBtnLoading(true)
    setTimeout(() => {
      setLimit(limit + 8); setBtnLoading(false)
    }, 1500);
  }

  if (loading) {
    return (
      <LoadingOutlined
        style={{
          fontSize: 48,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
        spin
      />
    );
  }
  return (
    <div className="home-all">
      <div className="container">
        <div className="slider-area">
        </div>
        <div className="filters-prod">
          <button onClick={() => setProducts(prod)}  >All</button>
          {[...new Set(category.map((item) => item.category))].map((item) => <div key={item}>
            <button onClick={() => selectCategory(item)} >{item}</button>
          </div>)
          }
        </div>
        <div className="home">
          {products.slice(0, limit).map((item, index) => {
            return (
              <Link to={`shop/${item.id}`} key={item.id}>
                <div className="product-card" key={index}>
                  <img src={item.image} alt="" />
                  <div className="p-text">
                    <h2>{item.title}</h2>
                    <h3> Price: {item.price + `$`} </h3>
                    <h4>Count: {item.rating.count}</h4>
                    <h4> Rating: {item.rating.rate}</h4>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="btns" style={{ textAlign: "center", margin: "20px 0 5px 0" }}>
          {
            limit < products.length &&
            <button onClick={loadMore}>
              {btnLoading && <span><LoadingOutlined /></span>}
              {!btnLoading && <span>Load More</span>}
            </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
