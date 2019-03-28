import  User  from '../src/super-galactic-calculator.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('form#galactic-age').submit(function(event) {
    event.preventDefault();
    let year = parseInt($("input#year").val());
    let month = parseInt($("input#month").val());
    let day = parseInt($("input#day").val());
    let lifeExpectancy = parseInt($("input#lifeExpectancy").val());
    let userInput = new User(year,month,day,lifeExpectancy);
    console.log(userInput);
    });
  });
