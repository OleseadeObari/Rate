"use strict";
const btn = document.querySelectorAll(".button");
// const submit = document.querySelector(".btn");
const submit = document.querySelector(".submit");
// const submit = document.getELementById("submit");
// console.log(submit);
console.log(btn);
console.log(submit);

submit.addEventListener("click", function () {
  console.log(" i was clicked");
});

// btn.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     const style = e.currentTarget;
//     if (style.contains("one")) {
//       one.style.backgroundColor = "red";
//     }
//   });
// });

btn.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    if (style.contains("one")) {
      one.style.backgroundColor = "hsl(25, 97%, 53%)";
      one.style.color = "hsl(0, 0%, 100%)";
      one.style.fontWeight = "bold";
    } else if (style.contains("two")) {
      two.style.backgroundColor = "hsl(25, 97%, 53%)";
      two.style.color = "hsl(0, 0%, 100%)";
      two.style.fontWeight = "bold";
      {
        one.style.backgroundColor = "hsl(25, 97%, 53%)";
        one.style.color = "hsl(0, 0%, 100%)";
        one.style.fontWeight = "bold";
      }
    } else if (style.contains("three")) {
      three.style.backgroundColor = "hsl(25, 97%, 53%)";
      three.style.color = "hsl(0, 0%, 100%)";
      three.style.fontWeight = "bold";
      {
        one.style.backgroundColor = "hsl(25, 97%, 53%)";
        one.style.color = "hsl(0, 0%, 100%)";
        one.style.fontWeight = "bold";
        two.style.backgroundColor = "hsl(25, 97%, 53%)";
        two.style.color = "hsl(0, 0%, 100%)";
        two.style.fontWeight = "bold";
      }
    } else if (style.contains("four")) {
      four.style.backgroundColor = "hsl(25, 97%, 53%)";
      four.style.color = "hsl(0, 0%, 100%)";
      four.style.fontWeight = "bold";
      {
        one.style.backgroundColor = "hsl(25, 97%, 53%)";
        one.style.color = "hsl(0, 0%, 100%)";
        one.style.fontWeight = "bold";
        two.style.backgroundColor = "hsl(25, 97%, 53%)";
        two.style.color = "hsl(0, 0%, 100%)";
        two.style.fontWeight = "bold";
        three.style.backgroundColor = "hsl(25, 97%, 53%)";
        three.style.color = "hsl(0, 0%, 100%)";
        three.style.fontWeight = "bold";
      }
    } else {
      five.style.backgroundColor = "hsl(25, 97%, 53%)";
      five.style.color = "hsl(0, 0%, 100%)";
      five.style.fontWeight = "bold";
      {
        one.style.backgroundColor = "hsl(25, 97%, 53%)";
        one.style.color = "hsl(0, 0%, 100%)";
        one.style.fontWeight = "bold";
        two.style.backgroundColor = "hsl(25, 97%, 53%)";
        two.style.color = "hsl(0, 0%, 100%)";
        two.style.fontWeight = "bold";
        three.style.backgroundColor = "hsl(25, 97%, 53%)";
        three.style.color = "hsl(0, 0%, 100%)";
        three.style.fontWeight = "bold";
        four.style.backgroundColor = "hsl(25, 97%, 53%)";
        four.style.color = "hsl(0, 0%, 100%)";
        four.style.fontWeight = "bold";
      }
    }
  });
});
