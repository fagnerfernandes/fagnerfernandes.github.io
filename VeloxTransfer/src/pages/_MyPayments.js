import React, { Component } from 'react';
import NavInternal from '../components/NavInternal';
import MyPayments from '../components/MyPayments';

class _MyPayments extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <React.Fragment>
      {/* .Load default route */}
      <NavInternal />
      <MyPayments />
      {/* /.Load default route */}
      </React.Fragment>
    );
  }
}

export default _MyPayments;
