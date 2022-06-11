//the primitive types of data are stored like a simple data type
//the primitive types are: Boolean, Number, Undefined, String and Null

let stringType = "hello, i'm an string";
let booleanType = true;
let numberType = 12;
let nullType = null;
let undefinedType = undefined;
console.log(
  typeof stringType,
  typeof booleanType,
  typeof numberType,
  typeof nullType,
  typeof undefinedType
);

/* each variable contains yourself value. Thus, the changes of diferents variables, 
don't affects a second variable */
//like the below exemple

let colorOne = "red";
let colorTwo = colorOne;
console.log(colorOne, colorTwo, "first console");
colorOne = "blue";
console.log(colorOne, colorTwo, "second console");

//comparation without type conversions
let numberOne = 12;
let numberTwo = '12';
console.log(numberOne == numberTwo)  //shows true
console.log(numberOne === numberTwo)  //shows false, because converts type of each variable

//Primitives methods
let myName = 'João';
let lowerCaseName = myName.toLowerCase(); //converts all string to lower case
let upperCaseName = myName.toUpperCase(); //converts all string to upper case
let firstLetter = myName.charAt(0); //obtains first letter of myName
let intervalOfLetter = myName.substring(0,2); //obtains an interval of 0 to 2 letters

