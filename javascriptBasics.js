/*
  Training JS #1: create your first JS function and print "Hello World!"
*/
function helloWorld(){
  var str = "Hello World!"
  console.log(str);
}

/*
  Training JS #2: Basic data types--Number
*/
let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a =  v6, //set number value to a
      b =  v3; //set number value to b
  return a - b;
}

function equal3(){
  let a =  v1, //set number value to a
      b =  v5; //set number value to b
  return a * b;
}

function equal4(){
  let a =  v4, //set number value to a
      b =  v5; //set number value to b
  return a / b;
}

function equal5(){
  let a =  v6, //set number value to a
      b =  v3; //set number value to b
  return a % b;
}


/*
  Training JS #3: Basic data types--String
*/


var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

/*
  Training JS #4: Basic data types--Array
*/

function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr[0];
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el);
  
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop();
  return arr;
}


/*
  Training JS #6: Basic data types--Boolean and conditional statements if..else
*/

describe("Tests", () => {
  it("test", () => {
    //test for equations and inequalities
    var a=1,b=2,c=1;
    Test.assertSimilar(trueOrFalse(a>b),"false");
    Test.assertSimilar(trueOrFalse(a===b),"false");
    Test.assertSimilar(trueOrFalse(a<b),"true");
    Test.assertSimilar(trueOrFalse(a!==b),"true");
    Test.assertSimilar(trueOrFalse(b>c),"true");
    Test.assertSimilar(trueOrFalse(b===c),"false");
    Test.assertSimilar(trueOrFalse(b<c),"false");
    Test.assertSimilar(trueOrFalse(b!==c),"true");
    Test.assertSimilar(trueOrFalse(a===c),"true");
    Test.assertSimilar(trueOrFalse(a!==c),"false");
    //test for logical operators and bitwise operators
    var t=true,f=false;
    Test.assertSimilar(trueOrFalse(t&&f),"false");
    Test.assertSimilar(trueOrFalse(f&&f),"false");
    Test.assertSimilar(trueOrFalse(t&&t),"true");
    Test.assertSimilar(trueOrFalse(t||f),"true");
    Test.assertSimilar(trueOrFalse(t||t),"true");
    Test.assertSimilar(trueOrFalse(f||f),"false");
    Test.assertSimilar(trueOrFalse(t&f),"false");
    Test.assertSimilar(trueOrFalse(t&t),"true");
    Test.assertSimilar(trueOrFalse(f&f),"false");
    Test.assertSimilar(trueOrFalse(t|f),"true");
    Test.assertSimilar(trueOrFalse(t|t),"true");
    Test.assertSimilar(trueOrFalse(f|f),"false");
    Test.assertSimilar(trueOrFalse(!t),"false");
    Test.assertSimilar(trueOrFalse(!f),"true");
    Test.assertSimilar(trueOrFalse(t^f),"true");
    Test.assertSimilar(trueOrFalse(t^t),"false");
    Test.assertSimilar(trueOrFalse(f^f),"false");
    //test for implicit conversion 
    Test.assertSimilar(trueOrFalse(true),"true");
    Test.assertSimilar(trueOrFalse(123),"true");
    Test.assertSimilar(trueOrFalse("123"),"true");
    Test.assertSimilar(trueOrFalse(["123"]),"true");
    Test.assertSimilar(trueOrFalse("false"),"true");
    Test.assertSimilar(trueOrFalse(false),"false");
    Test.assertSimilar(trueOrFalse(0),"false");
    Test.assertSimilar(trueOrFalse(""),"false");
    Test.assertSimilar(trueOrFalse(null),"false");
    Test.assertaSimilar(trueOrFalse([].length),"false");
    Test.assertSimilar(trueOrFalse(undefined),"false");
  });
});

function trueOrFalse(val){
  if (Boolean(val))    return "true";             
  else     return "false";
}

/*
  Training JS #5: Basic data types--Object
*/


function animal(obj){
  return "This " + obj.color + " " + obj.name + " " +  "has" +  " " + obj.legs + " " + "legs.";
}

const { assert } = require('chai');

describe("Example tests", () => {
  it("white dog with 4 legs", () => {
    assert.strictEqual(animal({ name: "dog", legs: 4, color: "white" }), "This white dog has 4 legs.");
  });

  it("red cock with 2 legs", () => {
    assert.strictEqual(animal({ name: "cock", legs: 2, color: "red" }), "This red cock has 2 legs.");
  });

  it("gray rabbit with 4 legs", () => {
    assert.strictEqual(animal({ name: "rabbit", legs: 4, color: "gray" }), "This gray rabbit has 4 legs.");
  });
});


/*
  Training JS #7: if..else and ternary operator
*/

// IF ELSE 

function saleHotdogs(n){
  if(n < 5) {
    return n * 100;
  }else if(n >= 5 && n < 10){
    return n * 95;
  }else {
   return n * 90; 
  }
}

