// Part 1: Arrays

// Part 1 Exercise 1

// Prompt the user for a string
let stringPrompt = () => {
    let str = prompt("Please enter a string", "this is a string");
    let searchKey = 't';
    let searchCounter = 0;

    // converting string into an array
   let arrayString = str.split("");
    console.log(arrayString);

// using a for loop to iterate over the array and taking out the searchKey   
    for (let i = 0; i< arrayString.length;){
        
        // incrementing the searchCounter if it matches a character in the string
        if(arrayString[i] == searchKey){
            searchCounter++;
            arrayString.splice(i,1);
        }
        else {
            i++;
        }
    }
    // displaying the string results
    document.querySelector("#exercise-1").innerHTML = `<b>The string is:</b> ${str}
                                                        <br><b>The key is:</b> ${searchKey}
                                                        <br>The character ${searchKey} appears ${searchCounter} times
                                                        <br><b>The new string is:</b> ${arrayString.join("")}`;
}

stringPrompt();

// Part 1 Exercise 2

// creating arrays for a deck of cards
let deck = [];
let suits = ["Hearts","Spades","Clubs","Diamonds"];
let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

// building a new deck of cards using a nested for loop
for (let i = 0; i < numbers.length; i++){

    for (let j = 0; j < suits.length; j++){
       deck.push(numbers[i] + " of " + suits[j]);
    }
}
console.log(deck);

// writing a function that pulls a random card, and splices the array so it can't be chosen again
let cardDeck = () => {

    // defining a constant to reference our random index generation
    const randIndex = Math.floor(Math.floor(Math.random()* deck.length));
    const randIndex2 = Math.floor(Math.floor(Math.random()* deck.length));

    // assigning card 1
    card1 = deck[randIndex];
    
    // splice the deck so we can't return the same index
    deck.splice(randIndex,1);

    // assigning card 2
    card2 = deck[randIndex2];
    // splice deck again for card 2
    deck.splice(randIndex2,1);

    // displaying the results
    document.querySelector("#exercise-2").innerHTML = `<b>Card 1 is:</b> ${card1}
                                                    <br><b> Card 2 is:</b> ${card2}`;
}

cardDeck();

// Part 2 Exercise 1

// counter for row number
let rowNum = 1;     //  counter starts at 1 since we have a row already in the HTML

// Event handler for button click - I'm getting good with the jargon, eh?
// I changed the functionality for this event from what is in the example.
document.querySelector("#myButton").onclick = () => {
    // increment row num
    rowNum++;
    
    // insert table row and display in the HTML
    document.querySelector("#sampleTable").innerHTML += `<tr>
    <td class="border-end border-top border-white p-2">Row${rowNum} cell1</td>
    <td class="border-top border-white p-2">Row${rowNum} cell2</td>
    </tr>`;
}
 

