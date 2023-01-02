// ##VARIABLE DECLARATION
//EXTRACT VARIABLES FROM index.html
let door1 = document.getElementById("door1");
let door2 = document.getElementById("door2");
let door3 = document.getElementById("door3");

let startButton = document.getElementById("start");

let currentScore = document.getElementById("current");
let bestScore = document.getElementById("best");

// NEW VARIABLE DECLARATIONS
let openDoor1;
let openDoor2;
let openDoor3;

let currentlyPlaying =true;
let currentNum = 0;
let bestNum = 0;
let clicked1 = 0;
let clicked2 = 0;
let clicked3 = 0;

let numClosedDoors = 3;

const images = ["images/robot.svg", "images/beach.svg", "images/space.svg", "images/closed_door.svg"];

// ## FUNCTIONS

//RANDOM NUMBER GENERATOR TO CHOOSE THE IMAGE TO SHOW AFTER CLICKING ON EACH DOOR
randomChoreDoorGenerator = () => {
  var choreDoor = Math.floor(Math.random()*numClosedDoors);
  switch (choreDoor){
    case 0:
      openDoor1 = images[0];
      door1.value = "bot";
      openDoor2 = images [1];
      door2.value = "open";
      openDoor3 = images [2];
      door3.value = "open";
      break;
    case 1:
      openDoor1 = images[1];
      door1.value = "open";
      openDoor2 = images [0];
      door2.value = "bot";
      openDoor3 = images [2];
      door3.value = "open" ;
      break;
    case 2:
      openDoor1 = images[2];
      door1.value = "open";
      openDoor2 = images [1];
      door2.value = "open";
      openDoor3 = images [0];
      door3.value = "bot";
      break;
  }
}
// TO INDICATE WHEN THE USER HAS LOST
gameOver = (status) => {
  if (status === "win"){
    startButton.innerHTML = "You win! Play again?";
    currentNum ++;
    bestNum = currentNum; 
  } else if (status === "lose") {
    startButton.innerHTML = "Game over! Play again?";
    currentNum = 0;
  }
  currentlyPlaying = false;
}
// TO CONTROL WHEN THE USER HAS CLICKED THE THREE DOORS SO THAT HE HAS WON
playDoor = (door) => {
  numClosedDoors --;
  if (numClosedDoors === 0){
    gameOver("win");
  } else if (door.value === "bot") {
    gameOver("lose");
  }
}
// ACTION TO REVEAL THE NEW IMAGE AFTER CLICKING THE DOOR
actionOnClick = (door, openDoor, clickNum) => {
  if (currentlyPlaying && clickNum === 1) {
    door.src = openDoor;
    playDoor(door);
  }
}

// RESET THE GAME AFTER CLICKING THE START BUTTON
startRound = () => {
  door1.src = images[3];
  door2.src = images[3];
  door3.src = images[3];
  clicked1 = 0;
  clicked2 = 0;
  clicked3 = 0;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = "Good Luck";
  currentScore.innerHTML = currentNum;
  if (bestNum > bestScore.innerHTML) {
    bestScore.innerHTML = bestNum;
  };
}

// ## CALL TO FUNCTIONS
randomChoreDoorGenerator();

door1.onclick = () =>{
  clicked1++;
  actionOnClick (door1, openDoor1, clicked1);
} 
door2.onclick = () =>{
  clicked2++;
  actionOnClick (door2, openDoor2, clicked2);

} 
door3.onclick = () =>{
  clicked3++;
  actionOnClick (door3, openDoor3, clicked3);

} 

startButton.onclick = () => {
  if (!currentlyPlaying){
    startRound();
    randomChoreDoorGenerator();
  }
}
