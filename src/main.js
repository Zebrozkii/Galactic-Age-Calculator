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
    let age = userInput.age;
    let mercAge = userInput.getAgeMercury();
    let venAge = userInput.getAgeVenus();
    let marAge = userInput.getAgeMars();
    let jupAge = userInput.getAgeJupiter();
    $("#solution").text("you are " + age + " years old");
    $("#mercuryYears").text("you are " + mercAge + " years old on Mercury");
    $("#venusYears").text("you are " + venAge + " years old on Venus");
    $("#marsYears").text("you are " + marAge + " years old on Mars");
      $("#jupiterYears").text("you are " + jupAge + " years old on Jupiter");

    });
  });
