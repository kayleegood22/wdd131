const PI = 3.14;
let radius = 3;
let area = 0;


function circleArea(radius) {
   return radius * radius * PI;
}

area = circleArea(radius);

console.log("Area is: " + area);
