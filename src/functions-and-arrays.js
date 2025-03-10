// Iteration #1: Find the maximum
function maxOfTwoNumbers(a,b) {
  if (a > b) { return a;
  } else { return b };
};
maxOfTwoNumbers(3,4)

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord(array) {
  let longestWord = array[0]; //assign the first value of the array index[0] to longestWord and then iterate with for loop
  if (array.length === 0) return null; //(array.length === 0) to print null if array is empty
  if (array.length === 1) return array[0]; //(array.length === 1) to print the unique OR first value of the array index[0]
  for (let word of array) { //using for value of iterableVariable because we iterate on an Array
    if (word.length > longestWord.length) { //if the value.length of index[1] is higher than the current longestWord.length
      longestWord = word; //then print longestWord to the new value
    } //the loop keeps doing that operation till the end of the array => index[6]
  }
  return longestWord;
}
findLongestWord(words) 

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numberArr) {
  let result = 0;
  if (numberArr.length === 0) return 0;
  for (let i = 0; i < numberArr.length; i++) {
    result += numberArr[i];
  }
/* // we could also do for of
  for (let number of numberArr){
    result += number;
  } */
  return result;
}
sumNumbers(numbers)

// Iteration #3.1 Bonus:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10 
/* { "color": "purple",
  "type": "minivan"} */]; //passing an object to check throw error (works!)

function sum(theMixer) {
  let mixedSum = 0;
  if (theMixer.length === 0) return 0;
  for (element of theMixer) {
    if (typeof element === 'string') {
      mixedSum += element.length;
    } else if (typeof element === 'object') {
      throw new Error("Unsupported data type sir or ma'am");
    } else { mixedSum += element }
  }
  return mixedSum;
};
sum(mixedArr)

// Iteration #4: Calculate the average
// Level 1: Array of numbers

const numbersAvg = [2, - 6, 9, 10, 7, 4, 1, 9];
function averageNumbers (numbers) { 
  let sumNumbers = 0;
  if (numbers.length === 0) return null;
  if (numbers.length === 1) return numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i]
  }
  /* for (let number of numbers) {
    sumNumbers += number;
  } */
  return sumNumbers / numbers.length;
};
averageNumbers(numbersAvg);

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(stringArray) {
  let sumWordLength = 0;
  if (stringArray.length === 0) return null; //(array.length === 0) to print null if array is empty
  if (stringArray.length === 1) return stringArray[0].length; //(array.length === 1) to print the unique OR first value of the array index[0]
  for (let i = 0; i < stringArray.length; i++) {
    let wordLength = stringArray[i].length;
    sumWordLength += wordLength;
  }
  return Math.round(sumWordLength / stringArray.length);
 }
 averageWordLength(wordsArr);

// Bonus - Iteration #4.1
const mixedArr2 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
function avg(mixedArray) {
  let mixedArraySum = 0;
  if (mixedArray.length === 0) return null;
  for (element of mixedArray) {
    if (typeof element === 'string') {
      mixedArraySum += element.length;
    } else { mixedArraySum += element}
  }
  return (mixedArraySum / mixedArray.length)
};
avg(mixedArr2)

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray (words) {
  let newArray = []; //we declare the newArray to store the values that are not duplicated
  if (words.length === 0) return null; //null if empty array is passed
  for (let i = 0; i < words.length; i++) { //for loop to iterate 
    let word = words[i]; //we declare word variable to identify each word within the wordsUnique array
    if (newArray.indexOf(word) < 0) { //arr.indexOf(elem) => Returns the index of the given element. If the element doesn't exist, returns -1
      newArray.push(word); //then if -1, we push the word into the new newArray
    }
  }
  return newArray;
};
uniquifyArray(wordsUnique);

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function doesWordExist(wordzArr, word) {
  let result = false;
  if (wordzArr.length === 0) return null;
  for (let i = 0; i < wordzArr.length; i++) {
    if (wordzArr[i] === word) {
      result = true;
    }
  }
  return result;
}
doesWordExist(wordsFind, 'machine');

// Iteration #6: Find elements with indexOf()
function doesWordExist(wordzArr, word) {
  let result = false;
  if (wordzArr.length === 0) return null;
  for (let i = 0; i < wordzArr.length; i++) {
    if (wordzArr.indexOf(word) !== -1) {
      result = true;
    }
  }
  return result;
}
doesWordExist(wordsFind, 'machine');

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordzArr, word) {
  let result = 0;
  if (wordzArr.length === 0) return 0;
  for (let i = 0; i < wordzArr.length; i++) {
    if (word === wordzArr[i]){
      result = result +1; 
    }
  }
  return result;
}
howManyTimes(wordsCount, 'matter');
console.log(howManyTimes(wordsCount, 'matter'));


// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 5000]
];
  // rows = matrix.length; = 20
  // columns = matrix[0].length; = 20
  //matrix[0] = [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8]
  //matrix[0][0] = 08
  //matrix[0][1] = 02
  //matrix[1][0] = 49

function greatestProduct(matrix) {
  let finalProduct = 0;
  let currentRow = 0;
  let currentColumn= 0;
/*   let row = 0;
  let column = 0;
  let direction = ''; */

  for (let i = 0; i < matrix.length -3; i++) { // row x row (-3 para decirle donde parar porque no quedan mas numbers )
    // console.log(matrix[0][i]); // prints all elements in the first row
    for (let j = 0; j < matrix[i].length -3; j++) { //column x column dentro de cada (i) & same as above.
      currentRow = matrix[i][j] * matrix[i][j+1] * matrix[i][j+2] * matrix[i][j+3]
      currentColumn = matrix[i][j] * matrix[i+1][j] * matrix[i+2][j] * matrix[i+3][j]
      // console.log(i,j,'position')
      // console.log(currentRow, currentColumn, 'results')
      if (currentRow > finalProduct || currentColumn > finalProduct) {
        //column = j
        //row = i
        if (currentRow > currentColumn) {
          finalProduct = currentRow
          // direction = 'row'
        } else { 
          finalProduct = currentColumn
          // direction = 'column'
        }
      }
    }
  }
  //console.log(row, column, direction);
  return finalProduct;
}
console.log(greatestProduct(matrix));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}


