alert("Hello World!");

    //Prompt user for their name
    let name = prompt("Enter your name");
    document.querySelector("#name").innerHTML = "Hello, " + name + ". Nice to meet you.";

    //Prompt user for two numbers
    let amount = parseInt(prompt("Enter the number amount"));
    let taxRate = parseInt(prompt("Enter the tax rate:"));
    let total = ((taxRate/100)*amount) + amount;
    document.querySelector("#amount").innerHTML = "$" +amount;
    document.querySelector("#tax-rate").innerHTML = taxRate + "%";
    document.querySelector("#total").innerHTML = "$" + parseFloat(total).toFixed(2);