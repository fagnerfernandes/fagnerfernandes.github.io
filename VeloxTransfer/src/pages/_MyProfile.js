import React, { Component } from 'react';
import NavInternal from '../components/NavInternal';
import MyProfile from '../components/MyProfile';

class _MyProfile extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
    return(
      <React.Fragment>
      {/* .Load default route */}
      <NavInternal />
      <MyProfile />
      {/* /.Load default route */}
      </React.Fragment>
    );
  }
}

export default _MyProfile;
