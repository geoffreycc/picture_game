var allProducts = [];
var productName = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];

function Product(name) {
  this.name = name;
  this.voteCount = 0;
  this.path = 'images/' + name + '.jpg';
  allProducts.push(this);
};
//
// function productMaker(arr) { // For loop and function call to create new instances  TODO Rework this function into an iffy for thing in things
//   for (var p = 0; p < arr.length; p++){
//     var newProduct = new Product(arr[p]);
//   }
// }
// productMaker(productName);
//
for (product in productName) {
  var newProduct = new Product(productName[product]);
}

var productRanker = {
  imageSec: document.getElementById('images'),  //May want to declare a bunch of stuff here.
  img1: document.getElementById('pic1'),
  img2: document.getElementById('pic2'),
  img3: document.getElementById('pic3'),
  resultsList: document.getElementById('resultList'),
  // productLi: document.createElement('li'),
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
    this.img1.src = allProducts[num1].path; // TODO trim down this junk.
    this.img1.name = allProducts[num1].name; // TODO try using .slice
    this.img2.src = allProducts[num2].path;
    this.img2.name = allProducts[num2].name;
    this.img3.src = allProducts[num3].path;
    this.img3.name = allProducts[num3].name;
    if (this.img1.src === this.img2.src || this.img1.src === this.img3.src || this.img2.src === this.img3.src) {
      this.displayImages();
    }
  },
  tallyClicks: function() { //keep track of number of votes on the instance's voteCount and on timesRun
    for (var i = 0; i < allProducts.length; i ++) {
      if (event.target.name === allProducts[i].name) {
        allProducts[i].voteCount += 1;
        this.timeRun += 1;
        console.log(allProducts[i].voteCount + ' is the voteCount for ' + allProducts[i].name);
      }
    } if (this.timeRun === 15) {
      //Remove event listener
      this.showButton();
    } if (this.timeRun < 15) {
      this.displayImages();
    }
  },
  displayResults: function() {
    for (product in allProducts) {
      var liElm = document.createElement('li');
      liElm.textContent = allProducts[product].name + ' has ' + allProducts[product].voteCount + ' votes.';
      this.resultsList.appendChild(liElm);
    }
    // Render Ul in three columns and Reset button after click on Results button.
  },
  showButton: function() { //display the results button or the reset button
    this.buttResults.hidden = false;
    this.buttResults.addEventListener('click', function (event) { // Not sure where to place this
      event.preventDefault();
      console.log('The button was pressed.');
      productRanker.buttResults.hidden = true;
      productRanker.buttReset.hidden = false;
      productRanker.displayResults();
    });
  },
  onClick: function() { //drives the events that occur when a click happens
    productRanker.imageSec.addEventListener('click', function (event) {
      event.preventDefault();
      productRanker.tallyClicks();
    });
  },
};
productRanker.displayImages();
productRanker.onClick();
