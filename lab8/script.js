// Alert
function showAlert() {
    alert("This is an alert box!");
}

// Confirm
function showConfirm() {
    let result = confirm("Do you like JavaScript?");
    if (result) {
        alert("You clicked OK");
    } else {
        alert("You clicked Cancel");
    }
}

// Prompt
function showPrompt() {
    let name = prompt("Enter your name:");
    if (name) {
        alert("Hello " + name);
    }
}

// Change title color on mouse events
let title = document.getElementById("title");

title.onmouseover = function () {
    title.style.color = "red";
};

title.onmouseout = function () {
    title.style.color = "black";
};

// Modify list items using DOM methods
function changeList() {

    // getElementById
    let list = document.getElementById("myList");

    // getElementsByClassName
    let items = document.getElementsByClassName("item");

    // getElementsByTagName
    let liTags = document.getElementsByTagName("li");

    // Change first item
    items[0].innerHTML = "Updated Item 1";

    // Change second item
    liTags[1].innerHTML = "Updated Item 2";

    // Add new item
    let newItem = document.createElement("li");
    newItem.innerHTML = "New Item Added";
    list.appendChild(newItem);
}