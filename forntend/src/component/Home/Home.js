import React, { Fragment } from 'react'
import { CgMouse } from "react-icons/all";
import "./Home.css"
import ProductCard from "./ProductCard.js";
import  Metadata  from "../layout/MetaData"

const Home = () => {
    const products=[10,20,30]
  return (

<Fragment>
        <Metadata title=" ECOMMERCE"/>

<div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <span>hello</span>
                // <ProductCard key={product._id} product={product} />
              ))}
          </div>
</Fragment>

  )
}

export default Home