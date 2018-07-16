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
      <div className='container'> <h3>Where you can find <strong>us</strong></h3><img src={maps} alt="Map" /> 
<p>Plaiul Muntelui street, number 46A, first district, Bucharest</p>
<p>(+40)726 157 758</p>
      </div>
      </div>
      </div>
      </div></div></div>
    )
  }
}
export default App