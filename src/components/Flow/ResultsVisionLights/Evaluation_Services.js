import React, { Component } from 'react'

import './Price.css'

import axios from 'axios'

import clio from './clio.jpeg'
import clio2 from './clio2.jpg'
import clio3 from './clio3.jpg'
import clio4 from './clio4.jpg'
import clio5 from './clio5.jpg'
import car from './car.gif'

class App extends Component {
  constructor () {
    super()
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

   
  }

   handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    alert('Your car generation is: ' + this.state.value);
    event.preventDefault();
  }
 

  

  render () {
      var usr = this.state.username
      console.log(usr)
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
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
        <label>
          <p style={{fontSize: 18, float:'left'}}>Pick your car manufacturing year interval:</p>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="MK1">1999-2004</option>
            <option value="MK2">2004-2006</option>
            <option value="MK3">2006-2009</option>
            <option value="MK4">2009-2012</option>
            <option value="MK5">2012-2018</option>
            
          </select>
 <input type="submit" value="Submit" />
        </label>
       
       

      </form>
       
       
       <p>
      {(() => {
        switch (this.state.value) {
          case "MK1":   return <div><div class="polaroid-left"><img src={clio} width="400" height="280" style={{float: 'left'}} /><h3>The value of your car is currently 1000$</h3> </div>
          <div class="polaroid-right"><img src={car} width="430" height="280" style={{float: 'right'}} /><h3>Find services that could help you repair your car</h3> </div>
        <p style={{fontSize: '1.5em'}}><span style={{color: '#ffffff', backgroundColor: '#993300'}}><strong style={{padding: '0px 5px'}}>Renault Clio MK1</strong></span></p>
        <h2>Specifications</h2>
        <p style={{ textAlign: 'left'}}>Engine type - Number of cylinders : I 4<br />Engine Code : E6J<br />Fuel type : <br />Petrol<br />Fuel System : Weber 32 TLDR<br />Engine Alignment : Transverse<br />Engine size - Displacement - Engine capacity : 1390 cm3 or 84.8 cu-in<br />Bore x Stroke : 75.8 x 77.0 mm<br />2.95 x 3.03 inches<br />Number of valves : 8 Valves<br />Aspiration : N/A<br />Compression Ratio : 9.5<br />Maximum power - Output - Horsepower : 80 PS or 79 bhp or 59 kW @ 5750 rpm<br />Maximum torque : 107 Nm or 78 lb.ft @ 3500 rpm<br />Drive wheels - Traction - Drivetrain : FWD<br />Transmission Gearbox - Number of speeds : <br />4 speed Automatic<br />read more at: https://www.ultimatespecs.com/car-specs/Renault/6404/Renault-Clio-1-Phase-1-14-Auto.html</p>
      </div>;
          case "MK2": return <div><div class="polaroid-left"><img src={clio2} width="400" height="280" style={{float: 'left'}} /><h3>The value of your car is currently 2000$</h3> </div>
          <div class="polaroid-right"><img src={car} width="430" height="280" style={{float: 'right'}} /><h3>Find services that could help you repair your car</h3> </div>
        <p style={{fontSize: '1.5em'}}><span style={{color: '#ffffff', backgroundColor: '#993300'}}><strong style={{padding: '0px 5px'}}>Renault Clio MK2 PH1</strong></span></p>
        <h2>Specifications</h2>
        <p style={{ textAlign: 'left'}}>Engine type - Number of cylinders : I 4<br />Engine Code : E6J<br />Fuel type : <br />Petrol<br />Fuel System : Weber 32 TLDR<br />Engine Alignment : Transverse<br />Engine size - Displacement - Engine capacity : 1390 cm3 or 84.8 cu-in<br />Bore x Stroke : 75.8 x 77.0 mm<br />2.95 x 3.03 inches<br />Number of valves : 8 Valves<br />Aspiration : N/A<br />Compression Ratio : 9.5<br />Maximum power - Output - Horsepower : 80 PS or 79 bhp or 59 kW @ 5750 rpm<br />Maximum torque : 107 Nm or 78 lb.ft @ 3500 rpm<br />Drive wheels - Traction - Drivetrain : FWD<br />Transmission Gearbox - Number of speeds : <br />4 speed Automatic<br />read more at: https://www.ultimatespecs.com/car-specs/Renault/6404/Renault-Clio-1-Phase-1-14-Auto.html</p>
      </div>;
          case "MK3": return <div><div class="polaroid-left"><img src={clio3} width="400" height="280" style={{float: 'left'}} /><h3>The value of your car is currently 3000$</h3> </div>
          <div class="polaroid-right"><img src={car} width="430" height="280" style={{float: 'right'}} /><h3>Find services that could help you repair your car</h3> </div>
        <p style={{fontSize: '1.5em'}}><span style={{color: '#ffffff', backgroundColor: '#993300'}}><strong style={{padding: '0px 5px'}}>Renault Clio MK2 PH2</strong></span></p>
        <h2>Specifications</h2>
        <p style={{ textAlign: 'left'}}>Engine type - Number of cylinders : I 4<br />Engine Code : E6J<br />Fuel type : <br />Petrol<br />Fuel System : Weber 32 TLDR<br />Engine Alignment : Transverse<br />Engine size - Displacement - Engine capacity : 1390 cm3 or 84.8 cu-in<br />Bore x Stroke : 75.8 x 77.0 mm<br />2.95 x 3.03 inches<br />Number of valves : 8 Valves<br />Aspiration : N/A<br />Compression Ratio : 9.5<br />Maximum power - Output - Horsepower : 80 PS or 79 bhp or 59 kW @ 5750 rpm<br />Maximum torque : 107 Nm or 78 lb.ft @ 3500 rpm<br />Drive wheels - Traction - Drivetrain : FWD<br />Transmission Gearbox - Number of speeds : <br />4 speed Automatic<br />read more at: https://www.ultimatespecs.com/car-specs/Renault/6404/Renault-Clio-1-Phase-1-14-Auto.html</p>
      </div>;
          case "MK4": return <div><div class="polaroid-left"><img src={clio4} width="400" height="280" style={{float: 'left'}} /><h3>The value of your car is currently 5000$</h3> </div>
          <div class="polaroid-right"><img src={car} width="430" height="280" style={{float: 'right'}} /><h3>Find services that could help you repair your car</h3> </div>
        <p style={{fontSize: '1.5em'}}><span style={{color: '#ffffff', backgroundColor: '#993300'}}><strong style={{padding: '0px 5px'}}>Renault Clio MK3</strong></span></p>
        <h2>Specifications</h2>
        <p style={{ textAlign: 'left'}}>Engine type - Number of cylinders : I 4<br />Engine Code : E6J<br />Fuel type : <br />Petrol<br />Fuel System : Weber 32 TLDR<br />Engine Alignment : Transverse<br />Engine size - Displacement - Engine capacity : 1390 cm3 or 84.8 cu-in<br />Bore x Stroke : 75.8 x 77.0 mm<br />2.95 x 3.03 inches<br />Number of valves : 8 Valves<br />Aspiration : N/A<br />Compression Ratio : 9.5<br />Maximum power - Output - Horsepower : 80 PS or 79 bhp or 59 kW @ 5750 rpm<br />Maximum torque : 107 Nm or 78 lb.ft @ 3500 rpm<br />Drive wheels - Traction - Drivetrain : FWD<br />Transmission Gearbox - Number of speeds : <br />4 speed Automatic<br />read more at: https://www.ultimatespecs.com/car-specs/Renault/6404/Renault-Clio-1-Phase-1-14-Auto.html</p>
      </div>;
          case "MK5": return <div><div class="polaroid-left"><img src={clio5} width="400" height="280" style={{float: 'left'}} /><h3>The value of your car is currently 10000$</h3> </div>
          <div class="polaroid-right"><img src={car} width="430" height="280" style={{float: 'right'}} /><h3>Find services that could help you repair your car</h3> </div>
        <p style={{fontSize: '1.5em'}}><span style={{color: '#ffffff', backgroundColor: '#993300'}}><strong style={{padding: '0px 5px'}}>Renault Clio MK4</strong></span></p>
        <h2>Specifications</h2>
        <p style={{ textAlign: 'left'}}>Engine type - Number of cylinders : I 4<br />Engine Code : E6J<br />Fuel type : <br />Petrol<br />Fuel System : Weber 32 TLDR<br />Engine Alignment : Transverse<br />Engine size - Displacement - Engine capacity : 1390 cm3 or 84.8 cu-in<br />Bore x Stroke : 75.8 x 77.0 mm<br />2.95 x 3.03 inches<br />Number of valves : 8 Valves<br />Aspiration : N/A<br />Compression Ratio : 9.5<br />Maximum power - Output - Horsepower : 80 PS or 79 bhp or 59 kW @ 5750 rpm<br />Maximum torque : 107 Nm or 78 lb.ft @ 3500 rpm<br />Drive wheels - Traction - Drivetrain : FWD<br />Transmission Gearbox - Number of speeds : <br />4 speed Automatic<br />read more at: https://www.ultimatespecs.com/car-specs/Renault/6404/Renault-Clio-1-Phase-1-14-Auto.html</p>
      </div>;
          default:      return "Here will be displayed your car";
        }
      })()}
    </p>
      </div>
      </div>
      </div>
      </div></div></div>
    )
  }
}
export default App