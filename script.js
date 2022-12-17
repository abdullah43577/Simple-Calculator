"use strict";
const numbOperator = document.querySelectorAll(".numb__operator");
const input = document.querySelector("input[type='text']");
const equal = document.querySelector(".equal");
const del = document.querySelector(".delete");
const reset = document.querySelector(".reset");
const radioBtns = document.querySelectorAll('input[type="radio"]');
const body = document.querySelector("body");
const calcBG = document.querySelector(".calcDetails");
const inputTXT = document.querySelector('input[type="text"]');
const buttons = document.querySelectorAll(".button");
/* 
// NUMBOPERATOR
- iterate through the nodelist of the number and airthmetic operators
- listen for click events on the number and arithmetic operators 
- assigned the concatenated string and assign it to the input.value

// EQUAL
- listened for click events on the equal button
- if there's no input.value it immediately quits the function
- if there's input, based on the input value we calculate what we have there based on what input was entered using the eval() method
- if there's the multiplication symbol which is represented as 'X'. It should replace all the occurence of that with the javascript identifiable multiplication symbol which is the asterisk symbol '*'

// DEL
- listened for click events
- immediately quits the function if there's no value inputted
- if there's an input, I initialized a variable slicer setting it's initial value to the input.value and also deleting the last index of the string using the slice() method
- the return value of slice is assigned to input.value

// RESET
- listened for click events
- onclick renders the input.value to an empty string

*/

// changing the opacity of each button anytime they're clickedd
const arr = [...radioBtns];
// console.log(arr);

arr.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";

    arr
      .filter((item) => item != element)
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

numbOperator.forEach((numbOP) => {
  numbOP.addEventListener("click", () => {
    input.value += numbOP.textContent;
  });
});

equal.addEventListener("click", () => {
  if (!input.value) return;

  errorHandler();

  if (input.value.includes("x")) {
    let changer = input.value.replaceAll("x", "*");
    input.value = eval(changer);
  }
  {
    let result = eval(input.value);
    input.value = result;
  }
});

del.addEventListener("click", () => {
  if (!input.value) return;

  if (input.value) {
    let slicer = input.value.slice(0, -1);
    input.value = slicer;
  }
});

reset.addEventListener("click", () => (input.value = ""));

/* 

// RADIO BUTTONS
- the nodelist of radio buttons all listen for click events and run a specific piece of code that removes and add background colors based on the radio button selected

*/

radioBtns[0].addEventListener("click", () => {
  body.classList.add("blue");
  body.classList.remove("white");
  body.classList.remove("darkPurple");

  inputTXT.classList.add("bluebg-input");
  inputTXT.classList.remove("whitebg-input");
  inputTXT.classList.remove("darkPurplebg-input");

  calcBG.classList.add("calcDetails");
  calcBG.classList.remove("whitebg-calcDetails");
  calcBG.classList.remove("darkPurplebg-calcDetails");

  buttons.forEach((btn) => {
    btn.classList.add("button");
    btn.classList.remove("whitebg-num");
    btn.classList.remove("darkPurplebg-num");
  });

  reset.classList.add("reset");
  reset.classList.remove("resetbg-white");
  reset.classList.remove("resetbg-purple");

  del.classList.add("delete");
  del.classList.remove("delbg-white");
  del.classList.remove("delbg-purple");

  equal.classList.add("equal");
  equal.classList.remove("equalbg-white");
  equal.classList.remove("equalbg-purple");
});

radioBtns[1].addEventListener("click", () => {
  body.classList.add("white");
  body.classList.remove("darkPurple");

  inputTXT.classList.add("whitebg-input");
  inputTXT.classList.remove("darkPurplebg-input");

  calcBG.classList.add("whitebg-calcDetails");
  calcBG.classList.remove("darkPurplebg-calcDetails");

  buttons.forEach((btn) => {
    btn.classList.add("whitebg-num");
    btn.classList.remove("darkPurplebg-num");
  });

  reset.classList.add("resetbg-white");
  reset.classList.remove("resetbg-purple");

  del.classList.add("delbg-white");
  del.classList.remove("delbg-purple");

  equal.classList.add("equalbg-white");
  equal.classList.remove("equalbg-purple");
});

radioBtns[2].addEventListener("click", () => {
  body.classList.add("darkPurple");
  body.classList.remove("white");

  inputTXT.classList.add("darkPurplebg-input");
  inputTXT.classList.remove("whitebg-input");

  calcBG.classList.add("darkPurplebg-calcDetails");
  calcBG.classList.remove("whitebg-calcDetails");

  buttons.forEach((btn) => {
    btn.classList.add("darkPurplebg-num");
    btn.classList.remove("whitebg-num");
  });

  reset.classList.add("resetbg-purple");
  reset.classList.remove("resetbg-white");

  del.classList.add("delbg-purple");
  del.classList.remove("delbg-white");

  equal.classList.add("equalbg-purple");
  equal.classList.remove("equalbg-white");
});

// function for error handling incase the user enters a text
function errorHandler() {
  // if input.value includes any character from A-Z including A and Z
  if (input.value.match(/[a-z]+/g)) {
    if (input.value.includes("x")) {
      console.log("let this pass");
    } else {
      alert("Please number only allowed");
    }
  }
}

// write a function that adds and removes classing acceping the required argument instead of having to write them manually like you did above
