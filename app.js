'use strict';

let myInventory = document.querySelector('#oddDucksProject');
let votes = documnet.querySelector('#viewResults');
let image1 = documnet.querySelector('#imageOne');
let image2 = document.getElementById('imageTwo');
let image3 = document.querySelector('#imageThree');
let viewResults = document.querySelector('#viewResults');
console.log(image1);
let maxVotes = 15;
let userVotes = 0;


function MyInventory(name, fileExtension) {
  this.name = name;
  this.fileExtension = fileExtension;
  this.votes = 0;
  this.displayVotes = 0;
  this.src = `img/${this.name}.${this.fileExtension}`;
}

function randomInventory() {
  return Math.floor(Math.random() * inventoryArray)
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
  
}
