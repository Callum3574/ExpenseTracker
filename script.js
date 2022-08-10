"use strict";

// This is assiging the button & table to a variable so it can be accessed in JS
let btnAdd = document.querySelector("button");
let table = document.querySelector("table");

// This is setting each ID where something is inputted to a variable. querySelector is a method of Element interface. This enables us to access the certain ID's in JS
let nameInput = document.querySelector("#name");
let amountInput = document.querySelector("#amount");
let dateInput = document.querySelector("#date");
let btnRemove1 = document.getElementById("newBtn");

// The event listner is awaiting for the 'click to happen'. When it does, the function is run. The .value is used here to return the value of the value attribute of a text field.The value attribute specifies the value of an <input> element. In other words, the .value will return what is inputted by user. .value is a property. We have assigned the input's to variables named name, amount & date, as these are the options for user to input.
btnAdd.addEventListener("click", () => {
  let name = nameInput.value;
  let amount = amountInput.value;
  let date = dateInput.value;
  let btn = btnRemove1.innerHTML;

  // The template here is to strucutre the format in which will be outputted when function is called (button click in this case). This template is for the additional elements that will be added. The same format has been used here as it is in the HTML file.
  let template = `
<tr>
  <td>${name}</td>
  <td>${amount}</td>
  <td>${date}<div><button>${btn}</button></div></td>
  </tr> 
`;

  // The table.innerHTML is the oringal HTML (innerHTML reads between the HTML tags) & then the new 'template' which will have the updated input will be added to oringal HTML. ( += ) adds the value of the right operand to a variable and assigns the result to the variable
  table.innerHTML = table.innerHTML + template;
});

let btnRemove = document.getElementById("remove");

btnRemove.addEventListener("click", () => {
  let childrenArr = table.children;
  let lastChild = childrenArr[childrenArr.length - 1];
  lastChild.remove();
  console.log(`test`);
});
