import React, { Component } from 'react';
import NavInternal from '../components/NavInternal';
import Customer from '../components/Customer';

class _Customer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <React.Fragment>
        {/* .Load default route */}
        <NavInternal />
        <Customer />
        {/* /.Load default route */}
      </React.Fragment>
    );
  }
}

export default _Customer;
