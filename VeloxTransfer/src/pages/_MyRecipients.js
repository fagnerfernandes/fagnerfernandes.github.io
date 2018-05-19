import React, { Component } from 'react';
import NavInternal from '../components/NavInternal';
import MyRecipients from '../components/MyRecipients';

class _MyRecipients extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <React.Fragment>
      {/* .Load default route */}
      <NavInternal />
      <MyRecipients />
      {/* /.Load default route */}
      </React.Fragment>
    );
  }
}

export default _MyRecipients;
