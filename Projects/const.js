const PI = 3.14159;
let radius ;
let circumference;

// radius = window.prompt("Enter the radius :");
// radius = Number(radius);
// circumference = 2 * PI * radius ; 
// console.log(circumference);

document.getElementById("myButton").onClick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius ; 
    document.getElementById("myCir").textContent = circumference + "cm";
}