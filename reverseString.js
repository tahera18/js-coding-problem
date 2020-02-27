function reverseString(str){
    var reverse = "";
    // My Way 
    // for (var i = str.length-1; i >= 0; i--) {
    //     reverse = reverse + str[i];
    // }
    for (let i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
        
    }
    return reverse;

}

var str = "Hola!"
var result = reverseString(str);
console.log(result);