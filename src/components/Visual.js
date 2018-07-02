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
      <div className="background">
        <div className="container">
          <div className="panel pricing-table">
        <title>multiple-choice quiz form</title>
        <h3>Vocabulary Quiz I</h3>
        <form method="post" action="mailto:raizen@mail.utexas.edu?subject=Vocabulary Quiz 1" encType="text/plain">
          Check the answer to each multiple-coice question, and click on the "Send Form" button to submit the information.
          <p>1. The word which means "house" is:<br />
            <input type="radio" name="1.The word which means house is" defaultValue="maison" />maison<br />
            <input type="radio" name="1.The word which means house is" defaultValue="quatre" />quatre<br />
            <input type="radio" name="1.The word which means house is" defaultValue="soleil" />soleil<br />
            <input type="radio" name="1.The word which means house is" defaultValue="poisson" />poisson<br />
          </p>
          <p>2. The word which means "fish" is:<br />
            <input type="radio" name="2. The word which means fish is" defaultValue="maison" />maison<br />
            <input type="radio" name="2. The word which means fish is" defaultValue="valise" />valise<br />
            <input type="radio" name="2. The word which means fish is" defaultValue="soleil" />soleil<br />
            <input type="radio" name="2. The word which means fish is" defaultValue="poisson" />poisson<br />
          </p>
          <p>3. The word which means "suitcase" is:<br />
            <input type="radio" name="3. The word which means suitcase is" defaultValue="renard" />renard<br />
            <input type="radio" name="3. The word which means suitcase is" defaultValue="valise" />valise<br />
            <input type="radio" name="3. The word which means suitcase is" defaultValue="soleil" />soleil<br />
            <input type="radio" name="3. The word which means suitcase is" defaultValue="poisson" />poisson<br />
          </p>
          <br />
          <br />
          <br />
          <br />
          <input type="submit" defaultValue="Send Form" />
          <input type="reset" defaultValue="Clear Form" />
        </form></div></div></div>
      </div>
    );
  }

  
}

export default Login;