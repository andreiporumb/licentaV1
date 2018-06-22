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
        <h1 className="tm-text-color-white tm-site-name">Car Diagnosis</h1>
      </div>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <div className="tm-flex-center p-5">
        <q className="tm-quote tm-text-color-gray">Everyone looks for a cheap, if not free, car diagnosis. In the real life, this thing is not everytime possible. This is a solution for the ones on a tight budget, or with a limited time available for diagnosing their car</q>
      </div>
    </div>
  </section>
  
  <section className="row tm-section tm-col-md-reverse">
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <div className="tm-flex-center p-5">
        <div className="tm-md-flex-center">
          <h2 className="tm-text-color-primary mb-4">How can this app help me?</h2>
          <p className="mb-4">We understand that your time is precios. Therefore, this app has intuitive and straight-forward flows that help you receive a diagnostic in a blink of an eye.</p>
          <a href="#" className="btn btn-primary float-lg-right tm-md-align-center">Read more</a>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
      <div className="tm-flex-center p-5 tm-bg-color-primary">
        <div className="tm-max-w-400 tm-flex-center tm-flex-col">
          <img src={profile} alt="profile" className="rounded-circle mb-4" width="137" height="150"/>
          <p className="tm-text-color-white small tm-font-thin mb-0">Built by me as a graduation thesis project, this application is in beta form. The bugs are continuously solved and the app is imporved until it will get in a final production form. Thank you for the understanding!</p>
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
          <h2 className="tm-align-left">What if my car is not on the list?</h2>
          <p>No problem. There is a pending car list, where you can propose to add your car brand and model in our diagnosis flow, if you cannot already find it in our list of available cars.</p>
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
          <h2 className="mb-4 tm-text-color-primary">Alternatives in our region</h2>
          <p>In our country there is currently no application for a driver to be able to do a car diagnosis, and the few applications developed abroad do not contain in their databases popular cars in Eastern Europe and not only, such as: Dacia, Renault and many other brands.</p>
          <p className="mb-4"> The list of cars you can choose is limited to well-known brands worldwide, like BMW, Volkswagen, Mercedes and the list can continue. </p>
          <p className="mb-4">in our times it is very important to provide to the user/a potential user the informations he needs, as fast as possible.</p>
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
      <h2 className="tm-container-inner tm-text-color-white">Help us become better!</h2>
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
              <option value>Message category</option>
              <option value="ceo">Complaint</option>
              <option value="ms">Suggestion</option>
              <option value="om">Nice to have</option>
              <option value="sa">Info</option>
            </select>
          </div>
          <div className="form-group">
            <select>
              <option value>Car</option>
              <option value="100k">Dacia</option>
              <option value="200k">Renault</option>
              <option value="300k">BMW</option>
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
            <h4>Where you can find us?</h4>
            <address>
              strada Plaiul Muntelui<br />
              numar 46A, sector 1<br />
              Bucuresti, Romania
            </address>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="tm-footer-info-box">
            <p>This application is beta.<br />
              If you encounter any problem<br />
              do not hesitate to call us at<br />
              (+40)726 157 758</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <div className="row">
    <div className="col-lg-12">
      <p className="text-center small tm-copyright-text mb-0">Built with ❤ in Bucharest  -  2018</p>
    </div>
  </div>
</div></div>










</div>


</div></div>

    );
  }
}

export default App;