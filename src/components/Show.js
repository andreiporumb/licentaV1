import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Price.css';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    axios.get('/api/book/'+this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data });
        console.log(this.state.book);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/book/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="fixedElement">
   <ul>
  <li><a class="active" href="/home">Home</a></li>
  <li><a href="/news">News</a></li>
  <li><a href="/contact">Contact</a></li>
  <li><a href="/about">About</a></li>
</ul><p></p><p></p><p></p>
       <div className="background">
        <div className="container">
          <div className="panel pricing-table">
      <div className='container'>
            <h4 class="panel-title">
              {this.state.book.title}
            </h4>
          
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Suggested Cars List</Link></h4>
            <dl>
              <dt>Manufacturer:</dt>
              <dd>{this.state.book.isbn}</dd>
              <dt>Manufacturing date:</dt>
              <dd>{this.state.book.author}</dd>
              <dt>Description:</dt>
              <dd>{this.state.book.description}</dd>
              <dt>Engine Capacity:</dt>
              <dd>{this.state.book.published_year}</dd>
              <dt>Score:</dt>
              <dd>{this.state.book.publisher}</dd>
            </dl>
            <Link to={`/edit/${this.state.book._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.book._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div></div></div></div>
    );
  }
}

export default Show;