main();
/* Multiplication Quiz */
// Create 2 variables, a & b, and set to random integers between 3 and 9
// Display them as the equation:  a * b = ??
// Convert this display (same line, not new) to a question and store input in a variable called entry
// Set a variable product to be the product of a and b
// Say "Correct!" if the entry and product match, "Incorrect!" if not.
// Embed the submission and feedback in While loop that continues until entry matches either product, or = "q".
// Embed all this code in a For loop and run it 5 times.

function main(){
    for (let question = 1; question <= 5; question++) {
        quizQuestion(question);
    }
}

function quizQuestion(question){
    let a = Math.floor(Math.random()*7)+3;
    let b = Math.floor(Math.random()*7)+3;
    let product = a*b;
    let entry = 0;
    while (entry != product && entry != "q") {
        entry = prompt("Question "+ question + ": What is " + a + "*" + b + "?");
        if (entry == product) alert("Correct!");
        else alert("Incorrect!");
    }
}