import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Defaults from "./components/Default";
import Details from "./components/Details";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import {Route, Switch} from "react-router-dom";
import "bulma/css/bulma.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Switch>
        <Route path="/" exact component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/product" component={Product}></Route>
        <Route path="*" component={Defaults}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
