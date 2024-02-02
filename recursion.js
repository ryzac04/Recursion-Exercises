/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, maxLength = 0) {
  if (words.length === 0) {
    return maxLength;
  } else {
    const currentWordLength = words[0].length;
    const newMaxLength = Math.max(maxLength, currentWordLength);
    return longest(words.slice(1), newMaxLength);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0) {
  if (index >= str.length) {
    return '';
  } else {
    return str[index] + everyOther(str, index + 2);
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index = 0) {
  let leftIdx = index;
  let rightIdx = str.length - index - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (idx === arr.length) return -1;
  if (arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = 0, newStr = '') {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - index];
  return revString(str, index + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") arr.push(obj[key]);
    if (typeof obj[key] === "object") arr.push(...gatherStrings(obj[key]));
  }
  return arr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length -1) {
  if (start > end) {
    return -1; // Element not found
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === val) {
    return mid; // Element found
  } else if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, end);
  } else {
    return binarySearch(arr, val, start, mid - 1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
