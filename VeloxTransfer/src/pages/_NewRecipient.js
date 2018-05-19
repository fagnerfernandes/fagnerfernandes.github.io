import React, { Component } from 'react';
import NavInternal from '../components/NavInternal';
import NewRecipient from '../components/NewRecipient';

class _NewRecipient extends Component{
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <React.Fragment>
      {/* .Load default route */}
      <NavInternal />
      <NewRecipient />
      {/* /.Load default route */}
      </React.Fragment>
    );
  }
}

export default _NewRecipient;
