import React, { Component } from 'react';
import NavHome from '../components/NavHome';
import Home from '../components/Home';

class _Home extends Component{
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <React.Fragment>
        {/* .Load default route */}
        <NavHome />
        <Home />
        {/* /.Load default route */}
      </React.Fragment>
    );
  }
}

export default _Home;
