var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});



readline.question("Please enter a number: ", function (number){
   
    if(number % 2 == 0) {
        console.log("Even number");
    }
    
 
    else if (number % 2 == 1) {
        console.log("Odd number");
    }

    else {
            console.log("Please try again");
        }
        readline.close();
});
