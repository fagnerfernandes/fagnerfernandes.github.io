import React, { Component } from 'react';
import NavInternal from '../components/NavInternal';
import Privacy from '../components/Privacy';

class _Privacy extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <React.Fragment>
        {/* .Load default route */}
        <NavInternal />
        <Privacy />
        {/* /.Load default route */}
      </React.Fragment>
    );
  }
}

export default _Privacy;
