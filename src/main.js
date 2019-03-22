import { Birthday } from './super-galactic-calculator';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#galactic-age').submit(function(event) {
    event.preventDefault();
    let year = parseInt($("input#birthyear").val());
    let month = parseInt($("input#birthmonth").val());
    let day = parseInt($("input#birthday").val());

    });
  });
});
