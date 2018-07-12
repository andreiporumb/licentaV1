import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
import Diagnose1 from './components/Diagnose1';
import Vision from './components/Visual';
import Audio from './components/Audio';
import Smell from './components/Smell';
import Feel from './components/Feel';
import Unable from './components/NotStarting';
import Other from './components/Other';
import Available from './components/Available';
import vision_a0 from './components/Flow/vision_a0';
import vision_a0_a0 from './components/Flow/vision_a0_a0';
import vision_a0_a0_a0 from './components/Flow/vision_a0_a0_a0';
import vision_a0_a0_a0_a1 from './components/Flow/vision_a0_a0_a0_a1';
import results from './components/Results';
import resultsLigh1 from './components/Flow/ResultsVisionLights/Result_a0_a0_a0_a1_a1';
import resultsLigh2 from './components/Flow/ResultsVisionLights/Result_a0_a0_a0_a1_a2';
import resultsLigh3 from './components/Flow/ResultsVisionLights/Result_a0_a0_a0_a1_a3';
import resultsLigh4 from './components/Flow/ResultsVisionLights/Result_a0_a0_a0_a1_a4';
import resultsLigh5 from './components/Flow/ResultsVisionLights/Result_a0_a0_a0_a1_a5';
import resultsLigh6 from './components/Flow/ResultsVisionLights/Result_a0_a0_a0_a1_a6';
import resultsLigh7 from './components/Flow/ResultsVisionLights/Result_a0_a0_a0_a1_a7';
import resultsLigh8 from './components/Flow/ResultsVisionLights/Result_a0_a0_a0_a1_a8';



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
        <Route path='/diagnose1' component = {Diagnose1}/>
        <Route path='/vision' component = {Vision}/>
        <Route path='/audio' component = {Audio}/>
        <Route path='/smell' component = {Smell}/>
        <Route path='/feel' component = {Feel}/>
        <Route path='/unable_to_start' component = {Unable}/>
        <Route path='/other' component = {Other}/>
          <Route path='/available' component = {Available}/>
          <Route path='/vision_a0' component = {vision_a0}/>
           <Route path='/vision_a0_a0' component = {vision_a0_a0}/>
             <Route path='/vision_a0_a0_a0' component = {vision_a0_a0_a0}/>
              <Route path='/vision_a0_a0_a0_a1' component = {vision_a0_a0_a0_a1}/>
              <Route path='/results' component = {results}/>
              <Route path='/vision$a1=0&a2=0&a3=0&a4=1&a5=1' component = {resultsLigh1}/>
              <Route path='/vision$a1=0&a2=0&a3=0&a4=1&a5=2' component = {resultsLigh2}/>
              <Route path='/vision$a1=0&a2=0&a3=0&a4=1&a5=3' component = {resultsLigh3}/>
              <Route path='/vision$a1=0&a2=0&a3=0&a4=1&a5=4' component = {resultsLigh4}/>
              <Route path='/vision$a1=0&a2=0&a3=0&a4=1&a5=5' component = {resultsLigh5}/>
              <Route path='/vision$a1=0&a2=0&a3=0&a4=1&a5=6' component = {resultsLigh6}/>
              <Route path='/vision$a1=0&a2=0&a3=0&a4=1&a5=7' component = {resultsLigh7}/>
              <Route path='/vision$a1=0&a2=0&a3=0&a4=1&a5=8' component = {resultsLigh8}/>
        
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();