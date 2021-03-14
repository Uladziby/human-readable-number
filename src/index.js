module.exports = function toReadable(number) {
    
    let one9 = new Array('zero',' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine')
    let eleven19 = new Array('zero', ' ten', " eleven", " twelve", " thirteen", " fourteen", " fifteen", " sixteen", " seventeen",
        " eighteen", " nineteen")
    let twenty99 = new Array("zero", " ten", " twenty", " thirty", " forty", " fifty", " sixty", " seventy", " eighty", " ninety")
    let hundred999 = ' hundred';
    let outStr = '';


    var num = number; // numArr = [2 0]
    var digits = num.toString().split('');
    var numArr = digits.map(Number);
    
    if (number < 10){
         outStr = one9[number]
         return outStr.trim()

    } 
    else if (number < 20 & number >= 10){
        outStr = eleven19[numArr[1]+1]
        return outStr.trim()
    } 

    else if (number < 100 & number >= 20){
         outStr = [twenty99[numArr[0]]] + [one9[NumberIsZero(numArr[1])]]
        return outStr.trim()
    } 
    else if (number < 1000 & number >= 100){
        if(numArr[1]===1){
            outStr = [one9[NumberIsZero(numArr[0])]] +hundred999+ [eleven19[NumberIsZero(numArr[2]+1)]]
            

        }else outStr = [one9[NumberIsZero(numArr[0])]] +hundred999+
        [twenty99[NumberIsZero(numArr[1])]] +[one9[NumberIsZero(numArr[2])]]

        return outStr.trim()
    } 
    
}


function NumberIsZero(liczba){
   return liczba===0? "": liczba;
}


