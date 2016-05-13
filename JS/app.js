// img Object constructor, tracker Object literal, event handler

var allProducts = [];
var productName = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];

function Product(name) {
  this.name = name;
  this.voteCount = 0;
  this.path = 'images/' + name + '.jpg';
  allProducts.push(this);
};

function productMaker(arr) { // For loop and function call to create new instances
  for (var p = 0; p < arr.length; p++){
    var newProduct = new Product(arr[p]);
  }
}
productMaker(productName);

var productRanker = {
  getRandomIndex: function(arr) { //generate a random number between 0 and 13
    var ranIndex = Math.floor(Math.random() * arr.length);
    console.log(ranIndex);
  },
  displayImages: function() { //render three different images to page
    var imageDiv = document.getElementById('images');
    for (var i = 0; i < 3; i++) {
      var imgEl = document.createElement('img');
      var num = productRanker.getRandomIndex(allProducts);
      console.log(num);
      imgEl.src = allProducts[num].path.value; //not working
      console.log(imgEl);
      imageDiv.appendChild(imgEl);
    }
  },
  tallyClicks: function() { //keep track of number of votes
  },
  displayResults: function() { // After 15? clicks show button to render the results list in three columns
  },
  showButton: function() { //display the results button or the reset button
  },
  onClick: function() { //drives the events that occur when a click happens
  },
};

// productRanker.(some variable representing an html tag).addEventListener('click', productRanker.onClick);
// productRanker.displayImages();
