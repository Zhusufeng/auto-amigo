angular.module('index')
  .controller('gasCtrl', function() {

    this.gaslog = [
      {
        date: '10/19/2017',
        previousMileage: 99000,
        currentMileage: 99500,
        milesDriven: 500,
        gallons: 15,
        MPG: 33.33,
        pricePerGallon: 3.25,
        totalSpent: 48.75
      }
    ];

    this.createDate = function() {
      const today = new Date();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      const year = today.getFullYear();
      const date = month + '/' + day + '/' + year;

      return date;
    };

    this.calculateStats = function(cm, pm, g, ppg) {
      let milesDriven = (cm - pm).toFixed(0);
      let MPG = (milesDriven/g).toFixed(2);
      let totalSpent = (g * ppg).toFixed(2);

      return {milesDriven, MPG, totalSpent};
    };

    this.submit = function() {
      let previousMileage = document.getElementById('previousMileage').value;
      let currentMileage = document.getElementById('currentMileage').value;
      let gallons = document.getElementById('gallons').value;
      let pricePerGallon = document.getElementById('pricePerGallon').value;

      // Calculate, use destructuring
      let {milesDriven, MPG, totalSpent} = this.calculateStats(currentMileage, previousMileage, gallons, pricePerGallon);

      console.log('You submitted previousMileage: ' + previousMileage + ', currentMileage: ' + currentMileage + ', gallons: ' + gallons + ', price per gallon: ' + pricePerGallon + '\nNow you got milesDriven: ' + milesDriven + ', MPG: ' + MPG + ', totalSpent: ' + totalSpent);

      // Get date
      const date = this.createDate();

      this.gaslog.push(
        {
          date,
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