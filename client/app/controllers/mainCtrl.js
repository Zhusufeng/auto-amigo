angular.module('index')
 .controller('mainCtrl', function() {
   
 })
 .controller('gasCtrl', function() {

  this.gaslog = [
    {
      date: '10/19/17',
      previousMileage: 99000,
      currentMileage: 99500,
      milesDriven: 500,
      gallons: 15,
      MPG: 33.33,
      pricePerGallon: 3.25,
      totalSpent: 48.75
    }
  ];

  this.submit = function() {
    let previousMileage = document.getElementById('previousMileage').value;
    let currentMileage = document.getElementById('currentMileage').value;
    let gallons = document.getElementById('gallons').value;
    let pricePerGallon = document.getElementById('pricePerGallon').value;

    // Calculate 
    let milesDriven = (currentMileage - previousMileage).toFixed(0);
    let MPG = (milesDriven/gallons).toFixed(2); 
    let totalSpent = (gallons * pricePerGallon).toFixed(2); 

    console.log('You submitted previousMileage: ' + previousMileage + ', currentMileage: ' + currentMileage + ', gallons: ' + gallons + ', price per gallon: ' + pricePerGallon + '\nNow you got milesDriven: ' + milesDriven + ', MPG: ' + MPG + ', totalSpent: ' + totalSpent);

    this.gaslog.push(
      {
        date: '10/26/17',
        previousMileage,
        currentMileage,
        milesDriven,
        gallons,
        MPG,
        pricePerGallon,
        totalSpent
      }
    );
  };
 });