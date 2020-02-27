// largest element in an array 
var age = [10, 50, 9, 10, 93, 5];
var largest = age[0];
for(var i = 0; i < age.length; i++){
    var current = age[i];
    if (largest < current) {
        largest = current;
    }
}
console.log("largest element in array is: ",largest)

