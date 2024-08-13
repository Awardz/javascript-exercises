const reverseString = function(string) {
    let num = string.length;
    let array = [num];
    let num2 = 0;

    for(let i = num; i >= 0; i--)
    {
        array[i] = string.charAt(num2);
        num2++;
    }

    string = array.join("");
    return string;

};

// Do not edit below this line
module.exports = reverseString;
