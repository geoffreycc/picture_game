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
  img1: document.getElementById('pic1'),
  img2: document.getElementById('pic2'),
  img3: document.getElementById('pic3'),
  buttResults: document.getElementById('results'),
  buttReset: document.getElementById('reset'),
  timeRun: 0,
  getRandomIndex: function(arr) { //generate a random number between 0 and 13
    return Math.floor(Math.random() * arr.length);
  },
  displayImages: function() { //render three different images to page
    var num1 = this.getRandomIndex(allProducts);
    var num2 = this.getRandomIndex(allProducts);
    var num3 = this.getRandomIndex(allProducts);
    // console.log(allProducts[num1].path.length);
    this.img1.src = allProducts[num1].path; // TODO trim down this junk.
    // console.log (this.img1.src.length);
    // console.log (this.img1.src.slice(45));
    this.img1.name = allProducts[num1].name; // TODO try using src and .slice to trim off all the extra stuff
    this.img2.src = allProducts[num2].path;
    this.img2.name = allProducts[num2].name;
    this.img3.src = allProducts[num3].path;
    this.img3.name = allProducts[num3].name;
    if (this.img1.src === this.img2.src || this.img1.src === this.img3.src || this.img2.src === this.img3.src) { // Might not be working anymore
      this.displayImages();
    }
  },
  tallyClicks: function() { //keep track of number of votes on the instance's voteCount and on timesRun
    for (var i = 0; i < allProducts.length; i ++) {
      if (event.target.name === allProducts[i].name) {
        allProducts[i].voteCount += 1; // A picture that did not recieve a click is also getting 1 vote.
        this.timeRun += 1; // This appears to be pretty broken. Not sure how yet.
        // productRanker.displayImages();  // This may be what ruins the tally count !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        console.log(allProducts[i].voteCount + ' is the voteCount for ' + allProducts[i].name);
      }
    }
    // if (event.target.name === undefined) {
    //   console.log('Something');
    // }
    // allProducts[event.target.src]
  },
  displayResults: function() {
    // After 15? clicks show button to render the results list in three columns
    // Use an ul list
  },
  showButton: function() { //display the results button or the reset button
    if (this.timeRun === 15) {
      //Show results Button
    }
  },
  onClick: function() { //drives the events that occur when a click happens
    productRanker.imageSec.addEventListener('click', function (event) { //Placeholder junk TESTING INSIDE ONCLICK!!!!!!!!!!!!!
      event.preventDefault();
      // console.log('The event target name is ' + event.target.name);
      productRanker.tallyClicks();
      // console.log('The timeRun is ' + productRanker.timeRun);
      // console.log(event.target.src);
    });
  },
};
// productRanker.(some variable representing an html tag).addEventListener('click', productRanker.onClick);
// productRanker.displayImages();
productRanker.displayImages();
productRanker.onClick();
