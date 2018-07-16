import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Price.css';

class Edit extends Component {

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

  onChange = (e) => {
    const state = this.state.book
    state[e.target.name] = e.target.value;
    this.setState({book:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { isbn, title, author, description, published_year, publisher } = this.state.book;

    axios.put('/api/book/'+this.props.match.params.id, { isbn, title, author, description, published_year, publisher })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
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
            <h3 class="panel-title">
              EDIT CAR
            </h3>
         
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.book._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Suggested Cars List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Manufacturer:</label>
                <input type="text" class="form-control" name="isbn" value={this.state.book.isbn} onChange={this.onChange} placeholder="Manufacturer" />
              </div>
              <div class="form-group">
                <label for="title">Model:</label>
                <input type="text" class="form-control" name="title" value={this.state.book.title} onChange={this.onChange} placeholder="Model" />
              </div>
              <div class="form-group">
                <label for="author">Production year:</label>
                <input type="text" class="form-control" name="author" value={this.state.book.author} onChange={this.onChange} placeholder="Production year" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.book.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="published_date">Engine Capacity:</label>
                <input type="number" class="form-control" name="published_year" value={this.state.book.published_year} onChange={this.onChange} placeholder="Engine Capacity" />
              </div>
              <div class="form-group">
                <label for="publisher">Score:</label>
                <input type="text" class="form-control" name="publisher" value={this.state.book.publisher} onChange={this.onChange} placeholder="Score" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div> </div></div></div>
    );
  }
}

export default Edit;