import React, { Component } from 'react';
import NavInternal from '../components/NavInternal';
import SendMoney from '../components/SendMoney';

class _SendMoney extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <React.Fragment>
        {/* .Load default route */}
        <NavInternal />
        <SendMoney />
        {/* /.Load default route */}
      </React.Fragment>
    );
  }
}

export default _SendMoney;
