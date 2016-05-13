// img Object constructor, tracker Object literal, event handler

var allProducts = [];
var productName = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];

function Product(name) {
  this.name = name;
  this.voteCount = 0;
  allProducts.push(this);
};

function productMaker(arr) { //                   For loop and function call to create new instances
  for (var p = 0; p < arr.length; p++){
    var newProduct = new Product(arr[p]);
  }
}
productMaker(productName);

var voteTracker = {
};

// var bag = new Picture ('bag'); // Testing object constructor

// document.getElementById('pic1').src = 'images/' + something + '.jpg'; // Testing image
