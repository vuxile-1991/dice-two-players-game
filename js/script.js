let leftResultNum = 0;
let rightResultNum = 0;
let result = document.querySelector("h1");
let refresh = document.querySelector("h3");
let leftName = document.querySelectorAll("p")[0];
let rightName = document.querySelectorAll("p")[1];
let leftResult = document.querySelectorAll("label")[0];
let rightResult = document.querySelectorAll("label")[1];

function namePlayer() {
  let footer = document.querySelector("a");
  roundsSet = parseFloat(prompt("How many rounds do you want?", ""));
  if (isNaN(roundsSet)) {
    alert("Input must be a number!")
    namePlayer();
  } else {
    leftPromptName = prompt("Enter player's name on the left side.");
    rightPromptName = prompt("Enter player's name on the right side.");
    leftResultNum = 0;
    rightResultNum = 0;
    leftName.innerText = leftPromptName;
    rightName.innerText = rightPromptName;
    leftResult.innerText = "0";
    rightResult.innerText = "0";
    footer.blur();
  }
}


function func() {
  x = Math.round(Math.random() * 5);
  y = Math.round(Math.random() * 5);
  x = x + 1;
  y = y + 1;
}

function rollDice() {
  let leftDice = document.querySelector(".leftDice");
  let rightDice = document.querySelector(".rightDice");
  let dice = ["<img class='img1' src='./images/dice1.png'>",
    "<img class='img1' src='./images/dice2.png'>",
    "<img class='img1' src='./images/dice3.png'>",
    "<img class='img1' src='./images/dice4.png'>",
    "<img class='img1' src='./images/dice5.png'>",
    "<img class='img1' src='./images/dice6.png'>"
  ]
  result.style.pointerEvents = "auto";
  result.style.cursor = "pointer";
  leftResult.style.userSelect = "none";
  rightResult.style.userSelect = "none";
  func();
  leftDice.innerHTML = dice[x - 1];
  rightDice.innerHTML = dice[y - 1];
  winnerDice();
  overallWinner();
}

function winnerDice() {
  if (x > y) {
    result.innerText = leftPromptName + " is a WINNER!";
    leftResultNum++;
    leftResult.innerText = leftResultNum;
  } else if (x === y) {
    result.innerText = "It's a DRAW!"
  } else {
    result.innerText = rightPromptName + " is a WINNER!";
    rightResultNum++;
    rightResult.innerText = rightResultNum;
  }
}

function btnChangeNames() {
  roundsSet = parseFloat(prompt("How many rounds do you want?", ""));
  if (isNaN(roundsSet)) {
    alert("Input must be a number!")
    btnChangeNames();
  }
  else {
  leftPromptName = prompt("Enter player's name on the left side.");
  rightPromptName = prompt("Enter player's name on the right side.");
  leftResultNum = 0;
  rightResultNum = 0;
  leftResult.innerText = "0";
  rightResult.innerText = "0";
  result.style.pointerEvents = "auto";
  result.style.cursor = "pointer";
  result.innerText = "Click here to Roll the Dice";
  refresh.style.visibility = "hidden";
  leftName.innerText = leftPromptName;
  rightName.innerText = rightPromptName;
  }
}

function overallWinner() {
  if (leftResultNum == roundsSet) {
    result.innerText = leftPromptName + " WON";
    result.style.userSelect = "none";
    result.style.pointerEvents = "none";
    result.style.cursor = "default";
    refresh.style.visibility = "visible";
  } else if (rightResultNum == roundsSet) {
    result.innerText = rightPromptName + " WON";
    result.style.userSelect = "none";
    result.style.pointerEvents = "none";
    result.style.cursor = "default";
    refresh.style.visibility = "visible";
  } else {
    console.log("What a waste");
  }
}
