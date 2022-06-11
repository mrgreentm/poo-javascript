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

let colorOne = 'red'
let colorTwo = colorOne
console.log(colorOne, colorTwo, 'first console')
colorOne = 'blue'
console.log(colorOne, colorTwo, 'second console')
