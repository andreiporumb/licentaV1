import React, { Component } from 'react'

import './Price.css'

import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }

   
  }


topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
 

  render () {
      var usr = this.state.username
      console.log(usr)
    return (
       
      <div>
        <div class="fixedElement">
   <ul>
  <li><a class="active" href="/home">Home</a></li>
  <li><a href="/news">News</a></li>
  <li><a href="/contact">Contact</a></li>
  <li><a href="/about">About</a></li>
</ul>
      <div className="background">
        <div className="container">
          <div className="panel pricing-table">
      <div className='container'>
         <div>
        <h2>Welcome to Porumbescu Diagnosis</h2>
        <p>These terms and conditions outline the rules and regulations for the use of Porumbescu Diagnosis Website.</p> <br /> 
        <button className = 'myBtn' onClick="topFunction()">Top</button>
        <p>By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Porumbescu Diagnosis's website 
          if you do not accept all of the terms and conditions stated on this page.</p>
        <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice
          and any or all Agreements: “Client”, “You” and “Your” refers to you, the person accessing this website
          and accepting the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers
          to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either the Client
          or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake
          the process of our assistance to the Client in the most appropriate manner, whether by formal meetings
          of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect
          of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law
          of Romania. Any use of the above terminology or other words in the singular, plural,
          capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p><h2>Cookies</h2>
        <p>We employ the use of cookies. By using Porumbescu Diagnosis's website you consent to the use of cookies 
          in accordance with Porumbescu Diagnosis’s privacy policy.</p><p>Most of the modern day interactive web sites
          use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site
          to enable the functionality of this area and ease of use for those people visiting. Some of our 
          affiliate / advertising partners may also use cookies.</p><h2>License</h2>
        <p>Unless otherwise stated, Porumbescu Diagnosis and/or it’s licensors own the intellectual property rights for
          all material on Porumbescu Diagnosis. All intellectual property rights are reserved. You may view and/or print
          pages from https://porumbescu-diagnosis-porumbescu.c9users.io for your own personal use subject to restrictions set in these terms and conditions.</p><br /> <br /> <br /> 
             <form action="/register" onsubmit="if(document.getElementById('agree').checked) { return true; } else { alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'); return false; }">
        <input type="checkbox" name="checkbox" defaultValue="check" id="agree" /> I have read and agree to the Terms and Conditions and Privacy Policy
        <input type="submit" name="submit" defaultValue="submit" />
      </form>
       
      </div>
      </div>
      </div>
      </div>
      </div></div></div>
    )
  }
}
export default App