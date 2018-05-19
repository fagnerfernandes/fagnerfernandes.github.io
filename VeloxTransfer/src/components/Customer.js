import React, { Component } from 'react';
import SideBar from './SideBar';

class Customer extends Component{
  render(){
    return(
      <div class="main">
          {/* .container */}
          <div class="container">
              {/* .row */}
              <div class="row">
                  {/* .col */}
                  <div class="col-md-7">
                      <div class="head-border">
                          <div></div>
                      </div>
                      <h1>CUSTOMER AGREEMENT</h1>

                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  {/* /.col */}

                  {/* .col */}
                  <div class="col-md-5">
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

export default Customer;
