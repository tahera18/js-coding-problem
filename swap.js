// Swap Using Temp Variable 
var a = 5;
var b = 7;
console.log("Before: a =",a," b =",b);
var temp = a;
a = b;
b = temp;
console.log("After: a =",a," b =",b);

// Swap Without Using Temp Variable 
var p = 5;
var q = 7;
console.log("Before: p =",p," q =",q);
p = p + q;
q = p - q;
p = p - q; 
console.log("After: p =",p," q =",q);

// JS Specific Swap
var x = 5;
var y = 7;
console.log("Before: x =",x," y =",y);
[x,y] = [y,x]
console.log("After: x =",x," y =",y);