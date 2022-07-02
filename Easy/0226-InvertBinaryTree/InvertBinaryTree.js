/*
Given the root of a binary tree, invert the tree, and return its root.

 

Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:

Input: root = [2,1,3]
Output: [2,3,1]

Example 3:

Input: root = []
Output: []

 

Constraints:

    The number of nodes in the tree is in the range [0, 100].
    -100 <= Node.val <= 100

*/
/*Approach:
-We will use recursion to invert the tree.
-We will first create the basecase for the recursion. This is when the root is null.
-We will then swap the left and right nodes.
-We will make the recursive calls on root.left and root.right.
-We will return the root.
-Time Complexity: O(n)
-Space Complexity: O(n) ...needs confirmation
*/

var invertTree = function(root) {
    if (!root) {
        return null;
    }
    [root.left,root.right] = [root.right,root.left];
    invertTree(root.left);
    invertTree(root.right);
    return root;
};