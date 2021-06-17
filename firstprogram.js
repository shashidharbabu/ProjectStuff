//This is my first code for JS.yayyy
var number = 5;
//Datatypes:strings,numbers,boolean,object,undefined,null,symbol

var myName = "Shashi";
myName = 8;
console.log(myName);
let ourName = "Sonu";

var a;
var b = 9;
a = 7;

console.log(b);
b = a;
console.log(a);

console.log(b);
//case sensitive variables in javascript
var sum = 10 + 7

console.log(sum)
var q = 31;
if (q < 40) {
    q++;

}
console.log(q)

var myFirstName = "Shashidhar"
var myLastName = "Babu"
var intro = "\n lemme introduce myself "
var myString = intro + 'My name is "Shashidhar Babu" and I already told you this' + intro + "I love my self "
myString += "Thankyou.I feel calm and peaceful now "
myString = "Hi there"
console.log(myString)

var x = "";
var y = "Shashidhar";
y = "Hello world"
x = y[0];

console.log(x);




//PUSH POP SHIFT UNSHIFT SHIFT
var a = ["Shashidhar", 18, "IIITS", "ECE", 20190020235];
a.push("Hyderabad", "Brightside");
console.log(a);
var z = a.pop();
console.log(a);

//INSIDE A FUNCTION USING "var" only limits the variable(local variable) to fuctional usage and cannot be used outside function since it isn't Global varible.
//To use it as a global variable directly take the varible name and assign the value to it.Then the variable can be used Globally.

var shoppingList = [
    ["Apples", 4],
    ["Eggs", 2],
    ["Milk", 3],
    ["Chocolates", 5]
];

function yooo(S) {
    var a = "Hi";
    var b = S
    console.log("Patience and Consistency - " + a + " " +
        b)
}
yooo("Swetha");

function nextInLine(arr, item) {
    arr.push = item;
    return arr.shift();

}
var testArray = [1, 2, 3, 4, 5, 6, 7, "Shashi"];
return nextInLine(3, 2);


function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
        case 2:
            answer = "beta";
        case 3:
            answer = "gamma";
        case 4:
            answer = "delta";

        default:
            answer = "Stuff";
    }
    return answer;
}
console.log(caseInSwitch(1));