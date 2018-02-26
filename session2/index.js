// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

  // Create Filtered Array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  // Sort By Length
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  // If Multiple Words Then Put Into Array
  const longestWordArray = sorted.filter(
    word => word.length === sorted[0].length
  );

  // Check If more than one array val
  return longestWordArray.length > 1
    ? longestWordArray
    : longestWordArray.join();
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  //Solution 1

  // // Init chunked array
  // const chunkedArr = [];

  // // Set index
  // let i = 0;

  // // Loop While index is less than the array length
  // while (i < arr.length) {
  //   // Slice out from the index to the index + the chunk length and push onto the chuncked array
  //   chunkedArr.push(arr.slice(i, i + len));
  //   // Increment by chunk length
  //   i += len;
  // }
  // return chunkedArr;

  // Solution 2

  // Init Chuncked Array
  const chunkedArr = [];

  // Loop Through Array
  arr.forEach(val => {
    // Get Last Element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunck length param
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // Solution 1
  // return arrays.reduce((a, b) => a.concat(b));

  // Solution 2
  //return [].concat.apply([], arrays);

  // Solution 3
  return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}
function formatStr(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
    if (char === 'z' || char === 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

  return newStr;
}

// Call Function
const output = letterChanges('hello there');

console.log(output);
