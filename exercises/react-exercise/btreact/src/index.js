import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './Navbar';
import Footer from './footer';

ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Navbar />, document.getElementById('nav'))
ReactDOM.render(<Footer />, document.getElementById('feet'))
