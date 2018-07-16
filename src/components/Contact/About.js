import React, { Component } from 'react'

import './Price.css'

import axios from 'axios'
import maps from './maps.PNG'

class App extends Component {
  constructor () {
    super()
   
    }

    
  
 
  

  

  render () {
    
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
<p>WHO ARE WE?
This free to use application aims to help a person who does not have a lot of knowledge in IT or in the automotive field can create an account, enter the application, choose his / her vehicle for diagnostic and find out the potential problem his car has. Nowadays, almost every human possesses a device with which he can access the Internet.

Whether we are talking about a phone, a tablet, or a computer, any of these devices can access webpages, so web apps are just at a click of a button away.

With the help of machine learning algorithms, I aim to provide a brief overview of the fault. In this way, a car owner will know the cause of the problem and will also have an estimation of the cost of the repair in mind.</p>
<p>(+40)726 157 758</p>
      </div>
      </div>
      </div>
      </div></div></div>
    )
  }
}
export default App