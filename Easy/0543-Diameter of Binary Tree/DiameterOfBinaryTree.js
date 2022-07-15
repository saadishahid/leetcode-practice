/*
543. Diameter of Binary Tree
Easy

8610

530

Add to List

Share
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

 

Example 1:


Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
Example 2:

Input: root = [1,2]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-100 <= Node.val <= 100
*/

/*Approach
- Diameter is the longest path between any two nodes
- We can use a helper function to find the longest path
- We can add longest path for left node and right node to get dia between them.
- Set dia to 0
- use a helper function to find the longest path recursively
- return the longest path
- we check on each recursive call if the dia is less than left+right
- if so, we update dia
- return dia

*/

var diameterOfBinaryTree = function (root) {
    let dia = 0;

    const helper = (root) => {
        if (!root) {
            return null;
        }

        let left = helper(root.left);
        let right = helper(root.right);
        dia = Math.max(dia, left + right);

        return 1 + Math.max(left, right);
    }
    helper(root);
    return dia;
};