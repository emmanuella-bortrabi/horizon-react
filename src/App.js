import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

<div class="container-fluid">

<div class="row">
  <div class="col-md-2 a">
     <img src="images/office.png" />
  </div>
  <div class="col-md-2 flag">
     <img src="images/gh.png" />
     <img src="images/kenya.png"  />
     <img src="images/uk.png" />
  </div>
  <div class="col-md-2">
   <h4>About Us</h4>
  </div>
   
</div>

<div className="container-fluid">
<div class="row">
  <div class="col-md-12">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

<ol class="carousel-indicators">
  <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
</ol>


<div class="carousel-inner" role="listbox">
  <div class="item active">
    <img src="images/office 5.jpg"alt="..."/>
   
  </div>
  <div class="item">
    <img src="images/office 5.jpg" alt="..."/>
   
  </div>
</div>


<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>
  </div>  
</div>
</div>




<br/>



<div class="row">

<h1>PLANS</h1>
<div class=" col-md-3">
  <div class="thumbnail">
    <img src="images/office .jpg.jpg"/>
    <div class="caption">
      <h3>Virtual Offices</h3>
      <p>Our virtual offices allows your business to get our location address,phone services and also you become a member of our community with benefits such as access to our meeting rooms.</p>
    </div>
  </div>
</div>

<div class=" col-md-3">
  <div class="thumbnail">
    <img src="images/office 6.jpg" alt="..."/>
    <div class="caption">
      <h3>Customised Office</h3>
      <p>Our customized offices offer a great location for your business and you can customize your office to suit your preferences.Also,you become a member of our community with benefits such as access to our meeting rooms.</p>
    </div>
  </div>
</div>

<div class=" col-md-3">
  <div class="thumbnail">
    <img src="images/office tour.jpg" alt="..."/>
    <div class="caption">
      <h3>Serviced Offices</h3>
      <p>Our serviced offices offer a great location for your business and we provide services such as internet,utilities and offers from our parteners.Also,you become a member of our community with benefits such as access to our meeting rooms.</p>
    </div>
  </div>
</div>

<div class=" col-md-3">
  <div class="thumbnail">
    <img src="images/work space.jpg" alt="..."/>
    <div class="caption">
      <h3>Meeting Room</h3>
      <p>Our meeting rooms offer a great location for your meeting and business parteners.We also offer presentation equipment and coffee.Also,you become a member of our community with benefits such as access to our meeting rooms.</p>
    </div>
  </div>
</div>

</div>
</div>

<div className="container">
<div class="footer">
<div class="row">
  <div class="col-md-4 ella">
   <h4>VISIT US IN GHANA</h4>
<h5> Accra.Ghana</h5>
<p class="b"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class="col-md-4 ella">
    <h4>VISIT US IN KENYA</h4>
<h5> Nairobi.Kenya</h5>
<p class="b"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div class="col-md-4 ella">
   <h4>VISIT US IN U.K</h4>
<h5> London.U.K</h5>
<p class="b"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>

</div>
</div>






</div>
 
    </div>
    
  );
}

export default App;
