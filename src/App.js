import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
export default class App extends Component {
  render() {
    return (
    	<div>
    		<Header />
      		<h1>Hello, world.</h1>
      		<Footer />
    	</div>
    );
  }
}
