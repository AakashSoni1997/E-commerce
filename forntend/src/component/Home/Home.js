import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productActon";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/loader/Loader";
import {useAlert} from "react-alert"
import {clearErrors} from "../../actions/productActon" 

const Home = () => {
  const alert=useAlert()
  const dispatch = useDispatch();
  const { loading, error, products,  } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <Fragment>
          <MetaData title=" ECOMMERCE" />
          {/* <a  style={{color:"orange", textDecoration:"none",padding:"10px",margin:"10px"}} href="/search">search</a>        
          <a style={{color:"orange" , textDecoration:"none",padding:"10px",margin:"10px"}} href="/Cart">Cart</a>        
          <a style={{color:"orange" , textDecoration:"none",padding:"10px",margin:"10px"}} href="/Profile">Profile</a>         */}

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
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </>
  );
};

export default Home;
