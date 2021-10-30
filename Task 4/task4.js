function Arrayfunc(){
    var Movies = ["Snake Eyes", "Underground", "Joker", "Kingdom", "Bleach"];

Movies = [];
Movies = ["Snake Eyes", "Underground", "Joker", "Iron man", "Bleach"];

var fourValue = Movies[3];
console.log(fourValue);


if (fourValue.charAt(0) === "I"){
    console.log("Yay");
}

else {
    console.log("Nay");
}

}

Arrayfunc();



function Objectfunc(){
    var car = {
        model: "BMW",
        color: "black",
        price: 70
    };
    
    console.log(car);
    
    
    var Price = 70;
    if (Price > 50) {
        console.log("Expensive");
    }
    else {
        console.log("Affordable");
    }
    
    
    console.log(car.color);
}

Objectfunc();