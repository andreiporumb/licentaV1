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
    axios.get('https://python-server-porumbescu.c9users.io:8080/scikit-example?arg1=0&arg2=0&arg3=0&arg4=1&arg5=6')
      .then(response => this.setState({username: response.data+' When the coolant temperature warning light goes on, the engine is seriously overheated, which can be caused by overheating, lack of cooling water or a cooling system that is having trouble. At this point, you need to park your car in a safe area with shade (if it’s summer) to open the bonnet.'}))
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
        <a href="/download" class="buttonDownload">Download Prediction</a>
         <button className='buttonNext' >Evaluate your car and see available services</button>
      </div>
      </div>
      </div>
      </div></div></div>
    )
  }
}
export default App