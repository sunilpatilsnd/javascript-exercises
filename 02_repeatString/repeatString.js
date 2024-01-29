const repeatString = function(str, reps) {
    let result = '';
    if(reps < 0 ){
        return 'ERROR';
    }
    for(let i =0 ; i < reps; i++){
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
