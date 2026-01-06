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
