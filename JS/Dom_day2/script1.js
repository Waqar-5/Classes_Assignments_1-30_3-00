// Button
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    alert("Hello, from addEventListener.");
});

// Box (only get once)
let box = document.getElementById("box");

box.addEventListener("click", function () {
    box.style.backgroundColor = "red";
});

box.addEventListener("dblclick", function () {
    box.style.backgroundColor = "brown";
});

box.addEventListener("mouseenter", function () {
    box.style.backgroundColor = "blue";
    box.style.color = "white";
    box.innerText = "Mouse Enter!";
    box.style.width = "500px";
});

box.addEventListener("mouseleave", function () {
    box.innerText = "Mouse Leave!";
    box.style.backgroundColor = "lightgreen";
    box.style.color = "black";
});

box.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("Right Click Disabled!!!");
});

// Keyboard Events
let input = document.getElementById("inputbox");
let output = document.getElementById("output");

input.addEventListener("keydown", function (event) {
    output.innerText = "Keydown is pressed! " + event.key;
});

input.addEventListener("keyup", function (event) {
    output.innerText = "Keyup is pressed! " + event.key;
});