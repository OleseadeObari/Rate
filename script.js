"use strict";
const btn = document.querySelectorAll(".button");

btn.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    if (style.contains("one")) {
      btnOne();
    } else if (style.contains("two")) {
      btnOne();
      btnTwo();
    } else if (style.contains("three")) {
      btnOne();
      btnTwo();
      btnThree();
    } else if (style.contains("four")) {
      btnOne();
      btnTwo();
      btnThree();
      btnFour();
    } else {
      btnOne();
      btnTwo();
      btnThree();
      btnFour();
      btnFive();
    }
  });
});
function btnOne() {
  one.style.backgroundColor = "hsl(25, 97%, 53%)";
  one.style.color = "hsl(0, 0%, 100%)";
  one.style.fontWeight = "bold";
}
function btnTwo() {
  two.style.backgroundColor = "hsl(25, 97%, 53%)";
  two.style.color = "hsl(0, 0%, 100%)";
  two.style.fontWeight = "bold";
}
function btnThree() {
  three.style.backgroundColor = "hsl(25, 97%, 53%)";
  three.style.color = "hsl(0, 0%, 100%)";
  three.style.fontWeight = "bold";
}
function btnFour() {
  four.style.backgroundColor = "hsl(25, 97%, 53%)";
  four.style.color = "hsl(0, 0%, 100%)";
  four.style.fontWeight = "bold";
}
function btnFive() {
  five.style.backgroundColor = "hsl(25, 97%, 53%)";
  five.style.color = "hsl(0, 0%, 100%)";
  five.style.fontWeight = "bold";
}

