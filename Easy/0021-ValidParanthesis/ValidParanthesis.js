/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.

*/

/* 
Approach
There are three cases:
1. () or [()] or ()[]{} etc. - valid brackets
2. (] or [) or (]) etc. - invalid brackets
3. (){ etc. - invalid brackets
    
We will use a stack to keep track of the opening brackets.
We will iterate through the string and push the opening brackets onto the stack.
If we encounter a closing bracket, we will pop the stack.
The idea is that whenever we encounter a closing bracket, the matching opeerning bracket should be on the top of the stack.
At the end of iteration, if the stack is empty, the string is valid.
*/
var isValid = function (s) {
    let stack = [];
    let hashmap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (let i in s) {
        let bracket = s[i];
        if ((bracket === '(') || (bracket === '[') || (bracket === '{')) {
            stack.push(bracket);
        } else {
            if (hashmap[bracket] !== stack.pop()) {
                return false;
            }
        }
    }
    if (stack.length === 0) {
        return true;
    }
    return false;
};