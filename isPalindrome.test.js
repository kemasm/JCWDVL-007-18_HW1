import { assertEqual } from "./utils/test_utils.js";
import { isPalindrome } from "./isPalindrome.js";

// expand the test case by adding string and expected result in the list bellow
const test_words = [
  ["kasur rusak", true],
  ["kucing garong", false],
  ["anak setan", false],
  ["Makam", true],
  ["Nakama", false],
];

function test_palindrome_odd() {
  const input_str = "katak";
  const isPalindrom = isPalindrome(input_str);
  const expectedOutput = true;
  assertEqual(isPalindrom, expectedOutput);
}
test_palindrome_odd();

function test_palindrome_even() {
  const input_str = "hannah";
  const isPalindrom = isPalindrome(input_str);
  const expectedOutput = true;
  assertEqual(isPalindrom, expectedOutput);
}
test_palindrome_even();

function test_not_palindrome_odd() {
  const input_str = "katbk";
  const isPalindrom = isPalindrome(input_str);
  const expectedOutput = false;
  assertEqual(isPalindrom, expectedOutput);
}
test_not_palindrome_odd();

function test_not_palindrome_even() {
  const input_str = "hannbh";
  const isPalindrom = isPalindrome(input_str);
  const expectedOutput = false;
  assertEqual(isPalindrom, expectedOutput);
}
test_not_palindrome_even();

function test_words_palindrome(inputs) {
  for (let input of inputs) {
    const input_str = input[0];
    const expectedOutput = input[1];
    const isPalindrom = isPalindrome(input_str);
    assertEqual(isPalindrom, expectedOutput);
  }
}
test_words_palindrome(test_words);
console.log("\nOK");
