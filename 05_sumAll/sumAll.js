const sumAll = function(start, end) {
    if(start <= 0 || end <= 0)
        return "ERROR";
    if(!Number.isInteger(start) || !Number.isInteger(end))
        return "ERROR"
    let sum = 0;
    if(start < end)
    {
        while(start <= end)
            {
                sum += start;
                start++;
            }    
            return sum;
    }

    else 
    {
        while(start >= end)
            {
                sum += start;
                start--;
            }    
            return sum;
    }
    



};

// Do not edit below this line
module.exports = sumAll;
