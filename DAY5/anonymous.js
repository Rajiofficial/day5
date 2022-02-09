// Print odd numbers in an array using Arrow Function :

let findOdd = function() {
    let c = [];
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0) {
            c.push(a[i]);
        }
    }
    console.log(c);
};
findOdd();

// Title caps using Arrow  Function 
var input = ["CHANGE", "TO", "TITLE", "CASE"];

var result=[];

var titleCase = function(strArr) {
  for (let i = 0; i < strArr.length; i++) {
  	let str = strArr[i].toLowerCase().split(' ');
    for (var j = 0; j < str.length; j++) {
      str[j] = str[j].charAt(0).toUpperCase() + str[j].slice(1); 
    }
    let output=str.join(',');
    result.push(output);
  }
  
}
titleCase(input);
console.log(result)
    
// Sum of all numbers in an array using Arrow Function :

let sum = function() {
    let num = [7, 16, 1, 5, 9];
    let sumof = 0;
    num.forEach(x => {
        sumof += x;
    });
    console.log(sumof);
};
sum();

// Return all the prime numbers in an array using Arrow Function :

const primeNum = function() {
    let findPrime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let isPrime = num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num !== 1;
    };
    let myPrimeArray = findPrime.filter(element => isPrime(element));
    console.log(myPrimeArray);
};
primeNum();


// Return all the palindromes in an array using Arrow Function :

let palin = function() {
    let a = ["level", "mom", "racecar", "daddy", "uncle"]
    for (i = 0; i < a.length; i++) {
        let b = a[i].split("").reverse().join("")
        if (a[i] == b) {
            console.log(a[i])
        }
    }
};
palin()

//Remove duplicates from an array

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);

//Return median of two sorted arrays of the same size
