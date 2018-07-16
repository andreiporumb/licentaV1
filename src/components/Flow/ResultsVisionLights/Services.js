import React, { Component } from 'react'

import './Prices.css'

import axios from 'axios'

import clio from './clio.jpeg'
import clio2 from './clio2.jpg'
import clio3 from './clio3.jpg'
import clio4 from './clio4.jpg'
import clio5 from './clio5.jpg'
import caricon from './car-icon.png'
import tinichigerie from './tinichigerie.jpeg'
import tinichigerie1 from './tinichigerie1.jpg'
import service1 from './service1.jpg'
import service2 from './service2.jpg'
import tire1 from './tire1.jpg'
import tire2 from './tire2.jpg'
import body from './body.png'
import mechanics from './mechanics.png'
import tires from './tires.png'


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
         
        <header className="main-header clearfix">
          <img className="logo" src={caricon} />
          <h1 className="name">Suggested <span>Services</span></h1>
        </header>
        <div className="content clearfix">
          <div className="cube-container">
            <div className="photo-cube">
              <img className="front" src={body} alt />
              <div className="back photo-desc">
                <h3>Body repair</h3>
                <p>You should visit a body shop if you have dents, rust, paint affected by sunlight.</p>
                <a href="http://www.lastingservice.ro/tinichigerie/" className="button">Visit page</a>
              </div>
              <img className="left" src={tinichigerie1} alt />
              <img className="right" src={tinichigerie} alt />
            </div>
          </div>	
          <div className="cube-container">
            <div className="photo-cube">
              <img className="front" src={mechanics} alt />
              <div className="back photo-desc">
                <h3>Mechanics</h3>
                <p>If your engine is acting odd, or your transmission is failing and many other sympthoms</p>
                <a href="https://www.conceptcarservice.ro/" className="button">Visit page</a>
              </div>
              <img className="left" src={service2} alt />
              <img className="right" src={service1} alt />
            </div>
          </div>	
          <div className="cube-container">
            <div className="photo-cube">
              <img className="front" src={tires} alt />
              <div className="back photo-desc">
                <h3>Tire shop</h3>
                <p>In case of tire puncture, flat tires, winter tire change and tire hotel</p>
                <a href="https://www.pepestireshop.com/" className="button">Visit page</a>
              </div>
              <img className="left" src={tire2} alt />
              <img className="right" src={tire1} alt />
           
          </div>	
        </div>
      </div>

      </div>
      </div>
      </div>
      </div></div></div>
    )
  }
}
export default App