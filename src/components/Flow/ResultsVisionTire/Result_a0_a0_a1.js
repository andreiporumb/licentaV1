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
    axios.get('https://python-server-porumbescu.c9users.io:8080/scikit-example?arg1=0&arg2=0&arg3=1&arg4=0&arg5=0')
      .then(response => this.setState({username: response.data+'Punctured Tire - A flat tire can happen at any time, Knowing how to change your tire and keeping a regular check on its condition and pressure can prevent this thing happen, or Damaged Valve Stem - Valve stems are made out of rubber and are prone to dry out and become brittle. Improperly installed valve stems can cause pressure to escape.'}))
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