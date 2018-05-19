import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

class MyRecipients extends Component{
  render(){
    return(
      <div className="main">
          {/* .container */}
          <div className="container">
              {/* .row */}
              <div className="row">
                  {/* .col */}
                  <div className="col-md-7">
                      <div className="head-border">
                          <div></div>
                      </div>
                      <h1>MY RECIPIENTS</h1>

                      {/* .row */}
                      <div className="row">
                          {/* .col */}
                          <div className="col-md-8">
                              <input id="" name="" type="text" className="form-control" placeholder="Search by name, bank account" />
                          </div>
                          {/* /.col */}

                          {/* .col */}
                          <div className="col-md-4">
                              <Link to="/new-recipient" className="btn btn-block btn-success">NEW RECIPIENT</Link>
                          </div>
                          {/* /.col */}
                      </div>
                      {/* /.row */}

                      <hr />

                      <p className="lead">This is where {"you'll"} find your recipients list.</p>
                      <p>It seem you are new here. Go ahead and make your first recipient.</p>

                      {/* .table */}
                      <table className="table">
                          <thead>
                              <tr>
                                  <th>Recipient Name</th>
                                  <th colspan="3">Type</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>Daniel de Paola</td>
                                  <td>Personal</td>
                                  <td>
                                      <a href="/send-money.html">
                                          <i className="glyphicon glyphicon-eye-open"></i>
                                      </a>
                                  </td>
                                  <td className="text-success">$</td>
                              </tr>
                              <tr>
                                  <td>Daniel de Paola</td>
                                  <td>Personal</td>
                                  <td>
                                      <a href="/send-money.html">
                                          <i className="glyphicon glyphicon-eye-open"></i>
                                      </a>
                                  </td>
                                  <td className="text-success">$</td>
                              </tr>
                          </tbody>
                      </table>
                      {/* /.table */}
                  </div>
                  {/* /.col */}

                  {/* .col */}
                  <div className="col-md-5">
                      <SideBar />
                  </div>
                  {/* /.col */}
              </div>
              {/* /.row */}
          </div>
          {/* /.container */}
      </div>
    );
  }
}

export default MyRecipients;
