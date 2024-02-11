// Problem 1: Conditional Statements - Middle Number
let numA = parseInt(prompt("Enter the first number:"));
let numB = parseInt(prompt("Enter the second number:"));
let numC = parseInt(prompt("Enter the third number:"));
let middleNum=0;

// // Testing to see which number of our prompts is the middle number
if ((numA < numB && numA < numC) || (numC < numB && numB < numA)){
    middleNum = numB;
    
} else if ((numB < numA && numA < numC) || (numC < numA && numA < numB)){
    middleNum = numA;
    
} else {
    middleNum = numC;
    
} 

//Displaying the prompted numbers
document.querySelector("#even-odd").innerHTML = `The middle number of (${numA},${numB},${numC}) is ${middleNum}`;

// Writing a ternary conditional to change the alert box color depending if our middleNum is even or odd.
let alertClassName = (middleNum % 2 === 0 ? "alert-light" : "alert-danger"); // even light, odd danger
document.querySelector("#even-odd").className += " " + alertClassName;

// Problem 2: Conditional Statements: Grade Calculator
let percentage = parseInt(prompt("Enter a percentage:"));

// Invalid input message
if ((percentage < 0) || (percentage > 100)){
    alert("Incorrect - not between 0-100.");
}

// Switch statement to display the grade percentage.
let grade = '';
switch(true){
    case ((percentage >= 90) && (percentage <=100)) :
        grade = 'A'
        document.querySelector("#grade-alert").className += " alert-success";
        break;
    case ((percentage >= 80) && (percentage <=89)) :
        grade = 'B'
         document.querySelector("#grade-alert").className += " alert-primary";
        break;   
     case ((percentage)>= 65 && (percentage <= 79)) :
        grade = 'C'
        document.querySelector("#grade-alert").className += " alert-warning";
        break;  
     case ((percentage >= 50) && (percentage <= 64)) :
        grade = 'D'
        document.querySelector("#grade-alert").className += " alert-dark";
        break;
    default : 
        grade = 'F'
        document.querySelector("#grade-alert").className += " alert-danger";
        break;           

}

document.querySelector("#grade-alert").innerHTML = `The letter grade for ${percentage}% is: <span class="grade-${grade}">${grade}</span>`;

//Iteration Task 1 - Using iterative looping

// Using two for loops to iterate and display # in a triangle pattern.

let octothorpe= '';
const maxThorpeRows = 5;

// Writing the first half of our triangle pattern
for ( let i = 0; i < maxThorpeRows; i++){
    octothorpe += ' ';
    for (let j = 0; j <= i; j++){
        octothorpe += '#'
    }
    octothorpe += `<br>` // line br for each row
} document.querySelector("#octo-1").innerHTML = octothorpe;

// writing the second half of our triangle pattern
let octothorpe2 = '';
for (let i = maxThorpeRows - 1; i > 0; i--) {
    octothorpe2 += ' ';
    for (let j = 0; j < i; j++) {
        octothorpe2 += '#';
    }
    octothorpe2 += '<br>'; // Add a line break for each row
}

// Display the result of the second half in HTML
document.querySelector("#octo-2").innerHTML = octothorpe2;

// Problem 3: Iterative Looping: The Spooky Fog that Swallowed Saanich

let fogArea = 3;                                  // inital fog area size of 3 square km
let areaOfSaanich = 104;                        // the area of Saanich - its 103.8, but rounded
let fogIncrease = 0.04;                         // the size in which the fog increases every minute - 4%
let numberOfMinutes = 0;                      // counter for the number of minutes until our impending doom

// Writing a ?? loop to determine how long until we get swallowed by the Saanich fog

while (fogArea <= areaOfSaanich){
   fogArea += (fogArea * fogIncrease);
    numberOfMinutes++;
}


// Calculating how long it would take for the fog to overtake Royal Oak.
let royalFogArea = 3;
let areaOfRoyalOak = areaOfSaanich/2;
let numberOfMinutes2 = 0;

// While loop for Royal Oak
while (royalFogArea <= areaOfRoyalOak){
    royalFogArea += (royalFogArea * fogIncrease);
    numberOfMinutes2++;
}

// Displaying the results for our fight against the Fog
document.querySelector("#fog-1").innerHTML = `Minutes until Saanich is enveloped: ${numberOfMinutes}`;
document.querySelector("#fog-2").innerHTML = `Minutes until fog overcomes Tim Horton's in Royal Oak: ${numberOfMinutes2}`;
















