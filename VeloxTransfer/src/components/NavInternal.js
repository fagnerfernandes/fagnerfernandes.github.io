import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavInternal extends Component{
  render(){
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
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
              <img src="assets/img/logo.png" alt="" />
            </Link>
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/how-it-works">How it works?</Link></li>
              <li><Link to="/my-payments">Transfers</Link></li>
              <li><Link to="/my-recipients">Recipients</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <i className="glyphicon glyphicon-user"></i>
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/my-profile">My Account</Link></li>
                  <li><Link to="/">Logout</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <img src="assets/img/flags/usa.png" alt="" />
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <a href="#">
                            <img src="assets/img/flags/usa.png" alt="" /> EN
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="assets/img/flags/br.png" alt="" /> PT-BR
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="assets/img/flags/ven.png" alt="" /> VEN
                        </a>
                    </li>
                </ul>
              </li>
            </ul>
          </div>{/* /.navbar-collapse */}
        </div>{/* /.container */}
      </nav>
    );
  }
}

export default NavInternal;
