import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Price from './components/Price';
ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/show/:id' component={Show} />
        <Route path='/register' component={Register} />
        <Route path='/price' component={Price} />
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();