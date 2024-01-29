const removeFromArray = function() {
    const inputArr = arguments[0]; // arguments is default array of arguments that are passed to a function
    let result = inputArr;
    for(let i = 1 ; i < arguments.length ; i++){
        result = removeOneItemFromArray(result,arguments[i])
    }
    return result;
};

function removeOneItemFromArray(inputArray, itemToRemove){
    let result = [];
    let arraySize = inputArray.length;
    for(let i = 0 ; i < arraySize; i++){
        if( inputArray[i] !== itemToRemove){
            result.push(inputArray[i]);
        }
    }
    return result;
}

// Do not edit below this line
module.exports = removeFromArray;
