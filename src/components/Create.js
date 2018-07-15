import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Bar.css';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      isbn: '',
      title: '',
      author: '',
      description: '',
      published_year: '',
      publisher: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { isbn, title, author, description, published_year, publisher } = this.state;
 axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.post('/api/book', { isbn, title, author, description, published_year, publisher })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { isbn, title, author, description, published_year, publisher } = this.state;
    return (<div class="fixedElement">
   <ul>
  <li><a class="active" href="/home">Home</a></li>
  <li><a href="/news">News</a></li>
  <li><a href="/contact">Contact</a></li>
  <li><a href="/about">About</a></li>
</ul><p></p><p></p><p></p>
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">   
            <h3 class="panel-title">
              ADD A NEW CAR
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Available Cars List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Manufacturer:</label>
                <input type="text" class="form-control" name="isbn" value={isbn} onChange={this.onChange} placeholder="Manufacturer" />
              </div>
              <div class="form-group">
                <label for="title">Model:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Model" />
              </div>
              <div class="form-group">
                <label for="author">Engine Capacity:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="Engine Capacity" />
              </div>
              <div class="form-group">
                <label for="description">Common Problems:</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Common Problems:" cols="80" rows="3">{description}</textArea>
              </div>
              <div class="form-group">
                <label for="published_date">Manufacturing Date:</label>
                <input type="number" class="form-control" name="published_year" value={published_year} onChange={this.onChange} placeholder="Published Year" />
              </div>
              <div class="form-group">
                <label for="publisher">Overall Score:</label>
                <input type="text" class="form-control" name="publisher" value={publisher} onChange={this.onChange} placeholder="Overall Score" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div></div>
    );
  }
}

export default Create;