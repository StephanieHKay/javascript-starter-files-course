// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
let a = 5; //let allows you to change the variable
const b = 10;
let is_thursday = true //boolean

let c = a + b
console.log(c)

a = 20

console.log(c)

c = a + b

console.log(c)

function sayHey(name ){
    console.log("Hey " + name + "!")
}

function conversation() {
    sayHey()
    console.log("How are you?")
    console.log("Goodbye")
}


conversation()

sayHey("Joe")
sayHey()

function future_age (name, current_age){
    age_in_5_years = current_age + 5
    return "Hi " + name + " You will be " + age_in_5_years + " in 5 years time."

}

console.log(future_age("Joe", 40));


//function expressions are anonymous functions that dont need a function name. the result of the fx can automatically get assigned
const squareNumber = function(number){
    return number*number
}
//vs
// function squareNumber(number){
//     return number*number
// }

console.log(squareNumber(5));


//arrow functions, unique to JS, makes syntax shorter than fx espressions
// function word, {}, and return not needed
const hey = () =>  "hey lovely humans"

function sayHey(name){
    return "hey " + name + "!"}


const sayHey2 = function(name){
    return "hey " + name + "!!"}

const sayHey3 = (name) => "hey " + name + "!!!"

console.log(sayHey("Tom"));
console.log(sayHey2("Bill"));
console.log(sayHey3("Peter"));

console.log(hey);
console.log(hey());



function multiply_ab(a,b){
    return a*b}
console.log(multiply_ab(2,11));



const calculate_seconds_from_days = function(number_of_days){
    seconds_in_days = number_of_days*24*60*60
    return "There are " + seconds_in_days + " seconds in " + number_of_days + " days"
}
console.log(calculate_seconds_from_days(5));


const calculate_cost = distance => distance*3.5
console.log(calculate_cost(5));


//logical operators wiht this object/dictionary exmample

const person ={
    name: "Joe",
    likes: "eggs",
    age: 41
}

console.log(person.name === "Joe") //true name is equal to joe
console.log(person.likes !== "prawns")//true
console.log(person.age < 3); //false

console.log(person.age >12) && (person.age >1)//&& and operator check if both true result is true

console.log(person.age >100) || (person.age >1) // || or operator only checks if one expression is true, the returns true

console.log("\n")

if (a > b) {
    console.log("hello")
}
else if (a===b)  {
    console.log("Hola")
}
else {
    console.log("bye")
};

const day = "Thursday"

if (day==="Thursday"){
    console.log("Yes it is thursday")
}
else{
    console.log("It is not thursday")
}


const stored_password = "123pass"
//const user_input = prompt("Enter your password: ");
const user_input = "123"

if (stored_password === user_input){
    console.log("Access granted, logging in...")
}
else{
    console.log("You entered the wrong password")
}


console.log("Ternary")
//Terniary operator - similar to if satements
//a condition is followed by a question mark
//an expression to execute if the condiiton is true is followed by a colon :
//finally there is an expression to execute if the condiiton is false
function getFee(isMember){
    return isMember ?"£2.00": "£10.00";
} // if member 2 will be returned otherwise 10 will be returned
function check_even_number(num){
    return (num%2 ==0) ? true:false;
}

console.log(check_even_number(2))
console.log(check_even_number(5))

//switch statements can replace multiple if checks and can compare a value with multiple variants
//switch has one or more case blocks adn an optional defauly
let x=3
switch(x){
    case 3: //ie if (x === 3)
        console.log("Too small");
        break  
    case 4:   //ie if (x==="value2")
        console.log("Perfect");
        break 
    default:
        console.log("I dont know");
        break
}


function checkname(name){
    switch(name){
        case "Harjeet":
            return ("Couse instructor");
        case "Samuel":
            return ("Couse instructor");
        case "Sarah":
            return ("Couse manager");
        case "Charleen":
            return ("Founder")
        default:
            return ("Member")

    }
}


console.log(checkname("Tom"))


function calculator(num1, num2, operation){
    switch(operation){
        case "add":
            return num1+num2;
        case "minus":
            return num1-num2;
        case "divide":
            return num1/num2;
        case "multiply":
            return num1 * num2;
        
    }
}

console.log(calculator(7,3, "multiply"))



//objects ie dictionary with key and value
let person2 = {
    name: "Monique",
    likes: "pizza"
}

//dot notation to access an object properties
console.log(person2.name);
console.log(person.likes);

person2.likes = "spaghetti"

console.log(person2)









