import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

class NewRecipient extends Component {
  render(){
    return(
      <div className="main">
          {/* .container */}
          <div className="container">
              {/* .row */}
              <div className="row">
                  {/* .col */}
                  <div className="col-md-7">
                      {/* .page-head */}
                      <header className="page-head">
                          <div className="head-border">
                              <div></div>
                          </div>
                          <h1>NEW RECIPIENT</h1>

                          <Link to="/my-recipients" className="page-head__back">
                              <i className="glyphicon glyphicon-menu-left"></i> Back to list
                          </Link>
                      </header>
                      {/* /.page-head */}

                      <hr />

                      <form action="">
                          {/* .row */}
                          <div className="row">
                              {/* .col */}
                              <div className="col-lg-10">
                                  {/* .form-group */}
                                  <div className="form-group">
                                      <label htmlFor="">Recipient full name or business name:</label>
                                      <input className="form-control" name="" id="" type="text" placeholder=""/>
                                  </div>
                                  {/* /.form-group */}

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
                                      <label htmlFor="">Currency:</label>
                                      <select id="" name="" className="form-control">
                                          <option value="">USD American Dollar</option>
                                          <option value="">BRL Brazilian Real</option>
                                          <option value="">RMB Chinese Yuan</option>
                                      </select>
                                  </div>
                                  {/* /.form-group */}

                                  {/* .form-group */}
                                  <div className="form-group">
                                      <label htmlFor="">IBAN:</label>
                                      <input className="form-control" name="" id="" type="text" placeholder=""/>
                                  </div>
                                  {/* /.form-group */}

                                  {/* .form-group */}
                                  <div className="form-group">
                                      <label htmlFor="">Address(optional):</label>
                                      <input className="form-control" name="" id="" type="text" placeholder=""/>
                                  </div>
                                  {/* /.form-group */}

                                  {/* .row */}
                                  <div className="row">
                                      {/* .col */}
                                      <div className="col-md-6">
                                          {/* .form-group */}
                                          <div className="form-group">
                                              <label htmlFor="">Postal Code:</label>
                                              <input className="form-control" name="" id="" type="text" placeholder=""/>
                                          </div>
                                          {/* /.form-group */}
                                      </div>
                                      {/* /.col */}

                                      {/* .col */}
                                      <div className="col-md-6">
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
                                          <option value=""></option>
                                      </select>
                                  </div>
                                  {/* /.form-group */}

                                  <button className="btn btn-success btn-block">ADD NEW RECIPIENT</button>

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

export default NewRecipient;
