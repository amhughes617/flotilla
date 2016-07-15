import React, { Component } from 'react';
import Navbar from './navbar';


/*App component renders in all routes, props.children swapped by router*/
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
