// Using a functiion to change an object.


function thishere(anything = "this is filler") {
   anything.model = "hyundai";
   // the name of the parameter does not matter because you are going to pass in an object to that parameter.
   // Essentially what is happening is when this function is ran the parameter "anything" will be replaced by the object passed in. The result is: 
   // myPlane.model = "hyundai"
   // This function targets the property "model" of the object passed in and changes the value to Hyundai. 
   // The change to the object is accesible outside of the function and will be used for any point from when the function was ran. 
}
const mycar = {
   make: "Honda",
   model: "Accord",
   year: 1998,
};

const myPlane = {
   make: "Boeing",
   model: 747,
   year: 2018,
   takeOff: "Los Angeles",
   destination: "Tokyo",
}

console.log(mycar.model); // "Honda"
thishere(mycar);
console.log(mycar.model); // "Hyundai"

console.log("This is a break.");

console.log(myPlane.model);
thishere(myPlane);
console.log(myPlane.model);


// ------------------------------------------------------------


// Using a function to change an array


function myFunc(whatever, x, z) {
   whatever[x] = z;
   // Similar to using a function to change an object, this function can change the values of an array. 
   // The parameter "whatever" is used target the array you wish to affect.
   // The parameter "x" is used to target the index of the value you wish to change.
   // The parameter "z" determines what the value of index "x" is changed to.
 }
 
 const arr = [45, 34, 72, 64, 12, 80, 42];

 const myNumbers = [15, 17, 50, 406, 350, 8, 1]
 
 console.log(arr[3]); // 64
//  logging the value at index 3 of the array
 myFunc(arr, 3, 30);
 //  By passing "arr" in to the parameter "whatever" you are targetting the array named arr. By passing "3" in to the parameter x you are targetting the value in that index. By passing 30 in to the parameter z you are changing the value of index 3 to the value of z.
 console.log(arr[3]); // 30
 
 console.log("This is a break.");

 console.log(myNumbers[1]); // 17
 myFunc(myNumbers, 1, 58);
 console.log(myNumbers[1]); // 58
 