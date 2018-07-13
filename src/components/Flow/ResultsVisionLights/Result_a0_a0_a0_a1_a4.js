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
    axios.get('https://python-server-porumbescu.c9users.io:8080/scikit-example?arg1=0&arg2=0&arg3=0&arg4=1&arg5=4')
		  .then(response => this.setState({username: response.data+'  The light could mean a costly problem, like a bad catalytic converter, or it could be something minor, like a loose gas cap. Maybe it is a faulty oxygen sensor or a failing ignition coil. But in many cases, it means that you will be visiting the car dealer to locate the malfunction, get a car repair of some kind and get the light turned off.'}))

  }
  

  

  render () {
      var usr = this.state.username
      console.log(usr)
    return (
    	 
      <div>
        <div class="fixedElement">
   <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
      <div className="background">
        <div className="container">
          <div className="panel pricing-table">
      <div className='container'>
        <button className='pricing-button' onClick={this.handleClick}>Make a prediction!</button>
        <p>{this.state.username}</p>
      </div>
      </div>
      </div>
      </div></div></div>
    )
  }
}
export default App