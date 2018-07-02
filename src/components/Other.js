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
        <title>Site Maintenance</title>
        <style dangerouslySetInnerHTML={{__html: "\n  body { text-align: center; padding: 150px; }\n  h1 { font-size: 50px; }\n  body { font: 20px Helvetica, sans-serif; color: #333; }\n  article { display: block; text-align: left; width: 650px; margin: 0 auto; }\n  a { color: #dc8100; text-decoration: none; }\n  a:hover { color: #333; text-decoration: none; }\n" }} />
        <article>
          <h1>We’ll be back soon!</h1>
          <div>
            <p>Sorry for the inconvenience but we’re performing some maintenance at the moment. If you need to you can always <a href="mailto:#">contact us</a>, otherwise we’ll be back online shortly!</p>
            <p>— The Team</p>
          </div>
        </article>
      </div>
    );
  }

  
}

export default Login;