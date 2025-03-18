/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    temp = x
    rn = 0
    if (x < 0) {
        return false
    } 
    if (x===0){
        return true
    }   
    else {
        while (temp > 0) {
            digit = temp % 10
            rn = (rn * 10) + digit
            temp = Math.floor(temp / 10)
            if (rn === x || x === 0) {
                return true
            }
        }
        return false

    }
};