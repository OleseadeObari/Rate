"use strict";


// INITIAL CODE


// const btn1 = document.querySelector(".one");

// const btn2 = document.querySelector(".two");
// const btn3 = document.querySelector(".three");
// const btn4 = document.querySelector(".four");
// const btn5 = document.querySelector(".five");

// let clicked = true;
// let click1 = false;
// let click2 = false;
// let click3 = false;
// let click4 = false;
// let click5 = false;
// function changeCol1() {
//   click1 = true;
//   if (clicked == true && click1 == true) {
//     btn1.style.backgroundColo r = "hsl(25, 97%, 53%)";
//     btn1.style.fontWeight = "bold";
//     btn1.style.color = "hsl(0, 0%, 100%)";
//     console.log("true");
//     console.log("you tapped btn 1");
//     btn2.style.backgroundColor = " hsl(213, 19%, 20%)";
//     btn3.style.backgroundColor = " hsl(213, 19%, 20%)";
//     btn4.style.backgroundColor = " hsl(213, 19%, 20%)";
//     btn5.style.backgroundColor = " hsl(213, 19%, 20%)";
//     boldMe();
//     btn2.style.fontWeight = "400";
//     btn2.style.color = "hsl(216, 12%, 54%)";
//     btn3.style.fontWeight = "400";
//     btn3.style.color = "hsl(216, 12%, 54%)";
//     btn4.style.fontWeight = "400";
//     btn4.style.color = "hsl(216, 12%, 54%)";
//     btn5.style.fontWeight = "400";
//     btn5.style.color = "hsl(216, 12%, 54%)";
//   }
// }

// function changeCol2() {
//   click2 = true;
//   if (clicked == true && click2 == true) {
//     btn1.style.backgroundColor = "hsl(25, 97%, 53%)";
//     btn2.style.backgroundColor = "hsl(25, 97%, 53%)";
//     console.log("you tapped btn 2");
//     btn3.style.backgroundColor = " hsl(213, 19%, 20%)";
//     btn4.style.backgroundColor = " hsl(213, 19%, 20%)";
//     btn5.style.backgroundColor = " hsl(213, 19%, 20%)";
//     boldMe();
//     btn3.style.fontWeight = "400";
//     btn3.style.color = "hsl(216, 12%, 54%)";
//     btn4.style.fontWeight = "400";
//     btn4.style.color = "hsl(216, 12%, 54%)";
//     btn5.style.fontWeight = "400";
//     btn5.style.color = "hsl(216, 12%, 54%)";
//   }
// }

// function changeCol3() {
//   click3 = true;
//   if (clicked == true && click3 == true) {
//     btn1.style.backgroundColor = "hsl(25, 97%, 53%)";
//     btn2.style.backgroundColor = "hsl(25, 97%, 53%)";
//     btn3.style.backgroundColor = "hsl(25, 97%, 53%)";
//     console.log("you tapped btn 3");
//     btn4.style.backgroundColor = " hsl(213, 19%, 20%)";
//     btn5.style.backgroundColor = " hsl(213, 19%, 20%)";
//     boldMe();
//     btn4.style.fontWeight = "400";
//     btn4.style.color = "hsl(216, 12%, 54%)";
//     btn5.style.fontWeight = "400";
//     btn5.style.color = "hsl(216, 12%, 54%)";
//   }
// }

// function changeCol4() {
//   click4 = true;
//   if (clicked == true && click4 == true) {
//     btn1.style.backgroundColor = "hsl(25, 97%, 53%)";
//     btn2.style.backgroundColor = "hsl(25, 97%, 53%)";
//     btn3.style.backgroundColor = "hsl(25, 97%, 53%)";
//     btn4.style.backgroundColor = "hsl(25, 97%, 53%)";
//     console.log("you tapped btn 4");
//     btn5.style.backgroundColor = " hsl(213, 19%, 20%)";
//     boldMe();
//     btn5.style.fontWeight = "400";
//     btn5.style.color = "hsl(216, 12%, 54%)";
//   }
// }

// function changeCol5() {
//   click5 = true;
//   if (clicked == true && click5 == true) {
//     btn1.style.backgroundColor = "hsl(25, 97%, 53%)";
//     btn2.style.backgroundColor = "hsl(25, 97%, 53%)";
//     btn3.style.backgroundColor = "hsl(25, 97%, 53%)";
//     btn4.style.backgroundColor = "hsl(25, 97%, 53%)";
//     btn5.style.backgroundColor = "hsl(25, 97%, 53%)";
//     console.log("you tapped btn 5");
//     boldMe();
//   }
// }

// function boldMe() {
//   btn1.style.fontWeight = "bold";
//   btn2.style.fontWeight = "bold";
//   btn3.style.fontWeight = "bold";
//   btn4.style.fontWeight = "bold";
//   btn5.style.fontWeight = "bold";
//   btn1.style.color = "hsl(0, 0%, 100%)";
//   btn2.style.color = "hsl(0, 0%, 100%)";
//   btn3.style.color = "hsl(0, 0%, 100%)";
//   btn4.style.color = "hsl(0, 0%, 100%)";
//   btn5.style.color = "hsl(0, 0%, 100%)";
//   return;
// 

// REFACTORED CODE!
const buttons = document.querySelectorAll('.one');

function changeCol(val, event) {
  buttons.forEach((button) => {
    if(button.classList.contains('orange')) {
      button.classList.remove('orange');
    };
  });

  for(let i = 0; i < val; i++) {
    buttons[i].classList.add('orange');
  }
}w

// ! DID IT
// MY FIRST EVER PROJECT WITH JAVASCRIPT
