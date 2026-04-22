let box = document.getElementById("box");

// mouseenter event
box.addEventListener("mouseenter", function () {
    box.style.backgroundColor = "lightgreen";
    box.textContent = "Mouse Entered!";
});

// mouseleave event
box.addEventListener("mouseleave", function () {
    box.style.backgroundColor = "lightblue";
    box.textContent = "Mouse Left!";
});