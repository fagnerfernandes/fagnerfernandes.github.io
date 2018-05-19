import React, { Component } from 'react';
import NavInternal from '../components/NavInternal';
import HowItWorks from '../components/HowItWorks';

class _HowItWorks extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <React.Fragment>
        {/* .Load default route */}
        <NavInternal />
        <HowItWorks />
        {/* /.Load default route */}
      </React.Fragment>
    );
  }
}

export default _HowItWorks;
