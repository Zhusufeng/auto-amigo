angular.module('index')
  .controller('gasCtrl', function(gasService) {

    this.gaslog = [];

    // Get data from server
    gasService.getGasData()
      .then(data =>{
        this.gaslog = data;
      });

    this.createDate = function() {
      const today = new Date();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      const year = today.getFullYear();
      const date = month + '/' + day + '/' + year;

      return date;
    };

    this.calculateStats = function(cm, pm, g, ppg) {
      let milesDriven = parseInt((cm - pm));
      let MPG = parseFloat((milesDriven/g).toFixed(2));
      let totalSpent = parseFloat((g * ppg).toFixed(2));
      console.log('typeof milesDriven', typeof milesDriven);
      console.log('typeof MPG', typeof MPG);
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

      gasService.postGasData(
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
      )
        .then(data => {
          gasService.getGasData()
          .then(data =>{
            this.gaslog = data;
          });
        });
    };
  });