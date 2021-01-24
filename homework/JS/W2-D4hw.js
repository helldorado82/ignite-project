/* 1) Create function testMe that creates 3 variables and returns their product */
function testMe() {
    let num1 = 6;
    let num2 = 3
    let num3 = 2;
    return num1 * num2 * num3;
}

/* 2) Create function AI that respond "hi" if the parameter is "hello", "I cannot understand" otherwise*/
function AI(greet) {
    if (greet == "hello") {
        return "hi"
    }
    return "I cannot understand"

}
/* 3) Create function tripleSum that receives 3 numbers and returns the product of them*/
function tripleSum(num1, num2, num3) {
    return num1 * num2 * num3;
}
/* 4) Create function factorial that calculates the factorial of the given param*/
function factorial(num) {
    let factors = 1
    for (i = num; i >= 2; i--) {
        factors = factors * i
        return factors;
    }
}
/* 5) Create function calculator with 3 params, two numbers (param1 and param2) and a sign between "+","-","*","/". Return the operation between param1 and param2*/
function calculator(param1, param2, sign) {
    let result = 0;
    if (sign == "+") {
        return result = param1 + param2;
    } else if (sign == "-") {
        return result = param1 - param2;
    } else if (sign == "*") {
        return result = param1 * param2;
    } else
        return result = param1 / param2;
}
/* 6) Create function absolute that returns the absolute value of the parameter (es.: p = 1 returns 1, p = -27 returns 27)*/
function absolute(p) {
    return Math.abs(p);
} /* 7) Create function fizzBuzz that returns fizz if param is multiple of 3, buzz if multiple of 7, fizzbuzz if multiple of 3 and 7. Otherwise returns the same number*/
function fizzBuzz(p) {
    if (p % 3 == 0 && p % 7 == 0) {
        return "fizzbuzz";
    } else if (p % 3 == 0) {
        return "fizz";
    } else if (p % 7 == 0) {
        return "buzz";
    } else return p;
}
/* 8) Create function positive that returns true if the params is greater than 0*/
function positive(num) {
    return num > 0;
}
/* 9) Create function transform that receives a number between 0 and 9 and returns a string containing the number (ex.: 0 returns "zero", 1 returns "one")*/
switch (num) {
    case 0:
        return "zero";
        break;
    case 1:
        return "one";
        break;
    case 2:
        return "two";
        break;
    case 3:
        return "three";
        break;
    case 4:
        return "four";
        break;
    case 5:
        return "five";
        break;
    case 6:
        return "six";
        break;
    case 7:
        return "seven";
        break;
    case 8:
        return "eight";
        break;
    case 9:
        return "nine"
        break;
} /* 10) Create function sum that receives an array as parameter and return the sum of the elements (only numerical ones) */
function sum(arr) {
    let added = 0;
    for (i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            added += arr[i]
        }

    }
    return added;
}
/* 11) Create function min that receives an array and returns the minumum value in the array*/
function min(arr) {
    lowest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i]
        }
    }
    return lowest;
}
/* 12) Create function arrayFi that receives an object and trasforms it in an array. Example: arrayFi({ name: "John", surname: "Doe"}) returns [ "name", "john", "surname", "Doe"]*/
function ArrayFi(obj) {
    let arr = Object.entries(obj);
    return arr;
}