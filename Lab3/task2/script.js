"use strict";

const input = document.getElementById("task-input");
const addButton = document.getElementById("adder");
const list = document.getElementById("todo");

function createItem (text) {
    const li = document.createElement("li");


    const checkDiv = document.createElement("div");
    checkDiv.className = "check-div";

    const checkbox = document.createElement("button");
    checkbox.className = "checkbox";
    checkbox.textContent = "";

    checkDiv.appendChild(checkbox);


    const textDiv = document.createElement("div");
    textDiv.className = "text-div"; 

    const liText = document.createElement("p");
    liText.textContent = text;

    checkbox.addEventListener("click", function () {
        checkbox.classList.toggle("checked");
        liText.classList.toggle("striked");
    });

    textDiv.appendChild(liText);


    const delDiv = document.createElement("div");
    delDiv.className = "del-div";

    const deleteButton = document.createElement("button");
    deleteButton.className = "deleter";
    deleteButton.textContent = "DEL";

    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
    });

    delDiv.appendChild(deleteButton);


    li.appendChild(checkDiv);
    li.appendChild(textDiv);
    li.appendChild(delDiv);

    return li;
}

function addItem() {
    const text = input.value.trim();
    if (text === "") return;
    const item = createItem(text);
    list.appendChild(item);
    input.value = "";
    input.focus();
}

addButton.addEventListener("click", addItem);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addItem();
    }
});