import React, { Component } from 'react'

import './Price.css'

import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }

   
  }

  download()
  {
  	console.log("Downloading...");
  	var fileDownload = require('js-file-download');
  	var data='This is just a test';
    fileDownload(data, 'diagnostic.txt');
  }

  

  render () {
      var usr = this.state.username
      console.log(usr)
      console.log("Downloading...");
  	var fileDownload = require('js-file-download');
  	var data='This is just a test';
    fileDownload(data, 'diagnostic.txt');
    return (
    	 
      <div>
        <div class="fixedElement">
   <ul>
  <li><a class="active" href="/home">Home</a></li>
  <li><a href="/news">News</a></li>
  <li><a href="/contact">Contact</a></li>
  <li><a href="/about">About</a></li>
</ul>
      <div className="background">
        <div className="container">
          <div className="panel pricing-table">
      <div className='container'>
       <h3>Your download should start...</h3>
        <a target="_blank" onclick="this.download()"></a>
      </div>
      </div>
      </div>
      </div></div></div>
    )
  }
}
export default App