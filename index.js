// What are the differences between mutating array methods and non-mutation array methods in JavaScript.
// List 5 array methods that fall under each of them.

//Answer in README

const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']

// Add ‘Kotlin’ to the end of the array
languages.push('Kotlin')
console.log(languages)
// Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, "Java")
console.log(languages)
// Remove the first item in the array
languages.splice(0, 1)
console.log(languages)
// Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.splice(0, 0, "Scala", "Swift")
console.log(languages)
// Replace ‘PHP’ with ‘Go’ and ‘Rust'
languages.splice(5, 1, "Go", "Rust")
console.log(languages)

// What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
        fruit[2] = "orange";
        return fruit;
}
console.log(changeFruit(fruit));
//Output value is ['apple', 'mango', 'orange']

//Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
//e.g., max([4, 5, 10, -2]) // maximum value is 10

function maxnumber(array){
    return console.log(`maximum value is ${Math.max(...array)}`)
}

maxnumber([4, 5, 10, -2])


// Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
// e.g.,
//  valTimesIndex([1,2,3]) // [0,2,6]
// 		valTimesIndex([5,10,15]) // [0,10,30]

function valTimesIndex(array){
    newarray = new Array();
    for (var i = 0; i < array.length; i++) { 
        res = array[i]*i
        newarray.push(res);
    }
    return console.log(newarray)
}

valTimesIndex([1,2,3])
valTimesIndex([5,10,15])