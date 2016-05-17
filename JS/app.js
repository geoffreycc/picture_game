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
  resultsList: document.getElementById('resultList'),
  buttResults: document.getElementById('results'),
  buttReset: document.getElementById('reset'),
  timeRun: 0,
  getRandomIndex: function(arr) {
    return Math.floor(Math.random() * arr.length);
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
  displayResults: function() {
    for (product in allProducts) {
      var liElm = document.createElement('li');
      liElm.textContent = allProducts[product].name.charAt(0).toUpperCase() + allProducts[product].name.slice(1).replace(/_/g, ' ') + ' has ' + allProducts[product].voteCount + ' votes.';
      this.resultsList.appendChild(liElm);
    }
  },
  showButton: function() {
    this.buttResults.hidden = false;
    this.buttResults.addEventListener('click', function (event) {
      event.preventDefault();
      productRanker.buttResults.hidden = true;
      productRanker.buttReset.hidden = false;
      productRanker.displayResults();
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
      }
    } if (this.timeRun === 15) {
      this.showButton();
      productRanker.imageSec.removeEventListener('click', productRanker.onClick);
    } if (this.timeRun < 15) {
      this.displayImages();
    }
  },
  onClick: function() {
    productRanker.tallyClicks();
  },
};
productRanker.displayImages();
productRanker.imageSec.addEventListener('click', productRanker.onClick);
