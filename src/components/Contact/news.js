import React, { Component } from 'react'

import './Price.css'

import axios from 'axios'
import news from './news.jpg'

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
      <div className='container'> <h3>N<strong>E</strong>W<strong>S</strong></h3><img src={news} alt="News" /> 
<p>This page is in construction</p>

      </div>
      </div>
      </div>
      </div></div></div>
    )
  }
}
export default App