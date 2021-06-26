function Arrayfunc(){
    var movies = ["Mission Imposible","Pirates of the caribean","wrath of man","6 underground","Ocean 8"];

    var fourthValue = movies[3];


    if(fourthValue.charAt(0) === "C"){
    console.log("Yay");
    }
    else{
    console.log("Nay");
        }

    movies.pop();
    movies.pop();
    movies.pop();
    movies.pop();
    movies.pop();

    movies.push("+");
    movies.push("+");
    movies.push("+");
    movies.push("Iron man");
    movies.push("+");


    var fourthValue = movies[3];


    if(fourthValue.charAt(0) === "I"){
        console.log("Yay");
    }
    else{
        console.log("Nay");
    }
}

function Objectfunc(){
    var car = {
        model: "BMW",
        color : "White",
        price : 98
    }
    
    if (car.price > 50) {
        console.log("Expensive")
    } else {
        console.log("Affordable")
    }
    
    console.log(car.color);
}

console.log(Arrayfunc());
console.log(Objectfunc());