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
    axios.get('https://python-server-porumbescu.c9users.io:8080/scikit-example?arg1=1&arg2=0')
      .then(response => this.setState({username: response.data}))
  }
  

  

  render () {
      var usr = this.state.username
      console.log(usr)
    return (
      <div className='container'>
        <button className='pricing-button' onClick={this.handleClick}>Pulaaa</button>
        <p>{this.state.username}</p>
      </div>
    )
  }
}
export default App