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
     let birthday = new Birthday(month,day,year);
     let age = Birthday.getAge(birthday);
     let mercuryAge = Birthday.getAgeMercury(age);
     let venusAge = Birthday.getAgeVenus(age);
     let marsAge = Birthday.getAgeMars(age);
     let jupiterAge = Birthday.getAgeJupiter(age);
    });
  });
