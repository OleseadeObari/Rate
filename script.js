"use strict";

const btn1 = document.querySelector(".one");

const btn2 = document.querySelector(".two");
const btn3 = document.querySelector(".three");
const btn4 = document.querySelector(".four");
const btn5 = document.querySelector(".five");

// let state = true;
let clicked = true;
let click1 = false;
let click2 = false;
let click3 = false;
let click4 = false;
let click5 = false;
function changeCol1() {
  click1 = true;
  if (clicked == true && click1 == true) {
    btn1.style.backgroundColor = "green";
    console.log("true");
  } else {
    btn1.style.backgroundColor = "none";
  }
}

// if (state === true) {
//   btn1.style.backgroundColor = "green";
//   console.log("state is true");
// } else {
//   btn1.style.backgroundColor = "teal";
//   console.log("state is false");
// }

function changeCol2() {
  click2 = true;
  if (clicked == true && click2 == true) {
    btn1.style.backgroundColor = "yellow";
    btn2.style.backgroundColor = "green";
  } else {
    // btn1.style.backgroundColor = "gray";
  }
}

function changeCol3() {
  click3 = true;
  if (clicked == true && click3 == true) {
    btn1.style.backgroundColor = "yellow";
    btn2.style.backgroundColor = "yellow";
    btn3.style.backgroundColor = "green";
  }
}

function changeCol4() {
  click4 = true;
  if (clicked == true && click4 == true) {
    btn1.style.backgroundColor = "yellow";
    btn2.style.backgroundColor = "yellow";
    btn3.style.backgroundColor = "yellow";
    btn4.style.backgroundColor = "green";
  } else {
    click5 == false;
    btn5.style.backgroundColor = "red";
  }
}

function changeCol5() {
  click5 = true;
  if (clicked == true && click5 == true) {
    btn1.style.backgroundColor = "yellow";
    btn2.style.backgroundColor = "yellow";
    btn3.style.backgroundColor = "yellow";
    btn4.style.backgroundColor = "yellow";
    btn5.style.backgroundColor = "green";
  }
}
// function btn5() {
//   btn5.style.backgroundColor = "none";
//   console.log("hey there");
// }
// btn1.style.backgroundColor = !clicked ? "red"  : "none";
// btn2.style.backgroundColor = !clicked ? "green" : "none";

// function changeCol2(){
//   if (state)
// };
// function changeCol1() {
//   btn1.clicked === true;
//   btn1.style.backgroundColor = "red";
//   btn1.style.fontWeight = "bold";
//   btn1.style.color = "hsl(0, 0%, 100%)";
//   console.log("button 1 was clicked");
// }
// function changeCol2() {
//   changeCol1();
//   btn2.clicked === true;
//   btn2.style.backgroundColor = "red";
//   btn2.style.fontWeight = "bold";
//   btn2.style.color = "hsl(0, 0%, 100%)";
//   console.log("button 2  was clicked");
// }

// function changeCol3() {
//   changeCol1();
//   changeCol2();
//   btn3.clicked === true;
//   btn3.style.backgroundColor = "red";
//   btn3.style.fontWeight = "bold";
//   btn3.style.color = "hsl(0, 0%, 100%)";
//   console.log("button 3  was clicked");
// }
// function changeCol4() {
//   changeCol1();
//   changeCol2();
//   changeCol3();
//   btn4.clicked === true;
//   btn4.style.backgroundColor = "red";
//   btn4.style.fontWeight = "bold";
//   btn4.style.color = "hsl(0, 0%, 100%)";
//   console.log("button 4 was clicked");
// }
// function changeCol5() {
//   changeCol1();
//   changeCol2();
//   changeCol3();
//   changeCol4();
//   btn5.clicked === true;
//   btn5.style.backgroundColor = "red";
//   btn5.style.fontWeight = "bold";
//   btn5.style.color = "hsl(0, 0%, 100%)";
//   console.log("button 5 was clicked");
// }
