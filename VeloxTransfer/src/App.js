import React, { Component } from 'react';
import Foot from './components/Foot';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* .Load route */}
        {this.props.children}
        {/* /.Load route */}

        {/* .Load default route */}
        <Foot />
        {/* /.Load default route */}
      </React.Fragment>
    );
  }
}

export default App;
