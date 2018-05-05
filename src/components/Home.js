import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Bar.css';
import './Img.css';
import banner from './banner.png';
import profile from './profile.png';
import clio from './renault1.jpg';
import './templatemo-style.css';

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
      <div class="scroll">
     <div class="fixedElement">
   <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
<img src={banner} alt="banner" width={"100%"} height={"100%"} />

<div>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" /><ul>
  <div className="w3-container w3-text-white">
    <h1>Who are we?</h1>
    <p>This free to use application aims to help a person who does not have a lot of knowledge in IT or in the automotive field can create an account, enter the application, choose his / her vehicle for diagnostic and find out the potential problem his car has. Nowadays, almost every human possesses a device with which he can access the Internet.</p>
    <p>Whether we are talking about a phone, a tablet, or a computer, any of these devices can access webpages, so web apps are just at a click of a button away. </p>
    <p>With the help of machine learning algorithms, I aim to provide a brief overview of the fault. In this way, a car owner will know the cause of the problem and will also have an estimation of the cost of the repair in mind.
    </p>
  </div></ul>
  <div class="bod">
  <div className="container">
  
  <section className="row tm-section">
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
      <div className="tm-flex-center p-5 tm-bg-color-primary tm-section-min-h">
        <h1 className="tm-text-color-white tm-site-name">Magazee</h1>
      </div>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <div className="tm-flex-center p-5">
        <q className="tm-quote tm-text-color-gray">Ut sit amet augue elit. Vivamus eget tortor in ante scelerisque gravida. Vestibulum auctor condimentum sem.</q>
      </div>
    </div>
  </section>
  
  <section className="row tm-section tm-col-md-reverse">
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <div className="tm-flex-center p-5">
        <div className="tm-md-flex-center">
          <h2 className="tm-text-color-primary mb-4">Fusce ac enim at justo</h2>
          <p className="mb-4">Pellentesque sagittis feugiat massa, vitae blandit elit dictum in. Nam eleifend nunc dui, sed cusus justo molestie id. Vestibulum vel sagittis justo.</p>
          <a href="#" className="btn btn-primary float-lg-right tm-md-align-center">Read more</a>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
      <div className="tm-flex-center p-5 tm-bg-color-primary">
        <div className="tm-max-w-400 tm-flex-center tm-flex-col">
          <img src={profile} alt="profile" className="rounded-circle mb-4" width="137" height="150"/>
          <p className="tm-text-color-white small tm-font-thin mb-0">Nullam eleifend, ipsum eu aliquet fermentum , odio urna dignissim ante, semper maximus libero nisl non nibh.</p>
        </div>
      </div>
    </div>
  </section>




  <section className="row tm-section tm-mb-30">
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0 text-center">
      <img src={clio} alt="clio" className="img-fluid" />
    </div>
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <div className="tm-flex-center p-5">
        <div className="tm-flex-center tm-flex-col">
          <h2 className="tm-align-left">Loerm ipsum dolor sit amet</h2>
          <p>This is one-page HTML5 template that you can use for any purpose. Please tell your friends about <a href="https://www.facebook.com/templatemo" target="_parent">TemplateMo</a> website. Thank you.</p>
          <a href="#" className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  </section>
  {/* 4th Section */}
  <section className="row tm-section tm-mb-30">
    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
      <div className="tm-flex-center pl-5 pr-5 pt-5 pb-5">
        <div className="tm-md-flex-center">
          <h2 className="mb-4 tm-text-color-primary">Nullam auctor ornare finibus</h2>
          <p>Cras eu dolor lorem. Cras justo mauris, rhoncus in mauris ac, pellentesque pulvinar metus. Suspendisse consectetur consequat diam, ac dignissim mauris gravida vitae. Vestibulum blandit vestibulum mi a viverra.</p>
          <p className="mb-4">Fusce porta lectus vel elit condimentum porttitor. Maecenas at quam congue, sollicitudin risus quis, ultricies enim. Vivamus sodales, tellus ac quismod dignissim, metus ligula porttitor enim.</p>
          <p className="mb-4">Sed fermentum odio mollis libero iaculis ultrices. Mauris et nibh mi. Nullam vel sapien dolor. Vestibulum ipsum quam, aliquet ac pharetra in, suscipit eu risus. Etiam rutrum eros ultrices, consectetur felis ultrices, vehicula purus.</p>
          <a href="#" className="btn btn-primary float-lg-right tm-md-align-center">Read More</a>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 text-xl-right text-md-center text-center mt-5 mt-lg-0 pr-lg-0">
      <img src="img/image-02.jpg" alt="Image" className="img-fluid" />
    </div>
  </section>
  {/* 5th Section */}
  <section className="row tm-section tm-mb-30">
    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 p-md-0 text-md-center text-center mb-4 mb-lg-0">
      <img src="img/image-03.jpg" alt="Image" className="img-fluid" />
    </div>
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 pl-lg-4 pr-xl-0 mb-4 mb-lg-0">
      <div className="tm-flex-center">
        <div className="tm-pricing-table">
          <div className="tm-bg-color-secondary tm-text-color-white text-center tm-font-thin tm-pricing-header">
            <p className="mb-0 tm-pricing-header-title">Standard Plan</p>
            <p className="mb-0 tm-pricing-header-subtitle">($25 per month)</p>
          </div>
          <div className="tm-pricing-body">
            <ul className="tm-feature-list">
              <li>Ut sit amet augue elit</li>
              <li>Vivamus eget tortor in ante</li>
              <li>Scelerisque gravida</li>
              <li>Vestibulum auctor</li>
              <li>Condimentum sem</li>
              <li>Suscipit arcu accumsan</li>
            </ul>
            <a href="#" className="btn btn-secondary">Buy now</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 pl-xl-0 mb-4 mb-lg-0">
      <div className="tm-flex-center">
        <div className="tm-pricing-table">
          <div className="tm-bg-color-secondary tm-text-color-white text-center tm-font-thin tm-pricing-header">
            <p className="mb-0 tm-pricing-header-title">Advanced Plan</p>
            <p className="mb-0 tm-pricing-header-subtitle">($40 per month)</p>
          </div>
          <div className="tm-pricing-body">
            <ul className="tm-feature-list">
              <li>Vel eleifend enim</li>
              <li>Morbi blandit metus</li>
              <li>Fusce porta lectus vel elit</li>
              <li>Cras eu dolor lorem</li>
              <li>Pharetra et sapien</li>
              <li>Quisque auctor non magna</li>
            </ul>
            <a href="#" className="btn btn-secondary">Buy now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 6th Section */}
  <section className="row">
    <div className="col-lg-12 tm-form-header pl-5 pr-5">
      <h2 className="tm-container-inner tm-text-color-white">Application Form</h2>
    </div>
    <div className="col-lg-12 pl-2 pl-sm-3 pl-md-5 pr-2 pr-sm-3 pr-md-5">
      <form action="index.html" method="post" className="row tm-container-inner tm-contact-form">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="form-group">
            <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <select>
              <option value>Position</option>
              <option value="ceo">Chief Executive Officer</option>
              <option value="ms">Marketing Specialist</option>
              <option value="om">Operating Manager</option>
              <option value="sa">Sales Assistant</option>
            </select>
          </div>
          <div className="form-group">
            <select>
              <option value>Salary</option>
              <option value="100k">$100,000-$140,000</option>
              <option value="200k">$200,000-$260,000</option>
              <option value="300k">$300,000-$375,000</option>
            </select>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="form-group">
            <div className="row">
              <div className="col-lg-6">
                <label>
                  <input type="radio" name="gender" defaultValue="m" required /> Male
                </label>
              </div>
              <div className="col-lg-6">
                <label>
                  <input type="radio" name="gender" defaultValue="f" required /> Female
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea id="contact_message" name="contact_message" className="form-control" rows={6} placeholder="Additional Message" required defaultValue={""} />
          </div>
        </div>
        <div className="col-xs-12 mt-4 tm-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    <div className="col-lg-12 tm-bg-color-gray tm-text-color-white tm-font-thin tm-form-footer">
      <div className="row tm-container-inner">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="tm-footer-info-box">
            <h4>Lorem ipsum dolor</h4>
            <address>
              1010 Vivamaus viverra<br />
              Leo vel porttitor sodales<br />
              Non eleifend 10980
            </address>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="tm-footer-info-box">
            <p>Maecenas fermentum<br />
              Nam eu justo et urna<br />
              Semper maximus libero<br />
              Etiam magna quam</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <div className="row">
    <div className="col-lg-12">
      <p className="text-center small tm-copyright-text mb-0">Copyright © <span className="tm-current-year">2018</span> Your Company Name | Designed by <a href="http://templatemo.com" className="tm-text-color-gray" target="_parent">Template Mo</a></p>
    </div>
  </div>
</div></div>










</div>


</div></div>

    );
  }
}

export default App;