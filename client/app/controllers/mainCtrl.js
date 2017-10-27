angular.module('index')
 .controller('mainCtrl', function() {

  this.submit = function() {
    let previousMileage = document.getElementById('previousMileage').value;
    let currentMileage = document.getElementById('currentMileage').value;
    let gallons = document.getElementById('gallons').value;
    let pricePerGallon = document.getElementById('pricePerGallon').value;
    console.log('You submitted previousMileage: ' + previousMileage + ', currentMileage: ' + currentMileage + ', gallons: ' + gallons + ', price per gallon: ' + pricePerGallon);

    // Calculate 
    let milesDriven = previousMileage - currentMileage; // Round to 2 decimals
    let MPG = milesDriven/gallons; // Round to 2 decimals
    let totalSpent = gallons * pricePerGallon; // Round to 2 decimals

    // Append a row to table

  };
 });