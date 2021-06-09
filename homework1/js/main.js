let name;
let age;
let result;

name = prompt("What is your name?", "");

age = prompt("How old are you?", "");

if (age < 18) {
    alert("You are not allowed to visit this website");
}    

if (age >= 18 && age <= 22) {
    if (confirm("Are you sure you want to continue?")) {
        alert("Welcome, " + name);
    } 
    else
    alert("You are not allowed to visit this website");
}

else
{
    alert("Welcome, " + name);
}    