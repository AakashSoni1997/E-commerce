import React, { useEffect } from "react";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer.js";
import { BrowserRouter as Router, Route,} from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails.js"
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import LoginSignUp from "./component/User/LoginSignUp";





const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/"  component={Home}/>
        <Route exact path="/product/:id"  component={ProductDetails}/>
        <Route exact path="/products"  component={Products}/>
        <Route  path="/products/:keyword"  component={Products}/>

        <Route exact path="/search"  component={Search}/>
        <Route exact path="/login"  component={LoginSignUp}/>





        <Footer />
      </Router>
    </div>
  );
};

export default App;
