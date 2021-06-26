const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Please enter a number:', function (OddEven){
    if (OddEven % 2 == 0){
        console.log("even number")
    }else if(OddEven % 2 !== 0){
        console.log("Odd number")
    }else{
        console.log("Please tr again")
    }
}
)