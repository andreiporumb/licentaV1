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
import vision_a1 from './components/Flow/vision_a1';
import vision_a1_a0 from './components/Flow/vision_a1_a0';
import resultsSmoke1 from './components/Flow/ResultsVisionSmoke/Result_a1_a1';
import resultsSmoke2 from './components/Flow/ResultsVisionSmoke/Result_a1_a0_a1';
import resultsSmoke3 from './components/Flow/ResultsVisionSmoke/Result_a1_a0_a0';
import vision_a0_a1 from './components/Flow/vision_a0_a1';
import resultsLeaks1 from './components/Flow/ResultsVisionLeaks/Result_a0_a1_a1';
import resultsLeaks2 from './components/Flow/ResultsVisionLeaks/Result_a0_a1_a2';
import resultsLeaks3 from './components/Flow/ResultsVisionLeaks/Result_a0_a1_a3';
import resultsLeaks4 from './components/Flow/ResultsVisionLeaks/Result_a0_a1_a4';
import resultTire1 from './components/Flow/ResultsVisionTire/Result_a0_a0_a1';
import download from './components/Flow/ResultsVisionLights/Download';
import evaluation from './components/Flow/ResultsVisionLights/Evaluation_Services';
import services from './components/Flow/ResultsVisionLights/Services';
import contact from './components/Contact/Contact';
import news from './components/Contact/news';
import about from './components/Contact/About';



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
               <Route path='/vision_a1' component = {vision_a1}/>
                              <Route path='/vision_a1_a0' component = {vision_a1_a0}/>
              <Route path='/vision$a1=1&a2=1' component = {resultsSmoke1}/>
              <Route path='/vision$a1=1&a2=0&a3=1' component = {resultsSmoke2}/>
              <Route path='/vision$a1=1&a2=0&a3=0' component = {resultsSmoke3}/>
              <Route path='/vision_a0_a1' component = {vision_a0_a1}/>
              <Route path='/vision$a1=0&a2=1&a3=1' component = {resultsLeaks1}/>
              <Route path='/vision$a1=0&a2=1&a3=2' component = {resultsLeaks2}/>
              <Route path='/vision$a1=0&a2=1&a3=3' component = {resultsLeaks3}/>
              <Route path='/vision$a1=0&a2=1&a3=4' component = {resultsLeaks4}/>
                            <Route path='/vision$a1=0&a2=0&a3=1' component = {resultTire1}/>
                            <Route path='/download' component = {download}/>
                             <Route path='/evaluation' component = {evaluation}/>
  <Route path='/services' component = {services}/>
    <Route path='/contact' component = {contact}/>
        <Route path='/news' component = {news}/>
                <Route path='/about' component = {about}/>




        
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();