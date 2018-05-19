import React, { Component } from 'react';
import SideBar from './SideBar';

class MyProfile extends Component {
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
                      <h1>MY PROFILE</h1>

                      <form action="">
                          {/* .row */}
                          <div className="row">
                              {/* .col */}
                              <div className="col-lg-10">
                                  {/* .form-group */}
                                  <div className="form-group">
                                      <label className="radio-inline">
                                        <input type="radio" id="inlineCheckbox1" value="option1"/> Private
                                      </label>

                                      <label className="radio-inline">
                                        <input type="radio" id="inlineCheckbox1" value="option1"/> Business
                                      </label>
                                  </div>
                                  {/* /.form-group */}

                                  {/* .form-group */}
                                  <div className="form-group">
                                      <label htmlFor="">Full Name:</label>
                                      <input className="form-control" name="" id="" type="text" placeholder=""/>
                                  </div>
                                  {/* /.form-group */}

                                  {/* .form-group */}
                                  <div className="form-group">
                                      <label htmlFor="">Email:</label>
                                      <input className="form-control" name="" id="" type="text" placeholder=""/>
                                  </div>
                                  {/* /.form-group */}

                                  {/* .form-group */}
                                  <div className="form-group">
                                      <label htmlFor="">Phone Number:</label>
                                      <input className="form-control" name="" id="" type="text" placeholder=""/>
                                  </div>
                                  {/* /.form-group */}

                                  {/* .form-group */}
                                  <div className="form-group">
                                      <label htmlFor="">Address:</label>
                                      <input className="form-control" name="" id="" type="text" placeholder=""/>
                                  </div>
                                  {/* /.form-group */}

                                  {/* .row */}
                                  <div className="row">
                                      {/* .col */}
                                      <div className="col col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Number:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Complement:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}
                                  </div>
                                  {/* /.row */}

                                  {/* .row */}
                                  <div className="row">
                                      {/* .col */}
                                      <div className="col col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Postal Code:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">City:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}
                                  </div>
                                  {/* /.row */}

                                  {/* .form-group */}
                                  <div className="form-group">
                                      <label htmlFor="">Country:</label>
                                      <select id="" name="" className="form-control">
                                          <option value="">Brazil</option>
                                          <option value="">United States</option>
                                          <option value="">Chile</option>
                                          <option value="">Venezuela</option>
                                      </select>
                                  </div>
                                  {/* /.form-group */}

                                  <button className="btn btn-success btn-block">SAVE PROFILE</button>

                                  <br />

                                  <button className="btn btn-default btn-block">Cancel</button>
                              </div>
                              {/* /.col */}
                          </div>
                          {/* /.row */}
                      </form>
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

export default MyProfile;
