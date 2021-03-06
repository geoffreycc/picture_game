var allProducts = [];
var productName = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];

function Product(name) {
  this.name = name;
  this.voteCount = 0;
  this.path = 'images/' + name + '.jpg';
  allProducts.push(this);
};

for (product in productName) {
  var newProduct = new Product(productName[product]);
}
var productRanker = {
  imageSec: document.getElementById('images'),
  img1: document.getElementById('pic1'),
  img2: document.getElementById('pic2'),
  img3: document.getElementById('pic3'),
  pickH2: document.getElementById('pick'),
  resultsList: document.getElementById('resultList'),
  buttResults: document.getElementById('results'),
  buttReset: document.getElementById('reset'),
  timeRun: 0,

  getRandomIndex: function(arr) {
    return Math.floor(Math.random() * arr.length);
  },
  hideImages: function() {
    this.img1.hidden = true;
    this.img2.hidden = true;
    this.img3.hidden = true;
    this.pickH2.textContent = 'Results';
  },
  displayImages: function() {
    var num1 = this.getRandomIndex(allProducts);
    var num2 = this.getRandomIndex(allProducts);
    var num3 = this.getRandomIndex(allProducts);
    this.img1.src = allProducts[num1].path;
    this.img1.name = allProducts[num1].name;
    this.img2.src = allProducts[num2].path;
    this.img2.name = allProducts[num2].name;
    this.img3.src = allProducts[num3].path;
    this.img3.name = allProducts[num3].name;
    if (this.img1.src === this.img2.src || this.img1.src === this.img3.src || this.img2.src === this.img3.src) {
      this.displayImages();
    }
  },
  displayTable: function() {
    var labelsArr = [];
    var dataArr = [];
    var ctx = document.getElementById('myChart');
    for (var product in allProducts) {
      labelsArr.push(allProducts[product].name.charAt(0).toUpperCase() + allProducts[product].name.slice(1).replace(/_/g, ' '));
      dataArr.push(allProducts[product].voteCount);
    }
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labelsArr,
        datasets: [{
          label: '# of Votes',
          data: dataArr,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  },
  showButton: function() {
    this.buttResults.hidden = false;
    this.buttResults.addEventListener('click', function (event) {
      event.preventDefault();
      productRanker.buttResults.hidden = true;
      productRanker.buttReset.hidden = false;
      productRanker.hideImages();
      productRanker.displayTable();
      productRanker.buttReset.addEventListener('click', function(event) {
        location.reload();
      });
    });
  },
  tallyClicks: function() {
    for (var i = 0; i < allProducts.length; i ++) {
      if (event.target.name === allProducts[i].name) {
        allProducts[i].voteCount += 1;
        this.timeRun += 1;
        localStorage.setItem('allProducts', JSON.stringify(allProducts)); //testing
      }
    } if (this.timeRun % 15 === 0) {
      this.showButton();
      productRanker.imageSec.removeEventListener('click', productRanker.onClick);
    } if (this.timeRun % 15 !== 0) {
      this.displayImages();
    }
  },
  onClick: function() {
    productRanker.tallyClicks();
  },
};

allProducts = JSON.parse(localStorage.getItem('allProducts')); //testing
productRanker.displayImages();
productRanker.imageSec.addEventListener('click', productRanker.onClick);
