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
        <title>multiple-choice quiz form</title>
        
        <div css="text-align:center"><form method="post" action="mailto:raizen@mail.utexas.edu?subject=Vocabulary Quiz 1" encType="text/plain">
          <h3>What's wrong with your vehicle?</h3>
          <p align="center">1. What noise do you hear?<br />
            <input type="radio" name="1.The word which means house is" defaultValue="maison" align="left"/>Squeal- Continuous, high pitched sound<br />
            <input type="radio" name="1.The word which means house is" defaultValue="quatre" />Hiss- Continuous sound like air escaping<br />
            <input type="radio" name="1.The word which means house is" defaultValue="soleil" />Knock- Heavy, loud, repeating sound like a knock on the door<br />
            <input type="radio" name="1.The word which means house is" defaultValue="poisson" />Tap- Light repetitive sound. Louder than a click<br />
            <input type="radio" name="1.The word which means house is" defaultValue="quatre" />Rattle- Marbles in a can like something loose<br />
            <input type="radio" name="1.The word which means house is" defaultValue="soleil" />Chirp- High pitched rapidly repeating sound, like birds chirping<br />
            <input type="radio" name="1.The word which means house is" defaultValue="poisson" />Clunk- A random thumping sound<br />
          </p>
         
         
          <br />
          <input type="submit" defaultValue="Next" />
          <input type="reset" defaultValue="Clear" />
        </form></div></div></div></div>
      </div></div>
    );
  }

  
}

export default Login;