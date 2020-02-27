var a = 180;
var b = 150;
var c = 120;

// using conditions
if (a > b && a > c) {
    console.log("Maximum Number: ",a);
} else if (b > a && b > c) {
    console.log("Maximum Number: ",b);
} else {
    console.log("Maximum Number: ",c);
}

// using max function 
var max = Math.max(a,b,c);
console.log("Using Function Max is: ",max);