import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Foot extends Component{
  render(){
    return(
      <React.Fragment>
        <footer className="foot">
            {/* .container */}
            <div className="container">
                {/* .foot__top */}
                <div className="foot__top">
                    <nav className="navbar navbar-default">
                      <div className="container-fluid">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2" aria-expanded="false">
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
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                          <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/how-it-works">How it works?</Link></li>
                            <li><a href="" data-toggle="modal" data-target="#login">Login</a></li>
                            <li><a href="" data-toggle="modal" data-target="#signup">Sign Up</a></li>
                          </ul>
                        </div>{/* /.navbar-collapse */}
                      </div>{/* /.container-fluid */}
                    </nav>

                </div>
                {/* /.foot__top */}

                {/* .foot__mid */}
                <div className="foot__mid">
                    {/* .row */}
                    <div className="row">
                        {/* .col */}
                        <div className="col-xs-6 col-lg-3">
                            <h5><strong>Company & Team</strong></h5>

                            <ul className="foot-list">
                                <li>
                                    <a href="">About Us</a>
                                </li>
                                <li>
                                    <a href="">Press</a>
                                </li>
                                <li>
                                    <a href="">Careers</a>
                                </li>
                            </ul>
                        </div>
                        {/* /.col */}

                        {/* .col */}
                        <div className="col-xs-6 col-lg-3">
                            <h5><strong>Help & Support</strong></h5>

                            <ul className="foot-list">
                                <li>
                                    <a href="">Get Started</a>
                                </li>
                                <li>
                                    <a href="">Pricing</a>
                                </li>
                                <li>
                                    <a href="">Supported Currencies</a>
                                </li>
                                <li>
                                    <a href="">Best Price Guarantee</a>
                                </li>
                                <li>
                                    <a href="">FAQ</a>
                                </li>
                                <li>
                                    <a href="">SWIFT/BIC Codes</a>
                                </li>
                            </ul>
                        </div>
                        {/* /.col */}

                        {/* .col */}
                        <div className="col-xs-6 col-lg-3">
                            <h5><strong>Countries & Currencies</strong></h5>

                            <ul className="foot-list">
                                <li>
                                    <Link to="/how-it-works">Transfer money to USA</Link>
                                </li>
                                <li>
                                    <Link to="/how-it-works">Transfer money to Brazil</Link>
                                </li>
                                <li>
                                    <Link to="/how-it-works">Transfer money to Venezuela</Link>
                                </li>
                                <li>
                                    <Link to="/how-it-works">Transfer money to China</Link>
                                </li>
                                <li>
                                    <Link to="/how-it-works">Transfer money to Argentina</Link>
                                </li>
                                <li>
                                    <Link to="/how-it-works">Transfer money to Bolivia</Link>
                                </li>
                                <li>
                                    <Link to="/how-it-works">Transfer money to Colombia</Link>
                                </li>
                                <li>
                                    <Link to="/how-it-works">Transfer money to India</Link>
                                </li>
                                <li>
                                    <Link to="/how-it-works">Transfer money to Mexico</Link>
                                </li>
                            </ul>
                        </div>
                        {/* /.col */}

                        {/* .col */}
                        <div className="col-xs-6 col-lg-3">
                            <h5><strong>Contact</strong></h5>

                            <ul className="foot-list">
                                <li>
                                    support@veloxtransfer.com
                                </li>
                                <li>
                                    USA: +1 555 323 6439
                                </li>
                            </ul>

                            <h5><strong>Follow Us</strong></h5>

                            <ul className="foot-list">
                                <li>
                                    <a href="">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Google+
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* .col */}
                    </div>
                    {/* /.row */}

                    <ul className="foot-nav">
                        <li>
                            &copy; <em>VeloxTransfer</em> 2015
                        </li>
                        <li>-</li>
                        <li>
                            All rights reserved
                        </li>
                        <li>-</li>
                        <li>
                            <Link to="/customer">Terms of Use</Link>
                        </li>
                        <li>-</li>
                        <li>
                            <Link to="/privacy">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                {/* /.foot__mid */}

                <hr />

                {/* .foot__bot */}
                <div className="foot__bot text-center">
                    {/* .foot-pontual */}
                    <div className="foot-pontual">
                        <a href="" className="foot-pontual__link">
                            <img src="assets/img/pontual.png" alt="" />
                        </a>
                    </div>
                    {/* /.foot-pontual */}

                    <p>VeloxTransfer is an authorized agent of Pontual Money Transfer. Pontual is your payment specialist for money transfers to Brazil.<br /> Pontual is located at 111 N. Sepulveda Blvd., Suite 340, Manhattan Beach, CA 90266.</p>
                    <p>For more information, please, <a href="http://pontualmt.com/">click here</a>.</p>
                </div>
                {/* /.foot__bot */}
            </div>
            {/* /.container */}
        </footer>

        {/* .modal */}
        <div className="modal fade" id="wishes" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <img src="assets/img/logo-bot.png" alt=""/>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div className="modal-body">
                <div className="head-border">
                    <div></div>
                </div>
                <h1>NEW CURRENCIES ARE COMING SOON</h1>

                <p>
                    Want to be first to know?
                    <br/>
                    Enter a few details below and you'll receive an email when there's good news.
                </p>

                {/* .row */}
                <div className="row">
                    {/* .col */}
                    <div className="col-md-6">
                        {/* .form-group */}
                        <div className="form-group">
                            <label htmlFor="">I want to send money from:</label>
                            <input className="form-control" name="" id="" type="" placeholder="Currency"/>
                        </div>
                        {/* /.form-group */}
                    </div>
                    {/* /.col */}

                    {/* .col */}
                    <div className="col-md-6">
                        {/* .form-group */}
                        <div className="form-group">
                            <label htmlFor="">To:</label>
                            <input className="form-control" name="" id="" type="" placeholder="Currency"/>
                        </div>
                        {/* /.form-group */}
                    </div>
                    {/* /.col */}

                    {/* .col */}
                    <div className="col-md-6">
                        {/* .form-group */}
                        <div className="form-group">
                            <label htmlFor="">Your name:</label>
                            <input className="form-control" name="" id="" type="" placeholder=""/>
                        </div>
                        {/* /.form-group */}
                    </div>
                    {/* /.col */}

                    {/* .col */}
                    <div className="col-md-6">
                        {/* .form-group */}
                        <div className="form-group">
                            <label htmlFor="">Your email:</label>
                            <input className="form-control" name="" id="" type="" placeholder=""/>
                        </div>
                        {/* /.form-group */}
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}

                <button className="btn btn-success btn-block">LET ME KNOW</button>
              </div>
            </div>
          </div>
        </div>
        {/* /.modal */}

        {/* .modal */}
        <div className="modal fade" id="signup" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <img src="assets/img/logo-bot.png" alt=""/>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div className="modal-body">
                <div className="head-border">
                    <div></div>
                </div>
                <h1>CREATE YOU ACCOUNT</h1>

                {/* .form-group */}
                <div className="form-group">
                    <input className="form-control" name="" id="new_email" type="email" placeholder="Your email"/>
                </div>
                {/* /.form-group */}

                {/* .form-group */}
                <div className="form-group">
                    <input className="form-control" name="" id="new_password" type="password" placeholder="Create a password"/>
                </div>
                {/* /.form-group */}

                {/* .form-group */}
                <div className="form-group">
                    <input className="form-control" name="" id="new_re_password" type="password" placeholder="Re-enter password"/>
                </div>
                {/* /.form-group */}

                <Link to="/my-payments" className="btn btn-success btn-block">SIGN IN</Link>
              </div>
              <div className="modal-footer">
                  <i className="glyphicon glyphicon-lock"></i> 100% secure & fully regulated
              </div>
            </div>
          </div>
        </div>
        {/* /.modal */}

        {/* .modal */}
        <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <img src="assets/img/logo-bot.png" alt=""/>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div className="modal-body">
                <div className="head-border">
                    <div></div>
                </div>
                <h1>USE YOUR ACCOUNT</h1>

                {/* .form-group */}
                <div className="form-group">
                    <input className="form-control" name="" id="login_email" type="email" placeholder="Your email"/>
                </div>
                {/* /.form-group */}

                {/* .form-group */}
                <div className="form-group">
                    <input className="form-control" name="" id="login_password" type="password" placeholder="Your password"/>
                </div>
                {/* /.form-group */}

                <Link to="/my-payments.html" className="btn btn-success btn-block">ENTER</Link>

                <br />

                <div className="head-border">
                    <div></div>
                </div>
                <h1>OR</h1>

                connect with facebook
              </div>
              <div className="modal-footer">
                  <i className="glyphicon glyphicon-lock"></i> 100% secure & fully regulated
              </div>
            </div>
          </div>
        </div>
        {/* /.modal */}
      </React.Fragment>
    );
  }
}

export default Foot;
