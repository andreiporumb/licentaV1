import React, { Component } from 'react'

import './Price.css'

import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('https://python-server-porumbescu.c9users.io:8080/scikit-example?arg1=0&arg2=1&arg3=2&arg4=0&arg5=0')
      .then(response => this.setState({username: response.data+'Transmission Lines leaking Metal transmission cooler lines can become loose at the radiator fittings due to vibration, or Transmission Pan Gasket Leaking - Transmission fluid like all other fluids needs to be replaced periodically. Fluid will be become dirty and begin to lose its consistency. '}))
  }
  

  

  render () {
      var usr = this.state.username
      console.log(usr)
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
        <button className='pricing-button' onClick={this.handleClick}>Make a prediction!</button>
        <p>{this.state.username}</p>
        <a href="/download" class="buttonDownload">Download Prediction</a>
         <a href="/evaluation" class="buttonNext" >Evaluate your car and see available services</a>
      </div>
      </div>
      </div>
      </div></div></div>
    )
  }
}
export default App