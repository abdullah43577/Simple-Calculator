// "use strict";

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

const button = document.querySelector("button");
let enteredInput = [];

numbOperator.forEach((numbOP, i) => {
  numbOP.addEventListener("click", () => {
    enteredInput.push(numbOP.textContent);
    console.log(enteredInput);
    // checking to see if the '.' button was clicked
    if (i === 14) button.disabled = true;

    input.value += numbOP.textContent;
  });
});

equal.addEventListener("click", () => {
  if (!input.value) return;

  if (input.value.includes("x")) {
    let changer = input.value.replaceAll("x", "*");
    input.value = eval(changer);
  }
  {
    let result = eval(input.value);
    input.value = result;
  }

  if (isNaN(input.value)) input.value = 0;

  button.disabled = false;
});

del.addEventListener("click", () => {
  if (!input.value) return;

  if (input.value) {
    let slicer = input.value.slice(0, -1);
    input.value = slicer;
  }

  // Deletes the last element in the array per click
  enteredInput.pop();

  if ((enteredInput = [])) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

reset.addEventListener("click", () => {
  input.value = "";
  button.disabled = false;
});

/* 

// RADIO BUTTONS
- the nodelist of radio buttons all listen for click events and invokes the switchClass function
- the switchClass() function receives 4 arguments,
** The first argument being - the element to be styled
** The second argument being - the class to be added at the click of that button
** The third argument being - the class to be removed at the click of that button
** The fourth argument being - the class to be removed at the click of that button

// SWITCH BUTTON2 - switchClass2()
- This work similarly like the switchClass() function which also accepts 4 arguments. The difference being that there's an inverse that only executes if the third background button was toggled.
- I checks if i passed in an inverse argument, if so It applies the code in the if block to the passed in argument, in the reverse other.
*/

const switchClass = (element, firstBg, secondBG, thirdBg) => {
  element.classList.add(firstBg);
  element.classList.remove(secondBG);
  element.classList.remove(thirdBg);
};

radioBtns[0].addEventListener("click", () => {
  switchClass(body, "blue", "white", "darkPurple");

  switchClass(inputTXT, "bluebg-input", "whitebg-input", "darkPurplebg-input");

  switchClass(
    calcBG,
    "calcDetails",
    "whitebg-calcDetails",
    "darkPurplebg-calcDetails"
  );

  buttons.forEach((btn) => {
    switchClass(btn, "button", "whitebg-num", "darkPurplebg-num");
  });

  switchClass(reset, "reset", "resetbg-white", "resetbg-purple");

  switchClass(del, "delete", "delbg-white", "delbg-purple");

  switchClass(equal, "equal", "equalbg-white", "equalbg-purple");
});

const switchClass2 = (element, secondBG, thirdBg, inverse) => {
  element.classList.add(secondBG);
  element.classList.remove(thirdBg);

  if (inverse) {
    element.classList.add(thirdBg);
    element.classList.remove(secondBG);
  }
};

radioBtns[1].addEventListener("click", () => {
  switchClass2(body, "white", "darkPurple");

  switchClass2(inputTXT, "whitebg-input", "darkPurplebg-input");

  switchClass2(calcBG, "whitebg-calcDetails", "darkPurplebg-calcDetails");

  buttons.forEach((btn) => {
    switchClass2(btn, "whitebg-num", "darkPurplebg-num");
  });

  switchClass2(reset, "resetbg-white", "resetbg-purple");

  switchClass2(del, "delbg-white", "delbg-purple");

  switchClass2(equal, "equalbg-white", "equalbg-purple");
});

radioBtns[2].addEventListener("click", () => {
  switchClass2(body, "white", "darkPurple", "inv");

  switchClass2(inputTXT, "whitebg-input", "darkPurplebg-input", "inv");

  switchClass2(
    calcBG,
    "whitebg-calcDetails",
    "darkPurplebg-calcDetails",
    "inv"
  );

  buttons.forEach((btn) => {
    switchClass2(btn, "whitebg-num", "darkPurplebg-num", "inv");
  });

  switchClass2(reset, "resetbg-white", "resetbg-purple", "inv");

  switchClass2(del, "delbg-white", "delbg-purple", "inv");

  switchClass2(equal, "equalbg-white", "equalbg-purple", "inv");
});
