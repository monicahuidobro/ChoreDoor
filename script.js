let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");

let numClosedDoors = 3;

const images = ["images/robot.svg", "images/beach.svg", "images/space.svg"];
const closedImage = "file:///C:/Users/71215/Desktop/WEB/ChoreDoor/images/closed_door.svg"; 
const botImage = "file:///C:/Users/71215/Desktop/WEB/ChoreDoor/images/robot.svg"

let openDoor1;
let openDoor2;
let openDoor3;

let currentlyPlaying =true;
let currentScore = document.getElementById("current");
let currentNum = 0;

randomChoreDoorGenerator = () => {
  var choreDoor = Math.floor(Math.random()*numClosedDoors);
  switch (choreDoor){
    case 0:
      openDoor1 = images[0];
      openDoor2 = images [1];
      openDoor3 = images [2];
      break;
    case 1:
      openDoor1 = images[1];
      openDoor2 = images [0];
      openDoor3 = images [2];
      break;
    case 2:
      openDoor1 = images[2];
      openDoor2 = images [1];
      openDoor3 = images [0];
      break;
  }
}

randomChoreDoorGenerator();

isClicked = (door) => {
  if (door.src === closedImage) {
    return false;
  } else { return true; }
}

isBot = (door) => {
  if (door.src === botImage){
    return true;
  } else { return false;}
}

gameOver = (status) => {
  if (status === "win"){
    startButton.innerHTML = "You win! Play again?";
  } else if (status === "lose") {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
}

playDoor = (door) => {
  numClosedDoors --;
  if (numClosedDoors === 0){
    gameOver("win");
  } else if (isBot(door)) {
    gameOver("lose");
  }
}

doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)){
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
}
}
doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);}
}
doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);}
}

startButton.onclick = () => {
  if (!currentlyPlaying){
    startRound();
  }
}

startRound = () => {
  doorImage1.src = closedImage;
  doorImage2.src = closedImage;
  doorImage3.src = closedImage;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = "Good Luck";
  currentNum ++;
  currentScore.innerHTML = currentNum;
}
