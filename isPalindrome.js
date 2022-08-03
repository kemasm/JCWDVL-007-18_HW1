/*
  
Function to check a String is a palindrome
  
inputs:
  input_str => String, string that will be checked.

output:
  Boolean, true if string is a palindrome and false if it's not.

*/
export function isPalindrome(input_str) {
  let lower_input_str = input_str.toLowerCase();
  const loop_limit = Math.floor(lower_input_str.length / 2);
  for (let idx = 0; idx <= loop_limit; idx++) {
    let is_not_character_mirrored =
      lower_input_str[idx] !==
      lower_input_str[lower_input_str.length - 1 - idx];

    if (is_not_character_mirrored) {
      return false; // return false if found an unmirrored character
    }
  }
  return true; // return true if all characters are mirrored
}
