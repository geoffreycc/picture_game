var allProducts = [];
var productName = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];

function Picture (name) {
  this.name = name;
  this.voteCount = 0;
  allProducts.push(this);
};

var bag = new Picture ('bag');

document.getElementById('pic1').src = 'images/' + bag.name + '.jpg';
