let leftResultNum = 0;
let rightResultNum = 0;

function namePlayer() {
  let leftName = document.querySelectorAll("p")[0];
  let rightName = document.querySelectorAll("p")[1];
  let footer = document.querySelector("a");
  leftPromptName = prompt("Enter player's name on the left side.");
  rightPromptName = prompt("Enter player's name on the right side.");
  leftName.innerText = leftPromptName;
  rightName.innerText = rightPromptName;
  footer.blur();
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
  func();
  for (let a = 1; a <= x; a++) {
    if (a === x) {
      leftDice.innerHTML = dice[x - 1];
    }
  }

  for (let b = 1; b <= y; b++) {
    if (b === y) {
      rightDice.innerHTML = dice[y - 1];
    }
  }
  winnerDice();
}

function winnerDice() {
  let result = document.querySelector("h1");
  let leftResult = document.querySelectorAll("label")[0];
  let rightResult = document.querySelectorAll("label")[1];
  if (x > y) {
    result.innerText = leftPromptName + " is the WINNER!";
    leftResultNum++;
    leftResult.innerText = leftResultNum;
  } else if (x === y) {
    result.innerText = "It's a DRAW!"
  } else {
    result.innerText = rightPromptName + " is the WINNER!";
    rightResultNum++;
    rightResult.innerText = rightResultNum ;
  }
}
