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
    axios.get('https://python-server-porumbescu.c9users.io:8080/scikit-example?arg1=1&arg2=0&arg3=1&arg4=0&arg5=0')
		  .then(response => this.setState({username: response.data+' Rich Fuel Mixture - The check engine light is an indicator that notifies the driver of a system malfunction. The ECM (On-board compurter) stores trouble codes in its memory and will trigger the "check engine" or "service engine soon" light when it surfaces. In order to determine the problem, a technician must use a Diagnostic Scan tool (Diagnostic computer) to access the trouble codes. The tool allows the technician to display all sensor values and codes to determine the best approach for repairs.'}))

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