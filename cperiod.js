main();
/* Multiplication Quiz */
// Create 2 variables, a & b, and set to random integers between 3 and 9
function main(){
    let a = Math.floor(Math.random()*7)+3;
    let b = Math.floor(Math.random()*7)+3;
    let entry = 0;
    let product = a*b;
    while (entry != product && entry !="q") {
        entry = prompt(a + " * " + b + " = ??");
        if (entry == product) alert("correct");
        else alert("incorrect");
    }
}
// Embed the submission and feedback in While loop that continues until entry matches either product, or = "q".
// Embed all this code in a For loop and run it 5 times.