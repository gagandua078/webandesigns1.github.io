/* 
Author: Gagan Deep
Version: 2.1.0
*/
var spinCount = 0;
function myfunctionB() {
  if (spinCount > 100) {
    alert('No more Spins');
    return false;
  }
  var x = 1024; //min value
  var y = 9999; // max value
  document.getElementById('output').innerHTML = '';
  var deg = Math.floor(Math.random() * (x - y)) + y;

  document.getElementById('box').style.transform = 'rotate(' + deg + 'deg)';
  var element = document.getElementById('mainbox');
  element.classList.remove('animate');

  // Storage
  var newPageLoadCountValue = localStorage.getItem('pageLoadCount') + 1;

  // localStorage.setItem('pageLoadCount', newPageLoadCountValue);

  setTimeout(function () {
    element.classList.add('animate');

    while (deg >= 360) {
      deg = deg - 360;
    }

    if (deg >= 337 || deg < 22) {
      var result = (document.getElementById('output').innerHTML = 'Gaurav');
    }
    if (deg >= 22 && deg < 67) {
      var result = (document.getElementById('output').innerHTML =
        'Volunteer !!');
    }
    if (deg >= 67 && deg < 112) {
      var result = (document.getElementById('output').innerHTML = 'Aditya');
    }
    if (deg >= 112 && deg < 157) {
      var result = (document.getElementById('output').innerHTML = 'Kishan');
    }
    if (deg >= 157 && deg < 202) {
      var result = (document.getElementById('output').innerHTML = 'Sunny');
    }
    if (deg >= 202 && deg < 247) {
      var result = (document.getElementById('output').innerHTML = 'Gagan');
    }
    if (deg >= 247 && deg < 292) {
      var result = (document.getElementById('output').innerHTML = 'Dheeraj');
    }
    if (deg >= 292 && deg < 337) {
      var result = (document.getElementById('output').innerHTML = 'Sumit');
    }
    // console.log(result);
    var Presentors = 'First name';
    Presentors = localStorage.getItem('PresentorPDA') + ',' + result;
    localStorage.setItem('PresentorPDA', Presentors);
  }, 5000); //5000 = 5 second

  spinCount++;
}
// localStorage.setItem('PresentorPDA', Presentors);
var DataPresentor = localStorage.getItem('PresentorPDA');
let res = DataPresentor.split(',');
// var res = DataPresentor;
// console.table(res);

// List Content

var list = '<ul>';
for (let i of res) {
  list += `<li>${i}</li>`;
}

list += '</ul>';
document.getElementById('PresentorData').innerHTML = res;

// document.getElementById('demoB').innerHTML = list;

// console.log(localStorage.getItem('PresentorPDA'));
// Making Table
var table =
  '<table class="table   table-dark table-hover"><thead><tr><th scope="col">Presentor History</th></tr></thead>';
for (let i of res) {
  table += `<tr><td>${i}</td></tr>`;
}

table += '</table>';

document.getElementById('demoC').innerHTML = table;

function ResetData() {
  localStorage.clear(); //
  window.location.reload();
}
function ReloadPage() {
  window.location.reload();
}