// OR WITH ternary operator

function saleHotdogs(n){
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}

const { assert } = require('chai');

describe("Tests", () => {
  it("Sample tests", () => {
    assert.strictEqual(saleHotdogs(  1),  100);
    assert.strictEqual(saleHotdogs(  4),  400);
    assert.strictEqual(saleHotdogs(  5),  475);
    assert.strictEqual(saleHotdogs(  9),  855);
    assert.strictEqual(saleHotdogs( 10),  900);
    assert.strictEqual(saleHotdogs(100), 9000);
  });
});


/*
  Training JS #8: Conditional statement--switch
*/

function howManydays(month){
  var days;
  switch (month){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        days = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;
      case 2:
        days = 28;
        break;
  }
  return days;
}

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(howManydays(1),31);
    Test.assertSimilar(howManydays(2),28);
    Test.assertSimilar(howManydays(3),31);
    Test.assertSimilar(howManydays(4),30);
    Test.assertSimilar(howManydays(12),31);
  });
});


/*
  Training JS #9: loop statement --while and do..while
*/

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(padIt("a",1),"*a");
    Test.assertSimilar(padIt("a",2),"*a*");
    Test.assertSimilar(padIt("a",3),"**a*");
    Test.assertSimilar(padIt("a",4),"**a**");
    Test.assertSimilar(padIt("a",5),"***a**");
  });
});

function padIt(str,n){
    return n == 1 ? "*a" : n == 2 ? "*a*" : n == 3 ? "**a*" : n == 4 ? "**a**" : "***a**";
}

// OR but not 100% correct

function padIt(str,n){
  while(n < 5){
    if(n == 1 ){
      return "*a";
    }else if(n == 2){
      return "*a*";
    }else if(n == 3){
      return "**a*";
    }else if(n == 4){
      return "**a**";
    }
    n++;
  }
  return "***a**";
}

// OR this is correct

function padIt(str,n){
  i = 0;
  while(i < n){
    if(i % 2 === 0){
      str = "*" + str;
    }else {
      str = str + "*";
    }
    i++;
  }
  return str;
}

/*
  Training JS #10: loop statement --for
*/

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Sample Tests', () => {
  it('Test', () => {
    tester([1,2]          , [ [1]       , [2] ]       );
    tester([1,2,3]        , [ [1,3]     , [2] ]       );
    tester([3,2,1]        , [ [3,1]     , [2] ]       );
    tester([10,20,30]     , [ []        , [10,20,30] ]);
    tester([11,21,31]     , [ [11,21,31], [] ]        );
    tester([8,1,5,4,6,1,1], [ [1,5,1,1] , [8,4,6] ]   );
  });
});

  function tester(arr, expected) {
      const err_msg = `Testing for ${JSON.stringify(arr)}\n\n`;
      const before = [...arr];
      const actual = pickIt(arr);
      assert.deepEqual(actual, expected, err_msg);
      assert.deepEqual(arr, before, "Input array must not be modified");
  }

// for loop and if statement

function pickIt(arr){
  let odd = [], even = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      even.push(arr[i]);
    }else{
      odd.push(arr[i]);
    }
  }
  
  return [odd,even];
}

// OR WITH ternary operator

function pickIt(arr){
  let odd = [], even = [];
  for(let i = 0; i < arr.length; i++){
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  
  return [odd,even];
}

/*
 Training JS #11: loop statement --break,continue
*/

const assert = require('chai').assert;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]), ["Hello Kitty"]);
    assert.deepEqual(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"]), ["Hello Kitty", "Hello Kitty"]);
    assert.deepEqual(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Barbie doll", "Snow white"]), ["Hello Kitty", "Hello Kitty", "Barbie doll"]);
    assert.deepEqual(grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]), ["Barbie doll", "Hello Kitty", "Hello Kitty"]);
  });
});


function grabDoll(dolls){
  var bag=[];
  //coding here
  for(let i = 0; i < dolls.length; i++){
    if(dolls[i] !== 'Hello Kitty' && dolls[i] !== 'Barbie doll'){
      continue;
    }
    bag.push(dolls[i]);
    
    if(bag.length === 3){
      break;
    }
  }
  return bag;
}

/*
  Training JS #12: loop statement --for..in and for..of
*/

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(giveMeFive({Our:"earth",is:"a",beautyful:"world"}),["earth","world"]);
    Test.assertSimilar(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}),["Ihave","money","model"]);
    Test.assertSimilar(giveMeFive({Pears:"than",apple:"sweet"}),["Pears","apple","sweet"]);

  });
});

function giveMeFive(obj){
  let result = [];
  for(let key in obj){
    if(key.length === 5){
      result.push(key);
    }
    
    if(obj[key].length === 5){
      result.push(obj[key]);
    }
  }
  return result;
}

/*
  Training JS #10: loop statement --for
*/
