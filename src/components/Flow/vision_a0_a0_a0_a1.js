import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Price.css';
import abs from './Lights/abs.jpg';
import battery from './Lights/battery.png';
import brake from './Lights/brake.png';
import engine from './Lights/engine.png';
import oil from './Lights/oil.png';
import temperature from './Lights/temperature.png';
import tpm from './Lights/tpm.jpg';
import low from './Lights/low.jpg';



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
         <div>
        <div className="gallery">
          <a target="_blank" href="/results">
            <img src={abs} alt="Cinque Terre" width={300} height={200} />
          </a>
          <div className="desc">ABS Warning Light</div>
        </div>
        <div className="gallery">
          <a target="_blank" href="/other">
            <img src={battery} alt="Forest" width={300} height={200} />
          </a>
          <div className="desc">Battery Warning Light</div>
        </div>
        <div className="gallery">
          <a target="_blank" href="/other">
            <img src={brake} alt="Northern Lights" width={300} height={200} />
          </a>
          <div className="desc">Brake Warning Light</div>
        </div>
        <div className="gallery">
          <a target="_blank" href="/otherg">
            <img src={engine} alt="Mountains" width={300} height={200} />
          </a>
          <div className="desc">Check Engine Light</div>
        </div>
        <div className="gallery">
          <a target="_blank" href="/other">
            <img src={oil} alt="Cinque Terre" width={300} height={200} />
          </a>
          <div className="desc">Oil Pressure Warning Light</div>
        </div>
        <div className="gallery">
          <a target="_blank" href="/other">
            <img src={temperature} alt="Cinque Terre" width={300} height={200} />
          </a>
          <div className="desc">Temperature Warning Light</div>
        </div>
        <div className="gallery">
          <a target="_blank" href="/other">
            <img src={tpm} alt="Cinque Terre" width={300} height={200} />
          </a>
          <div className="desc">Tire Pressure Light (TPMS)</div>
        </div>
         <div className="gallery">
          <a target="_blank" href="/other">
            <img src={low} alt="Cinque Terre" width={300} height={200} />
          </a>
          <div className="desc">Low Fuel Indicator</div>
        </div>
      </div></div></div></div>
      </div></div>
    );
  }

  
}

export default Login;