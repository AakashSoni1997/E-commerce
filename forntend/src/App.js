import React, { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js";
import ForgotPassoword from "./component/User/ForgotPassoword.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard"
import ProductList from "./component/Admin/ProductList.js"
import NewProduct from "./component/Admin/NewProduct";

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get(
      "http://localhost:5000/api/v1/stripeapikey"
    );

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <div>
      <Router>
        <Header />
        {isAuthenticated && <UserOptions user={user} />}

        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />
        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />
        <ProtectedRoute
          exact
          path="/password/forgot"
          component={ForgotPassoword}
        />
        <ProtectedRoute
          exact
          path="/password/reset/:token"
          component={ResetPassword}
        />

        <Route exact path="/login" component={LoginSignUp} />
        <Route exact path="/cart" component={Cart} />
        <ProtectedRoute exact path="/shipping" component={Shipping} />
        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            {" "}
            <ProtectedRoute exact path="/process/payment" component={Payment} />
          </Elements>
        )}
        <ProtectedRoute exact path="/success" component={OrderSuccess} />
        <ProtectedRoute exact path="/orders" component={MyOrders} />

        <Switch>
          <ProtectedRoute
            exact
            path="/order/confirm"
            component={ConfirmOrder}
          />

          <ProtectedRoute exact path="/order/:id" component={OrderDetails} />
        </Switch>

        <ProtectedRoute isAdmin={true} exact path="/admin/dashboard" component={Dashboard} />
        <ProtectedRoute isAdmin={true} exact path="/admin/products" component={ProductList} />
        <ProtectedRoute isAdmin={true} exact path="/admin/product" component={NewProduct} />



        <Footer />
      </Router>
    </div>
  );
};

export default App;
