import React from "react";
import {Link} from "react-router-dom";

class NavBar extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <nav class="navbar" Name="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link  to="/" className="navbar-item mynav-style">
      FreeBuys
    </Link>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <Link to="/" className="navbar-item">
      <span className="icon">
      <i className="fas fa-home"></i>
</span> Home
      </Link>

      <Link to="/" className="navbar-item">
        Products
      </Link>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
        <Link to="/cart" className="button is-primary">
            <strong>My Cart</strong>
          </Link>
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
            </div>
        )
    }
}

export  default NavBar;