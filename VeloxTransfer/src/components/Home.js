import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return(
      <div className="main main--home">
          {/* .started */}
          <div className="started">
              {/* .container */}
              <div className="container">
                  {/* .row */}
                  <div className="row">
                      {/* .col */}
                      <div className="col-md-5">
                          <div className="head-border">
                              <div></div>
                          </div>
                          <h1>GET STARTED</h1>

                          {/* .form-group */}
                          <div className="form-group form-group--remittance">
                              <label htmlFor="">You send:</label>

                              <div className="input-group">
                                    <input type="text" className="form-control" id="amount_send" placeholder="0.00" defaultValue="1.000"/>
                                    <div className="input-group-addon">
                                        <select id="" name="">
                                            <option value="">USD</option>
                                            <option value="">BRL</option>
                                            <option value="">VEF</option>
                                            <option value="">ARS</option>
                                            <option value="">BOB</option>
                                            <option value="">COP</option>
                                            <option value="">CNY</option>
                                            <option value="">MXN</option>
                                            <option value="">INR</option>
                                            <option value="">PHP</option>
                                        </select>
                                    </div>
                              </div>
                          </div>
                          {/* /.form-group */}

                          {/* .form-group */}
                          <div className="form-group form-group--remittance">
                              <label htmlFor="">Receive:</label>

                              <div className="input-group">
                                    <input type="text" className="form-control" id="amount_receive" placeholder="0.00" defaultValue="3.370"/>
                                    <div className="input-group-addon">
                                        <select id="" name="">
                                            <option value="">BRL</option>
                                            <option value="">USD</option>
                                            <option value="">VEF</option>
                                            <option value="">ARS</option>
                                            <option value="">BOB</option>
                                            <option value="">COP</option>
                                            <option value="">CNY</option>
                                            <option value="">MXN</option>
                                            <option value="">INR</option>
                                            <option value="">PHP</option>
                                        </select>
                                    </div>
                              </div>
                          </div>
                          {/* /.form-group */}

                          <Link to="/send-money" className="btn btn-success btn-block">TRANSFER NOW</Link>

                          <br />

                          <button className="btn btn-default btn-block">Alert me when rate improves</button>
                          <br />

                          <p className="lead">You could save an average of R$91.05 vs your bank.
                              <br />
                              <a href="/how-it-works.html">How?</a>
                          </p>
                      </div>
                      {/* /.col */}

                      {/* .col */}
                      <div className="col-md-6 col-md-offset-1">
                          <div className="head-border">
                              <div></div>
                          </div>
                          <h1>THE FASTER AND MOST EFFICIENT<br /> WAY TO SEND MONEY</h1>
                          <p className="lead">Agents and banks charge you steep fees when you send money abroad. With VeloxTransfer you save up to 75%. Great, right?.</p>
                      </div>
                      {/* /.col */}
                  </div>
                  {/* /.row */}
              </div>
              {/* /.container */}
          </div>
          {/* /.started */}

          {/* .works */}
          <div className="works">
              {/* .works__head */}
              <header className="works__head">
                  <div className="head-border">
                      <div></div>
                  </div>
                  <h1>HOW IT WORKS</h1>
              </header>
              {/* /.works__head */}

              {/* .works__body */}
              <div className="works__body text-center">
                  <a href="/how-it-works.html" className="works__play">
                      <img src="assets/img/play.png" alt="" />
                  </a>
              </div>
              {/* /.works__body */}
          </div>
          {/* /.works */}

          {/* .welcome */}
          <div className="welcome box">
              {/* .container */}
              <div className="container">
                  <div className="head-border">
                      <div></div>
                  </div>
                  <h1>WELCOME TO MONEY WITHOUT BORDERS</h1>

                  {/* .row */}
                  <div className="row">
                      {/* .col */}
                      <div className="col-md-4">
                          <h3 className="text-success"><strong>10 TIMES LOWER COST</strong></h3>
                          <p className="lead">
                              Banks charge 5% in hidden fees.
                              <br />
                              People on <em>VeloxTransfer</em> pay 0.5%.
                          </p>
                      </div>
                      {/* /.col */}

                      {/* .col */}
                      <div className="col-md-4">
                          <h3 className="text-success"><strong>FASTER, SIMPLER</strong></h3>
                          <p className="lead">
                              Tap in how much and where to.
                              <br />
                              Upload money, let the magic happen.
                          </p>
                      </div>
                      {/* /.col */}

                      {/* .col */}
                      <div className="col-md-4">
                          <h3 className="text-success"><strong>OUTSMART YOUR BANK</strong></h3>
                          <p className="lead">
                              A totally new way to beat the old system, founded on fairnes.
                          </p>
                      </div>
                      {/* /.col */}
                  </div>
                  {/* /.row */}
              </div>
              {/* /.container */}
          </div>
          {/* /.welcome */}

          {/* .trusted */}
          <div className="trusted box box--gray">
              {/* .container */}
              <div className="container">
                  {/* .trusted-top */}
                  <div className="trusted-top">
                      {/* .row */}
                      <div className="row">
                          {/* .col */}
                          <div className="col-md-6">
                              <div className="head-border">
                                  <div></div>
                              </div>
                              <h1>TRUSTED ALL OVER THE WORLD</h1>
                              <p className="lead">No skyscrapers, no suits. Juts like-minded people everywhere, connected by <em>VeloxTransfer</em></p>
                          </div>
                          {/* /.col */}

                          {/* .col */}
                          <div className="col-md-5 col-md-offset-1">
                              <div className="head-border">
                                  <div></div>
                              </div>
                              <h1>CHECK OUT ALL THE<br /> ROUTES AVAILABLE</h1>

                              <button className="btn btn-success btn-lg">
                                  GET STARTED. TRANSFER NOW!
                              </button>
                          </div>
                          {/* /.col */}
                      </div>
                      {/* /.row */}
                  </div>
                  {/* /.trusted-top */}

                  {/* .trusted-bot */}
                  <div className="trusted-bot">
                      {/* .row */}
                      <div className="row">
                          {/* .col */}
                          <div className="col-md-12 text-center">
                              <h2 className="text-success">5/5 STAR RATING, 18739 INDEPENDENT REVIEWS</h2>
                              <p className="lead">It s your money. Only perfect is good enough. Read all the<br /> reviews at Trustpilot.co.uk</p>
                          </div>
                          {/* /.col */}
                      </div>
                      {/* /.row */}
                  </div>
                  {/* /.trusted-bot */}
              </div>
              {/* /.container */}
          </div>
          {/* /.trusted */}
      </div>
    );
  }
}

export default Home;
