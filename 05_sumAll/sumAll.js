const sumAll = function(num1, num2) {
    if( num1 < 0 || num2 < 0) return 'ERROR';
    if( typeof num1 != 'number' || typeof num2 != 'number') return 'ERROR';

    let startNum = Math.min(num1,num2);
    let lastNum = Math.max(num1, num2);

    let generatedNums = genNumBetween(startNum, lastNum);
    
    let result = 0;
    generatedNums.forEach( (num) => {return result += num});
    return result;
};


function genNumBetween(num1, num2){ //generartes an array of numbers between given two numbers and returns it
	let res = [];
	for( let i = num1 ; i <= num2; i++){
		res.push(i);
	}
	return res;
}
// Do not edit below this line
module.exports = sumAll;
