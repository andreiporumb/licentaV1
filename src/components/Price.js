import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Price.css';

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
     <div class="columns">
  <ul class="price">
    <li class="header">Bronze Diagnosis</li>
    <li class="grey">$ 9.99 / Car</li>
    <li>10GB Storage</li>
    <li>1 Car</li>
    <li>5 Diagnosis/car</li>
    <li>5% Service Discount* </li>
    <li class="grey"><a href="/register" class="button">Sign Up</a></li>
  </ul>
  </div>
 	
    );
  }
}

export default Login;