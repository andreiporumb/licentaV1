import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Bar.css';
import './Img.css';
import banner from './banner.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      });
  }

  render() {
    return (
      
     <div class="fixedElement">
   <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
<img src={banner} alt="banner" width={"100%"} height={"100%"} /></div>

    );
  }
}

export default App;