import React, { Component } from 'react';
import SideBar from './SideBar';

class MyPayments extends Component {
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
                      <h1>MY PAYMENTS</h1>

                      {/* .row */}
                      <div className="row">
                          {/* .col */}
                          <div className="col-md-4">
                              Free payments: 0
                          </div>
                          {/* /.col */}

                          {/* .col */}
                          <div className="col-md-4">
                              Fee credit: $0
                          </div>
                          {/* /.col */}
                      </div>
                      {/* /.row */}

                      <br />

                      <form action="">
                          {/* .form-group */}
                          <div className="form-group">
                              <input className="form-control" name="" id="" type="text" placeholder="Search by amount, reference, recipient..."/>
                          </div>
                          {/* /.form-group */}
                      </form>

                      <hr />

                      <p className="lead">This is where {"you'll"} find your payment history.</p>
                      <p>It seem you are new here. Go ahead and make your first payment.</p>

                      <table className="table">
                          <thead>
                              <tr>
                                  <th>Date</th>
                                  <th>To/From</th>
                                  <th>Amount</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>08/03/2015</td>
                                  <td>Daniel de Paola</td>
                                  <td>
                                      <span className="text-danger">$540.00</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td>08/03/2015</td>
                                  <td>Daniel de Paola</td>
                                  <td>
                                      <span className="text-success">$540.00</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td>08/03/2015</td>
                                  <td>Daniel de Paola</td>
                                  <td>
                                      <span className="text-danger">$540.00</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td>08/03/2015</td>
                                  <td>Daniel de Paola</td>
                                  <td>
                                      <span className="text-success">$540.00</span>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
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

export default MyPayments;
