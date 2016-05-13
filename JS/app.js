// img Object constructor, tracker Object literal, event handler

var allProducts = [];
var productName = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];

function Product(name) {
  this.name = name;
  this.voteCount = 0;
  allProducts.push(this);
};

function productMaker(arr) { // For loop and function call to create new instances
  for (var p = 0; p < arr.length; p++){
    var newProduct = new Product(arr[p]);
  }
}
productMaker(productName);

var productRanker = {
  getRandomIndex: function(arr){ //generate a random number between 0 and 13
    var ranIndex = Math.floor(Math.random() * arr);
    console.log(ranIndex);
  },
  displayImages: function(){}, //render three images to page
  tallyClicks: function(){}, //keep track of each image's number of votes
  displayResults: function(){}, //After 15? clicks render the results as a list with 3 columns
  showButton: function(){}, //display the results button or the reset button
  onClick: function(){}, //drives what happens on click
};

// productRanker.(some variable representing an html tag).addEventListener('click', productRanker.onClick);
// productRanker.displayImages();
