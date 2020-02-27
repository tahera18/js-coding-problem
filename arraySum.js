// sum of elements in an array 
var age = [10, 50, 9, 10, 5];
var sum = 0;
for(var i = 0; i < age.length; i++){
    sum = sum + age[i];
}
console.log("sum of all elements in array is: ",sum)

// using function 
function sumArray(marks){
    var sumf = 0;
    for(var i = 0; i < marks.length; i++){
        sumf = sumf + marks[i];
    }
    return sumf;
}

var result = sumArray([10, 20, 30, 40]);
console.log("sum of all elements in array is: ",result)