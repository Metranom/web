let a; let d;
let b; let e;
let c; let f;

a = prompt("Enter to number", "");
b = prompt("Enter to number", "");
c = a + b;
d = a - b;
e = a * b;
f = a / b;

function two_numbers()
{
    let message = "a + b = " + c;
    let message1 = "a - b = " + d;
    let message2 = "a * b = " + e;
    let message3 = "a / b = " + f;
    console.log(message);
    console.log(message1);
    console.log(message2);
    console.log(message3);
}

two_numbers();