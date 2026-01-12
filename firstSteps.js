// Boolean and Operator 
let condition = true;

// not Operator
condition = !condition;

console.log(condition);

// || is or Operator (have a one true all is true)
let testing = true || true;
let testing2 = true || false;
let testing3 = false || true;
let testing4 = false || false;
let testing5 = false || true || false;

console.log(testing + " " + testing2 + " " + testing3 + " " + testing4 + " " + testing5);

// && is and Operator beide müssen true sein, damit es true ist
let and = false && false;
let and2 = false && true;
let and3 = true && false;
let and4 = true && true;
let and5 = true && false && false;
let and6 = true && true && false;
let and7 = true && false && true;
let and8 = false && false && true;
let and9 = true && true && true;
console.log(and + " " + and2 + " " + and3 + " " + and4 + " " + and5
            + " " + and6 + " " + and7 + " " + and8 + " " + and9);

// kombination von || und &&
let vergleich = true && true || false;
let vergleich2 = true && false || true;
let vergleich3 = false && true || false;
let vergleich4 = false && false || true;
let vergleich5 = false && true || true;

console.log(vergleich + " " + vergleich2 + " " + vergleich3 + " " + vergleich4
            + " " + vergleich5);


console.log(true && false);
console.log(true || false);
console.log(false && true);
console.log(true && (false || true));
console.log((true && false) || true);
console.log(!(true && false));
console.log(!(false && true));
console.log(!(true && (false || true)));
console.log((true && !(false || true)) || (false && (true || false)));
console.log((true || !(false && true)) && (!(true || false) || (false && true)));


// Gleich Operator ohne den selben Datentypen
let identisch = 45 == 45;
let identisch2 = 45 == "45";
console.log(identisch + " " + identisch2);

// Gleich Operator mit selben Datentypen
let identisch3 = 66 === 66;
let identisch4 = 67 === '65';
console.log(identisch3 + " " + identisch4);

// größer/kleiner/größer gleich/kleiner kleich

let gleich = 45 > 44;
let gleich2 = 45 > 45;
let gleich3 = 45 >= 43;
let gleich4 = 10 < 11;
let gleich5 = 10 <= 10;
let gleich6 = 10 <= 9;
let gleich7 = 33 != "34";
let gleich8 = 33 !== 38;
let gleich10 = 33 !== "37";

console.log(5 <= 10);
console.log(15 == 15);
console.log(20 > 10);
console.log((7 <= 7) == (5 < 10));
console.log((10 > 5) == (3 < 2));
console.log((12 >= 8) && (8 < 9));
console.log((3 == 3) || (10 > 20));
console.log((6 != 6) || (15 <= 20));
console.log((7 < 5) == !(10 >= 10));
console.log((4 >= 4) && (8 < 15) && (3 == 3));

// if else else ifAnweisungen 
if(5<=10){
    console.log(true);
} else{
    console.log(false);
}

let zahl = 55;
let zahl2 = 77;
let zahl3 = 11.3;
if((zahl <= zahl2) && (zahl2 <= zahl3)){
    console.log(true);
}else if((zahl <= zahl2) && (zahl2 > zahl3)){
    console.log("Die zweite Anweisung ist richtig!" + " " + true);
}else{
    console.log(false);
}

if(5<=10){
    console.log("a");
}

if(15 == 15){
    console.log("a");
}

if(20 > 10){
    console.log("c");
}

if(7<=7){
    console.log("a");
}else{
    console.log("b");
}

if(10>5){
    console.log("a");
}else if(3<2){
    console.log("b");
}else{
    console.log("c");
}

if(12>=8 && 8<9){
    console.log("a");
}else{
    console.log("b");
}

if(3 == 3){
    console.log("a");
}else if(10 > 20){
    console.log("b");
}else {
    console.log("c");
}

if(6 != 6){
    console.log("a");
}else if(15 <= 20){
    console.log("b");
}else {
    console.log("c");
}

if(7 < 5){
    console.log("a");
}else if (!(10 >= 10)){
    console.log("b");
}else {
    console.log("c");
}

if(4 >= 4 && 8 < 15 && 3 == 3){
    console.log("a");
}else{
    console.log("b");
}


// funktionen

let discount = 50;
let price = 500;

function calculatorPrice() {
    console.log((price - discount) * 1.19);
}

calculatorPrice();

// funktion mit parameter

function multiplizieren(a, b, c, d) {
    if((a < b) && (b > c)){
        let e = (a*b) + (c*d);
        console.log(e);
    }
}

multiplizieren(22, 33, 24.3, 88.5);

// funktion mit parametern und return

function subtrahieren(zahl, zahl2, zahl3, zahl4) {
    let value = (zahl * zahl2) - (zahl3 - zahl4);
    return value;
    return console.log(value);
}

function plus(zahl, zahl2, zahl3, zahl4) {
    let value = (zahl * zahl2) + (zahl3 * zahl4);
    return console.log(value);
}

console.log(subtrahieren(13, 33, 12, 10));
plus(13, 33, 12, 10);
