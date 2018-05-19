import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavHome extends Component{
  render(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">
              <img src="assets/img/logo-bot.png" alt="" />
            </Link>
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/how-it-works">How it works?</Link></li>
              <li><a href="" data-toggle="modal" data-target="#login">Login</a></li>
              <li><a href="" data-toggle="modal" data-target="#signup">Sign Up</a></li>
            </ul>
          </div>{/* /.navbar-collapse */}
        </div>{/* /.container-fluid */}
      </nav>
    );
  }
}

export default NavHome;
