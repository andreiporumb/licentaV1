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
    axios.get('https://python-server-porumbescu.c9users.io:8080/scikit-example?arg1=0&arg2=0&arg3=0&arg4=1&arg5=8')
      .then(response => this.setState({username: response.data+' When the light comes on, there will still be some fuel in the tank, but not much. You should try to find a gas station as soon as possible if this light illuminates while you’re driving. The distance you can drive with low fuel will vary between different cars, but typically there will be one to two gallons left in the tank when this warning light comes on.'}))
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