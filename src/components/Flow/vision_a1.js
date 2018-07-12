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
    
   const { selectedOption } = this.state;
    const { history } = this.props;
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
          <p align="center">Where is the smoke coming from?<br />
            <input type="radio" name="1.The word which means house is" defaultValue="maison" align="left" checked={selectedOption === "yes"}
       onChange={e => this.props.history.push('/vision$a1=1&a2=1')  }/>Engine Compartment<br />
            <input type="radio" name="1.The word which means house is" defaultValue="quatre" checked={selectedOption === "no"}
       onChange={e => this.props.history.push('/vision_a1_a0')  }/>Exhaust<br />
           
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