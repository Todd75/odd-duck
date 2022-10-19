'use strict';

let myInventory = document.querySelector('#oddDucksProject');
let votes = document.querySelector('#viewResults');
let image1 = document.querySelector('#imageOne');
let image2 = document.getElementById('imageTwo');
let image3 = document.querySelector('#imageThree');
let viewResults = document.getElementById('resultsViews');
console.log(image1);
let maxVotes = 25;
let userVotes = 0;


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
  let inventory1 = randomInventory();
  let inventory2 = randomInventory();
  let inventory3 = randomInventory();
  while (inventory1 === inventory2 || inventory2 === inventory3 || inventory1 === inventory3) {
    inventory2 = randomInventory();
    inventory1 = randomInventory();
  }
  console.log(inventory1, inventory2, inventory3);

  image1.src = inventoryArray[inventory1].src;
  image1.alt = inventoryArray[inventory1].name;
  inventoryArray[inventory1].views++;
  console.log(inventoryArray[inventory1].display);
  image2.src = inventoryArray[inventory2].src;
  image2.alt = inventoryArray[inventory2].name;
  inventoryArray[inventory2].views++;
  console.log(inventoryArray[inventory2].display);
  image3.src = inventoryArray[inventory3].src;
  image3.alt = inventoryArray[inventory3].name;
  inventoryArray[inventory3].views++;
  console.log(inventoryArray[inventory3].display);
}
// let indexArray = [];

// function displayInventory() {

//   while (indexArray.length < 6) {
//     let ranNumber = randomInventory();
//     if (!indexArray.includes(ranNumber)); {
//       indexArray.push(ranNumber);
//     }
//   }
//   console.log(indexArray);
// }
// let inventory1 = indexArray.shift();
// let inventory2 = indexArray.shift();
// let inventory3 = indexArray.shift();

// const config = {
//   type: 'bar',
//   data: data,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   },
// };
// const labels = [];
// let imageNames = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass];
// let totalScore = [];
// let totalViews = [];
// for (let i = 0; i < inventoryArray.length; i++) {
//   imageNames.push(inventoryArray[i].name);
//   totalViews.push([i])
// }
// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'Number of Views',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//       'rgba(255, 159, 64, 0.2)',
//       'rgba(255, 205, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(201, 203, 207, 0.2)'
//     ],
//     borderColor: [
//       'rgb(255, 99, 132)',
//       'rgb(255, 159, 64)',
//       'rgb(255, 205, 86)',
//       'rgb(75, 192, 192)',
//       'rgb(54, 162, 235)',
//       'rgb(153, 102, 255)',
//       'rgb(201, 203, 207)'
//     ],
//     borderWidth: 1
//   },
//   {
//     label: 'Number of Votes',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//       'rgba(255, 159, 64, 0.2)',
//       'rgba(255, 205, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(201, 203, 207, 0.2)'
//     ],
//     borderColor: [
//       'rgb(255, 99, 132)',
//       'rgb(255, 159, 64)',
//       'rgb(255, 205, 86)',
//       'rgb(75, 192, 192)',
//       'rgb(54, 162, 235)',
//       'rgb(153, 102, 255)',
//       'rgb(201, 203, 207)'
//     ],
//     borderWidth: 1

//   }

//   ]
// };
// const myChart = new Chart(
//   document.getElementById('myChart'),
//   config
// );

function displayResults() {
  for (let i = 0; i < inventoryArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${inventoryArray[i].name}: ${inventoryArray[i].votes} votes.`;
    viewResults.appendChild(li);
  }
}

function handleClicks(event) {
  if (event.target === myInventory) {
    alert('Please select an image.');
  }
  console.log(event.target);
  console.log('click');
  console.log(event.target.alt);
  userVotes++;
  let clickedInventory = event.target.alt;
  for (let i = 0; i < inventoryArray.length; i++) {
    if (clickedInventory === inventoryArray[i].name) {
      console.log(inventoryArray[i]);
      inventoryArray[i].votes++;
      break;
    }
  }
  if (userVotes === maxVotes) {
    myInventory.removeEventListener('click', handleClicks);
    console.log('myInventory is finshed');
    displayResults();
    // viewResults.addEventListener('click', displayResults);
  } else {
    displayInventory();
  }
}
myInventory.addEventListener('click', handleClicks);

displayInventory();
