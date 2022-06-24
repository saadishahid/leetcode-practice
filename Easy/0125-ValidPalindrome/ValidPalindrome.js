/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

 

Constraints:

    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.

*/

/*
Approach 1:
- First we convert the string to lowercase.
- Then we remove all non-alphanumeric characters.
- We assign leftPointer and rightPointer to the beginning and end of the string.
- We loop halfway through the string and compare the characters.
- If they are the same, we move the leftPointer and rightPointer to the next character.
- If they are not the same, we return false.
- If we reach the end of the string, we return true.
- Time Complexity: O(n) since we have to loop through the string once.
- Space Complexity: O(n) since string.replace() and string.toLowerCase() takes O(n) space.
*/

var isPalindromeApproachOne = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^A-Za-z0-9]/g,"");
    let leftPointer = 0;
    let rightPointer = s.length - 1;
    while (leftPointer < s.length / 2){
        if (s[leftPointer] !== s[rightPointer]){
            return false;
        }
            leftPointer++;
        rightPointer --;
    }
    return true;
};

/*
Approach 2:
- We will focus on reducing the space complexity.
- We will use ASCII values to represent the characters.
- We will use helper functions instead of built-in .toLowerCase() and .replace() functions.
- Time complexity is O(n) since we have to loop through the string once.
- Space complexity is O(1) since we are not using any extra space.
*/
var isPalindromeApproachTwo = function(s) {
    let leftPointer = 0;
    let rightPointer = s.length - 1;
    while (leftPointer < rightPointer){
        lPChar = s.charCodeAt(leftPointer);
        rPChar = s.charCodeAt(rightPointer);
        if (!isAlphaNumeric(lPChar)){
            leftPointer++;
        }
        if (!isAlphaNumeric(rPChar)){
            rightPointer--;
        }
        if (toLower(lPChar) !== toLower(rPChar)){
            return false;
        }
        leftPointer++;
        rightPointer--;
    }
    return true;
};

var isAlphaNumeric = function(charCode) {
    if (
        (charCode>=65 && charCode <=90)||
        (charCode >= 97 && charCode <= 122) ||
         (charCode >= 48 && charCode <= 57)
    )
    {
        return true;
    }   else { 
        return false;
    }         
}

var toLower = function(charCode) {
    if (charCode >= 65 && charCode <= 90){
        return charCode + 32;
    } else {
        return charCode;
    }
}