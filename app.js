'use strict';

let myInventory = document.querySelector('#oddDucksProject');
let image1 = document.querySelector('#imageOne');
let image2 = document.getElementById('imageTwo');
let image3 = document.querySelector('#imageThree');
let viewResults = document.getElementById('resultsViews');
let votes = document.querySelector('#viewResults');
let maxVotes = 25;
let userVotes = 0;
let indexArray = [];

function MyInventory(name, fileExtension) {
  this.name = name;
  this.fileExtension = fileExtension;
  this.votes = 0;
  this.display = 0;
  this.src = `img/${this.name}.${this.fileExtension}`;
}

function randomInventory() {
  return Math.floor(Math.random() * inventoryArray.length);
}
let bag = new MyInventory('bag', 'jpg');
let banana = new MyInventory('banana', 'jpg');
let bathroom = new MyInventory('bathroom', 'jpg');
let boots = new MyInventory('boots', 'jpg');
let breakfast = new MyInventory('breakfast', 'jpg');
let bubblegum = new MyInventory('bubblegum', 'jpg');
let chair = new MyInventory('chair', 'jpg');
let cthulhu = new MyInventory('cthulhu', 'jpg');
let dogDuck = new MyInventory('dog-duck', 'jpg');
let dragon = new MyInventory('dragon', 'jpg');
let pen = new MyInventory('pen', 'jpg');
let petSweep = new MyInventory('pet-sweep', 'jpg');
let scissors = new MyInventory('scissors', 'jpg');
let shark = new MyInventory('shark', 'jpg');
let sweep = new MyInventory('sweep', 'png');
let tauntaun = new MyInventory('tauntaun', 'jpg');
let unicorn = new MyInventory('unicorn', 'jpg');
let waterCan = new MyInventory('water-can', 'jpg');
let wineGlass = new MyInventory('wine-glass', 'jpg');

let inventoryArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass];


function displayInventory() {

  while (indexArray.length < 6) {
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
function displayResults() {
  for (let i = 0; i < inventoryArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${inventoryArray[i].name}: ${inventoryArray[i].votes} votes and ${inventoryArray[i].display} views.`;
    viewResults.appendChild(li);
  }
}
function handleClicks(event) {
  if (event.target === myInventory) {
    alert('Please select an image.');
  }
  userVotes++;

  let clickedInventory = event.target.alt;
  for (let i = 0; i < inventoryArray.length; i++) {
    if (clickedInventory === inventoryArray[i].name) {
      inventoryArray[i].votes++;
      break;
    }
  }
  if (userVotes === maxVotes) {
    myInventory.removeEventListener('click', handleClicks);
    displayResults();
    chartMaker();
  } else {
    displayInventory();
    storedData();
  }
}
function storedData() {
  let viewedInventory = JSON.stringify(inventoryArray);
  localStorage.setItem('display', viewedInventory);
}
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

function getData() {

}



myInventory.addEventListener('click', handleClicks);

displayInventory();
