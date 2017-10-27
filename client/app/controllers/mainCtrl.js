angular.module('index')
 .controller('mainCtrl', function() {

  this.submit = function() {
    let previousMileage = document.getElementById('previousMileage').value;
    let currentMileage = document.getElementById('currentMileage').value;
    let gallons = document.getElementById('gallons').value;
    let pricePerGallon = document.getElementById('pricePerGallon').value;
    // document.getElementById('gasForm').submit();
    console.log('You submitted previousMileage: ' + previousMileage + ', currentMileage: ' + currentMileage + ', gallons: ' + gallons + ', price per gallon: ' + pricePerGallon);
  };
 });