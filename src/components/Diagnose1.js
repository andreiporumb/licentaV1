import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Price.css';
import vision from './Vision.png';
import audio from './Vision2.png';
import smell from './Vision3.png';
import feel from './Vision4.png';
import notstart from './Vision5.png';
import unknown from './Vision6.png'
class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.post('/api/auth/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

  render() {
    
    return (     <div class="fixedElement">
   <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

   
 <div className="background">
        <div className="container">
        
          <div className="panel pricing-table">
            <div className="pricing-plan">
              <img src={vision} alt className="pricing-img" width={"60%"} height={"35%"}/>
              <h2 className="pricing-header">LOOKS LIKE</h2>
             
              <span className="pricing-price">Can you spot something odd?</span>
              <a href="/vision" className="pricing-button">Diagnose</a>
            </div>
            <div className="pricing-plan">
               <img src={smell} alt className="pricing-img" width={"60%"} height={"35%"}/>
              <h2 className="pricing-header">SMELLS LIKE</h2>
             
              <span className="pricing-price">Do you smell something uncommon?</span>
              <a href="/smell" className="pricing-button">Diagnose</a>
            </div>
            <div className="pricing-plan">
               <img src={audio} alt className="pricing-img" width={"60%"} height={"35%"}/>
              <h2 className="pricing-header">SOUNDS LIKE</h2>
             
              <span className="pricing-price">Does the car make a weird noise?</span>
              <a href="/audio" className="pricing-button">Diagnose</a>
            </div>
            
          </div>
           <div className="panel pricing-table">
            <div className="pricing-plan">
              <img src={feel} alt className="pricing-img" width={"60%"} height={"35%"}/>
              <h2 className="pricing-header">FEELS LIKE</h2>
             
              <span className="pricing-price">Does the car handles bad?</span>
              <a href="/feel" className="pricing-button">Diagnose</a>
            </div>
            <div className="pricing-plan">
               <img src={notstart} alt className="pricing-img" width={"60%"} height={"35%"}/>
              <h2 className="pricing-header">Not starting</h2>
             
              <span className="pricing-price">Total failure?</span>
              <a href="/unable_to_start" className="pricing-button">Diagnose</a>
            </div>
            <div className="pricing-plan">
               <img src={unknown} alt className="pricing-img" width={"60%"} height={"35%"}/>
              <h2 className="pricing-header">Other</h2>
             
              <span className="pricing-price">Unknown source</span>
              <a href="/other" className="pricing-button">Diagnose</a>
            </div>
            </div>
         
        </div>
      </div>
      </div>
   
  

    );
  }
}

export default Login;