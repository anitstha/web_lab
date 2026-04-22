// Display current date
function showDate() {
    let date = new Date();
    document.getElementById("dateBox").value = date;
}

// Factorial using prompt and alert
function factorial() {
    let num = prompt("Enter a number:");
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }

    alert("Factorial = " + fact);
}

// Multiplication table
function table() {
    let num = prompt("Enter a number:");
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += num + " x " + i + " = " + (num * i) + "\n";
    }

    alert(result);
}