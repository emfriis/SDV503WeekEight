const a = 5;

const b = "myname";

function addTwoNumbers(x, y) { // function is not read in code sequence, not read until called.
    return x + y;
};

console.log("lastname");

console.log(addTwoNumbers(3, 4)); // line 44 is only read when javascript reaches this point.

const add = function(a, b) { // a function expression - can be used to pass functions as arguments for other functions.
    return a + b;
};

// function otherFunction(function (a, b) {.....})

function myFunc() {
    anotherFunc() // anotherFunc is hoisted
    function anotherFunc() {
        return console.log("Hello")
    }
}

var arr1 = [0, 1, 2, 3, 4, 5];

console.log(1 in arr1);

console.log(6 in arr1);

console.log(arr1.slice(1, 3)); // returns copy of array from a beginning point to an end point.

const newArr1 = arr1.map(num => num * 2);
console.log(newArr1);

const newArr2 = arr1.reduce((sum, num) => {return sum + num});
console.log(newArr2);

var names = ['Jim', 'Dave', 'Albert', 'John'];

console.log(names.splice(2, 0, 'Potato', 'Carrot'));
console.log(names);

var names2 = ['Jim', 'Dave', 'Albert', 'John'];

console.log(names2.splice(0, 3, 'Potato', 'Carrot'));
console.log(names2);












