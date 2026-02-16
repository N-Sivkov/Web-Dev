"use strict";

const input = document.getElementById("task-input");
const addButton = document.getElementById("add");
const list = document.getElementById("todo");

function createItem (text) {
    const li = document.createElement("li");
    li.className = "todo-item";

    // const leftSection = document.createElement('div');
    // leftSection.className = 'left-section';

    const checkbox = document.createElement("div");
    checkbox.className = "checkbox";

    const liText = document.createElement("p");
    liText.className = "todo-text";
    liText.textContent = text;

    checkbox.addEventListener("click", function () {
        checkbox.classList.toggle("checked");
        liText.classList.toggle("striked");
    });

    // leftSection.appendChild(checkbox);
    // leftSection.appendChild(liText);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "DEL";

    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
    });

    // li.appendChild(leftSection);
    li.appendChild(deleteButton);

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