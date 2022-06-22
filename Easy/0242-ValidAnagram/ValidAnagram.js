/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

 

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/

/*
Approach
- first we have to split the strings into arrays
- then we have to sort the arrays
- then we have to join the arrays back into strings
- then we have to compare the strings
- we can not directly sort strings, so we have to split them into arrays and sort them.
- since array comparison is by memory address, we need to convert back to strings
- Time Complexity: O(nlogn) since we have to sort the arrays
- Space Complexity: O(n) since we have to convert the strings back to arrays
*/

var isAnagram = function(s, t) {
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    return s === t;
};

/*
Approach 2
- First we check the length of the strings. If they are not the same, then they are not anagrams.
- Then we convert one of the string to an object by using a loop.
- Then we loop through the other string and check if the character is in the object.
- If it is, we decrement the value of the object.
- If it is not, we return false.
- Time Complexity: O(n) since we have to loop through the string once and once through the object.
- Space Complexity: O(n) since we have to create an object with the length of the string.

*/

var isAnagramLoop = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let obj = {};
    for (alphabet of s) {
        obj[alphabet] = obj[alphabet] ? obj[alphabet] + 1 : 1;
    }
    for (alphabet of t) {
        if (!obj[alphabet]) {
            return false;
        }
        obj[alphabet]--;
    }
    return true;

};