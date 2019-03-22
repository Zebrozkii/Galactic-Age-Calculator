 import { Birthday } from './super-galactic-calculator';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#galactic-age').submit(function(event) {
    event.preventDefault();
    let year = parseInt($("#birthyear").val());
    let month = parseInt($("#birthmonth").val());
    let day = parseInt($("#birthday").val());
    let birthday = new Birthday(month,day,year);
    console.log(birthday);
    });
  });
