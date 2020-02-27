// removeduplicate element from array 
var main = [10, 5, 50, 93, 10, 50];
var unique = [];

for(var i = 0; i < main.length; i++){
    var element = main[i];
    var position = unique.indexOf(element);
    if (position == -1) {
        unique.push(element);
    }
}
console.log(unique);