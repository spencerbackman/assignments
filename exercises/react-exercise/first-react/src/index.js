import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from'./navbar';
import Content from './Content'
import Footer from './footer';

ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Navbar />, document.getElementById('root1'))
ReactDOM.render(<Content />, document.getElementById('root2'))
ReactDOM.render(<Footer />, document.getElementById('root3'))

