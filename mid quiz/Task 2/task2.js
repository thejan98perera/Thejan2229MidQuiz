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