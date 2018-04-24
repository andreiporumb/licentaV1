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
              <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt className="pricing-img" />
              <h2 className="pricing-header">Personal</h2>
              <p>peleme</p>
              <span className="pricing-price">Free</span>
              <a href="/register" className="pricing-button">Sign up</a>
            </div>
            <div className="pricing-plan">
              <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt className="pricing-img" />
              <h2 className="pricing-header">Small team</h2>
              <ul className="pricing-features">
                <li className="pricing-features-item">Never sleeps</li>
                <li className="pricing-features-item">Multiple workers for more powerful apps</li>
              </ul>
              <span className="pricing-price">$150</span>
              <a href="/register" className="pricing-button is-featured">Free trial</a>
            </div>
            <div className="pricing-plan">
              <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt className="pricing-img" />
              <h2 className="pricing-header">Enterprise</h2>
              <ul className="pricing-features">
                <li className="pricing-features-item">Dedicated</li>
                <li className="pricing-features-item">Simple horizontal scalability</li>
              </ul>
              <span className="pricing-price">$400</span>
              <a href="/register" className="pricing-button">Free trial</a>
            </div>
          </div>
        </div>
      </div>
      </div>
   
  

    );
  }
}

export default Login;