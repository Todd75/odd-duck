'use strict';

// Global Variables
let inventory = document.querySelector('#oddDucksProject');
let image1 = document.querySelector('#imageOne');
let image2 = document.getElementById('imageTwo');
let image3 = document.querySelector('#imageThree');
let viewResults = document.getElementById('resultsViews');
let votes = document.querySelector('#viewResults');
let maxVotes = 25;
let userVotes = 0;
let indexArray = [];
let inventoryArray = [];

function MyInventory(src, name, fileExtension, alt) {
  this.name = name;
  this.fileExtension = fileExtension;
  this.votes = 0;
  this.display = 0;
  this.src = src;
  this.alt = alt;
  inventoryArray.push(this);
}
// Function creates the random images 
function randomInventory() {
  return Math.floor(Math.random() * inventoryArray.length);
}
// function that makes sure the images are not the same
function displayInventory() {

  while (indexArray.length < 10) {
    let ranNumber = randomInventory();
    if (!indexArray.includes(ranNumber)) {
      indexArray.push(ranNumber);
    }
  }
  let inventory1 = indexArray.shift();
  let inventory2 = indexArray.shift();
  let inventory3 = indexArray.shift();
  console.log(inventory1, inventory2, inventory3);
  image1.src = inventoryArray[inventory1].src;
  image1.alt = inventoryArray[inventory1].name;
  inventoryArray[inventory1].display++;
  image2.src = inventoryArray[inventory2].src;
  image2.alt = inventoryArray[inventory2].name;
  inventoryArray[inventory2].display++;
  image3.src = inventoryArray[inventory3].src;
  image3.alt = inventoryArray[inventory3].name;
  inventoryArray[inventory3].display++;
}

// pulls any data from local storage and creates an array of items
function getData() {
  let storedItems = localStorage.getItem('allProducts');
  // load saved items from storage
  if (storedItems) {
    let parsedItem = JSON.parse(storedItems);
    inventoryArray = parsedItem;
    console.log(parsedItem);
  } else {
    new MyInventory('img/bag.jpg', 'bag', 'jpg', 'bag');
    new MyInventory('img/banana.jpg', 'banana', 'jpg', 'banana');
    new MyInventory('img/bathroom.jpg', 'bathroom', 'jpg', 'bathroom');
    new MyInventory('img/boots.jpg', 'boots', 'jpg', 'boots');
    new MyInventory('img/breakfast.jpg', 'breakfast', 'jpg', 'breakfast');
    new MyInventory('img/bubblegum.jpg', 'bubblegum', 'jpg', 'bubblegum');
    new MyInventory('img/chair.jpg', 'wchair', 'jpg', 'chair');
    new MyInventory('img/cthulhu.jpg', 'wcthulhu', 'jpg', 'cthulhu');
    new MyInventory('img/dog-duck.jpg', 'dog-duck', 'jpg', 'dog-duck');
    new MyInventory('img/dragon.jpg', 'dragon', 'jpg', 'dragon');
    new MyInventory('img/pen.jpg', 'pen', 'jpg', 'pen');
    new MyInventory('img/pet-sweep.jpg', 'pet-sweep', 'jpg', 'pet-sweep');
    new MyInventory('img/scissors.jpg', 'scissors', 'jpg', 'scissors');
    new MyInventory('img/shark.jpg', 'shark', 'jpg', 'shark');
    new MyInventory('img/sweep.png', 'sweep', 'png', 'sweep');
    new MyInventory('img/tauntaun.jpg', 'tauntaun', 'tauntaun');
    new MyInventory('img/unicorn.jpg', 'unicorn', 'jpg', 'unicorn');
    new MyInventory('img/water-can.jpg', 'water-can', 'jpg', 'water-can');
    new MyInventory('img/wine-glass.jpg', 'wine-glass', 'jpg', 'wine-glass');
  }
}
// displays the results to the user
function displayResults() {
  for (let i = 0; i < inventoryArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${inventoryArray[i].name}: ${inventoryArray[i].votes} votes and ${inventoryArray[i].display} views.`;
    viewResults.appendChild(li);
  }
}
// click event that handles the user picking pictures
function handleClicks(event) {
  if (event.target.name === inventoryArray.name) {
    alert('Please select an image.');
  }
  

  let clickedInventory = event.target.alt;
  for (let i = 0; i < inventoryArray.length; i++) {
    if (clickedInventory === inventoryArray[i].alt) {
      inventoryArray[i].votes++;
      userVotes++;
      break;
    }
  }
  if (userVotes === maxVotes) {
    inventory.removeEventListener('click', handleClicks);
    displayResults();
    chartMaker();
  } else {
    storedData();
    displayInventory();
  }
}

// storing the data collected in local storage
function storedData() {
  let viewedInventory = JSON.stringify(inventoryArray);
  localStorage.setItem('display', viewedInventory);
}
// making the chart from the data collected
function chartMaker() {
  let inventoryNames = [];
  let productViews = [];
  let productVotes = [];
  for (let i = 0; i < inventoryArray.length; i++) {
    inventoryNames.push(inventoryArray[i].name);
    productViews.push(inventoryArray[i].display);
    productVotes.push(inventoryArray[i].votes);
  }
  const labels = inventoryNames;
  const data = {
    labels: labels,
    datasets: [{
      label: 'Number of Votes',
      data: productVotes,
      backgroundColor: [
        'rgba(171, 132, 118, 0.2)',
      ],
      borderColor: [
        'rgb(171, 132, 118)'
      ],
      hoverBackgroundColor: [
        'lightyellow',
      ],
      hoverBorderColor: [
        'red',
      ],
      borderWidth: 1
    },
    {
      label: 'Number of Views',
      data: productViews,
      backgroundColor: [
        'rgba(25, 99, 132, 0.2)',
      ],
      borderColor: [
        'black'
      ],
      hoverBackgroundColor: [
        'lightblue',
      ],
      hoverBorderColor: [
        'blue',
      ],
      borderWidth: 1
    }]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}
inventory.addEventListener('click', handleClicks);
getData();
displayInventory();
