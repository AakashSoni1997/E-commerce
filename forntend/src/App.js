import React, { useEffect } from "react";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer.js";
import { BrowserRouter as Router, Route,} from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./component/Home/Home.js"





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
        <Footer />
      </Router>
    </div>
  );
};

export default App;
