// img Object constructor, tracker Object literal, event handler

var allProducts = [];
var productName = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];

function Product(name) {
  this.name = name;
  this.voteCount = 0;
  this.path = 'images/' + name + '.jpg';
  allProducts.push(this);
};

function productMaker(arr) { // For loop and function call to create new instances  TODO Rework this function into an iffy
  for (var p = 0; p < arr.length; p++){
    var newProduct = new Product(arr[p]);
  }
}
productMaker(productName);

var productRanker = {
  imageSec: document.getElementById('images'),  //May want to declare a bunch of stuff here. Have not been able to get this to work
  ranIndex: 0,
  getRandomIndex: function(arr) { //generate a random number between 0 and 13
    return Math.floor(Math.random() * arr.length);
    // console.log('The random number is ' + ranIndex);
  },

  displayImages: function() { //render three different images to page
    var imageDiv = document.getElementById('images');
    var img1 = document.getElementById('pic1');
    var img2 = document.getElementById('pic2');
    var img3 = document.getElementById('pic3');
    // for (var i = 0; i < 3; i++) {
    img1.src = allProducts[this.getRandomIndex(allProducts)].path;
    console.log(img1.src);
    img2.src = allProducts[this.getRandomIndex(allProducts)].path;
    console.log(img2.src);
    img3.src = allProducts[this.getRandomIndex(allProducts)].path;
    console.log(img3.src);
    if (img1.src === img2.src || img1.src === img3.src || img2.src === img3.src) {
      this.displayImages();
    }
      // var imgEl = document.createElement('img');
      // var num = productRanker.getRandomIndex(allProducts);
      // console.log(ranIndex);
      // imgEl.src = allProducts[ranIndex].path; //not working
      // console.log(imgEl);
      // imageDiv.appendChild(imgEl);
    // }
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
