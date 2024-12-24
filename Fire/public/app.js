let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
console.log("Tayyab");
console.log("WMA-107831");
//Winning Pattern Array
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
//Player 'X' plays first
let xTurn = true;
let count = 0;
let player1=prompt("Enter player 1 Name and your Value is X");
let player2=prompt("Enter player 2 Name and your Value is 0");

const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));

  popupRef.classList.remove("hide");
};


const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  
  popupRef.classList.add("hide");
};


const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> "+player1.toUpperCase()+" Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> "+player2.toUpperCase()+" Wins";
  }
};


const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};


newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});


const winChecker = () => {
  
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
   
    
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
       
        winFunction(element1);
      }
    }
  }
};


btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
     
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
    
      element.innerText = "O";
      element.disabled = true;
    }
    
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    
    winChecker();
  });
});

window.onload = enableButtons;