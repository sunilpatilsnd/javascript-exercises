const reverseString = function(str) {
    let strArr = str.split('');
    let position = str.length -1 ;
    let result = '';
    for( i = position ; i >= 0 ; i--){
        result += strArr[i]; 
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
