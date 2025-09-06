// Question: Implement a function called isPalindrome that takes a string as input and returns true
// if it is a palindrome, and false otherwise. A palindrome is a word, phrase, number, or other sequence 
// of characters that reads the same forward and backward. Ignore whitespace and punctuation when checking
// for palindromes.

function isPalindrome(str){
   const reversedStr = str.split('').reverse().join('');

    return str===reversedStr;
}
console.log(isPalindrome("hir"));
