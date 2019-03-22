import Birthday  from './super-galactic-calculator.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('form#galactic-age').submit(function(event) {
    event.preventDefault();
    let year = $("input#birthyear").val();
    // console.log(year);
    let month = $("input#birthmonth").val();
    // conosle.log(month);
    let day = $("input#birthday").val();
    // console.log(day);
     let birthday = new Birthday(month,day,year);
     $('#solution').text(birthday);
    });
  });
