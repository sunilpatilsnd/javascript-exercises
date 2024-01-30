const leapYears = function(year) {
    let divisibleBy4 = year % 4 == 0 ? true : false;
    let divisibleBy100 = year % 100 == 0 ? true : false;
    let divisibleBy400 = year % 400 == 0 ?  true : false;

    if(divisibleBy4){
        if(divisibleBy100){
            if(divisibleBy400){
                return true;
            }
            else return false;
        }
        else return true;
    }
    else{
        return false;
    }

 };

// Do not edit below this line
module.exports = leapYears;
