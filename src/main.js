import { Birthday }  from './super-galactic-calculator.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('form#galactic-age').submit(function(event) {
    event.preventDefault();
    let year = $("input#birthyear").val();
    let month = $("input#birthmonth").val();
    let day = $("input#birthday").val();
    let expectancy = $("input#lifeExpectancy").val();
     let birthday = new Birthday(month,day,year,expectancy);
     let age = Birthday.getAge();
     let mercuryAge = Birthday.getAgeMercury();
     let venusAge = Birthday.getAgeVenus();
     let marsAge = Birthday.getAgeMars();
     let jupiterAge = Birthday.getAgeJupiter();
    });
  });
