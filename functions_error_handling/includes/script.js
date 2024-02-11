// Part 1: Functions

// Writing a letterCount function that accepts a string and char
// then calculates how many times the letter appears in the string

// letterCount function
let letterCount = (string ,char ) => {
// test string and test characters
let testStr1 = "I don't know how to use the microwave in the Tech Building";
let testStr2 = "Test string two is pretty boring";
let testStr3 = "I wish I was playing video games right now but I'm taking 6 classes."
let testChr1 = 't';
let testChr2 = 's';
let testChr3 = 'r';
let testCounter1 = 0;
let testCounter2 = 0;
let testCounter3 = 0;


// test loop
for (i = 0; i < testStr1.length; i++){
    if (testChr1 == testStr1[i]) {
     testCounter1++;
    }
   
 } 
 for (i = 0; i < testStr2.length; i++){
    if (testChr2 == testStr2[i]) {
     testCounter2++;
    }
   
 } 
 for (i = 0; i < testStr3.length; i++){
    if (testChr3 == testStr3[i]) {
     testCounter3++;
    }
   
 } 

// prompting the user for a string and a character
    let str = prompt("Enter a string", "Brandon is the funniest professor. Bonus point?");
    let chr = prompt("Enter a character", "i");
    let charCounter = 0;
// writing a for loop to iterate through the string and look for matches to the input character - then incrementing the charCounter if so
    for (i = 0; i < str.length; i++){
       if (chr == str[i]) {
        charCounter++;
       }
      
    } 
    // displaying test results
    document.querySelector("#test-1").innerHTML = `<span class ="bold"> The test string 1 is:</span> ${testStr1} <br> <br> The letter '${testChr1}' appears ${testCounter1} times.`

    document.querySelector("#test-2").innerHTML = `<span class ="bold"> The test string 2 is:</span> ${testStr2} <br> <br> The letter '${testChr2}' appears ${testCounter2} times.`

    document.querySelector("#test-3").innerHTML = `<span class ="bold"> The test string 3 is:</span> ${testStr3} <br> <br> The letter '${testChr3}' appears ${testCounter3} times.`


    // displaying results of our for loop   
    document.querySelector("#p1-result").innerHTML = `<span class ="bold"> The string is:</span> ${str} <br> <br> The letter '${chr}' appears ${charCounter} times.`
} // letterCount Function Ends

//Displaying our letterCount function
letterCount();

// Part 1 Exercise 2 - Date Functions

// declaring new Date() variable
let labDay = new Date(2022,2,1);
console.log(`labDay is: ${labDay}`);

//using toDateString -- this shows Day Month Date Year
console.log(labDay.toDateString());

// toTimeString() -- only shows the time values
console.log(labDay.toTimeString());

// Logging labDay as UTC.
console.log(`labDay as UTC is ${labDay.getTime()}.`);

// logging the getDate, getMonth, and getYear for labDay
// the month will display as 0 because getMonth() is zero-based.
console.log(`${labDay.getDate() + "/" + labDay.getMonth() + "/" + labDay.getFullYear()}`);

// logging hours and minutes
console.log(labDay.getHours() + " : " + labDay.getMinutes());

// declaring a variable and assigning a date 
let now = Date.now();

console.log(now);

// creating an error date with an invalid date number
let errorDate = new Date(2016,33,1);        // this will output as our OG date plus 11 months
console.log(errorDate);

// defining a date using a string literal
let invalidDate = new Date("Funruary 3, 2018");     // will output as Invalid Date
console.log(invalidDate);

// creating an options variable to change the format display for these object literals
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// displaying labDay to switch the language and display formats to German
console.log(labDay.toLocaleString('de-DE', options));

// Adding enough milliseconds to a date object to push it into the next day
let msDay = 8.64e+7;
console.log(msDay);

let msLabDay = now;
labDay = new Date(msLabDay +msDay);
console.log(labDay);



// Part 1 Exercise 2.1

// Writing a function that provides the number of days in a month
function daysInMonth (year, month) { // Use 1 for Jan, 2 for Feb, etc.
    return new Date(year, month, 0).getDate();
}


// Writing a function that determine the number of weekdays in a month
let isWeekday = (year, month, day) => {
    let weekday = new Date(year, month, day).getDay();      // getDay() returns the day as a number between 0-6 starting with Sunday
    return weekday !==0 && weekday !==6;                          // will return mon-fri
}
// writing a For Loop to iterate over the daysInMonth() and tell us how many weekdays there are.
let weekDaysInMonth = (month, year) => {
    let days = daysInMonth(month, year);
    let numberOfWeekdays = 0;
    for(let i = 0; i< days; i++){
        if(isWeekday(year, month, i+1)){
            numberOfWeekdays++;
        }
    }
    return numberOfWeekdays;
}
console.log(weekDaysInMonth(2018, 12));     // should return 21

// Writing a function to calculate the pay for the month based on user input
let monthPayroll = ()=> {
    let hourly = parseFloat(prompt("Enter an hourly wage", 50)).toFixed(2);
    let monthPay = ((hourly * 7.5) * weekDaysInMonth(2018, 12)).toFixed(2);

     document.querySelector("#payroll").innerHTML =`Month: December <br> Year: 2018 <br> Weekdays: ${weekDaysInMonth(2018,12)} <br> Salary: $${hourly} <br> Pay: $${monthPay}`;
}

//Displaying our Payroll Function
monthPayroll();

// Part 2: JS Error Handling

// Writing a function that calculates the future value based on user input
let calcFutureValue = (principle, rate, years) => {
// Writing an if statement to throw errors for input <= 0
    if (principle <= 0 ){
       throw new Error("Principle value must be greater than zero");
    } 
    else if (rate <= 0){
        throw new Error("Rate value must be greater than zero");
    }
    else if (years <= 0){
        throw new Error("Year value must be greater than zero");
    }

    let monthlyRate = (rate / 12) / 100;
    let months = (years * 12);
    let futureValue = 0;

    for (i = 0; i < months; i++){
        futureValue = (futureValue + principle) * (1 + monthlyRate);
        
    }
    return futureValue.toFixed(2);
}

let investment = 10;
let annualRate = 4;
let years = 5;

// Calling the first function - no errors
try {
   result = calcFutureValue(investment, annualRate, years );
    document.querySelector("#catch").innerHTML = `Future Value: ${result}.`;
} catch (err){
    document.querySelector("#catch").innerHTML = `ERROR: ${err.message}.`;
}

// Calling second funciton - also no errors
try {
    result = calcFutureValue(2, 3, 4 );
     document.querySelector("#catch-2").innerHTML = `Future Value: ${result}.`;
 } catch (err){
     document.querySelector("#catch-2").innerHTML = `ERROR: ${err.message}.`;
 
 }
 // Calling third function - should receive error
 try {
    result = calcFutureValue(0, annualRate, years );
     document.querySelector("#error").innerHTML = `Future Value: ${result}.`;
 } catch (err){
     document.querySelector("#error").innerHTML = `ERROR: ${err.message}.`;
 
 }




