import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Price.css';
import renault from './Logos/renault.png';
import audi from './Logos/audi.png';
import bmw from './Logos/bmw.png';
import dacia from './Logos/dacia.png';
import toyota from './Logos/toyota.png';
import skoda from './Logos/skoda.png'
import volkswagen from './Logos/volkswagen.png'
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
  <li><a class="active" href="/home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

   
 <div className="background">
        <div className="container">
        
<div className="panel pricing-table">
            
        <ul>
          <li class="a">
            <img src={renault} alt="car-logo" width={"5%"} height={"5%"} hspace="20" style={{float: 'left' }}/>
            <h3>Renault Clio</h3>
            <p>1.4 gas engine, 4 cylinders inline, Front Wheel Drive, 4 doors, 985kgs, 75hp, manual transmission</p>
            <a href="/diagnose1" className="btn btn-primary-login-green">Diagnose</a>
          </li>
          <li class="a">
             <img src={dacia} alt="car-logo" width={"5%"} height={"5%"} hspace="20" style={{float: 'left' }}/>
            <h3>Dacia Duster</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
            <a href="/other" className="btn btn-primary-login">Diagnose</a>
          </li>
          <li class="a">
             <img src={bmw} alt="car-logo" width={"5%"} height={"5%"} hspace="20" style={{float: 'left' }}/>
            <h3>BMW 5 SERIES</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
            <a href="/other" className="btn btn-primary-login">Diagnose</a>
          </li>
          <li class="a">
             <img src={audi} alt="car-logo" width={"5%"} height={"5%"} hspace="20" style={{float: 'left' }}/>
            <h3>Audi A5</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
            <a href="/other" className="btn btn-primary-login">Diagnose</a>
          </li>
          <li class="a">
             <img src={toyota} alt="car-logo" width={"5%"} height={"5%"} hspace="20" style={{float: 'left' }}/>
            <h3>Toyota Rav4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
            <a href="/other" className="btn btn-primary-login">Diagnose</a>
          </li>
          <li class="a">
             <img src={skoda} alt="car-logo" width={"5%"} height={"5%"} hspace="20" style={{float: 'left' }}/>
            <h3>Skoda Superb</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
            <a href="/other" className="btn btn-primary-login">Diagnose</a>
          </li>
          <li class="a">
             <img src={volkswagen} alt="car-logo" width={"5%"} height={"5%"} hspace="20" style={{float: 'left' }}/>
            <h3>Volkswagen Arteon</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
            <a href="/other" className="btn btn-primary-login">Diagnose</a>
          </li>
        </ul>
      

         </div>
        </div>
      </div>
      </div>
   
  

    );
  }
}

export default Login;