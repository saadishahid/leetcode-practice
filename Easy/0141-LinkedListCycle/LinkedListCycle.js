/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

 

Constraints:

    The number of the nodes in the list is in the range [0, 104].
    -105 <= Node.val <= 105
    pos is -1 or a valid index in the linked-list.

 

Follow up: Can you solve it using O(1) (i.e. constant) memory?
*/


/*
Approach:
-We will use a set to keep track of the nodes we have visited.
-We will loop through the list and check if the current node is in the set.
-If it is, we will return true.
-If it is not, we will add the node to the set and move on to the next node.
-We will return false if we reach the end of the list and the node is not in the set.
-Time Complexity: O(n) as we loop through the list.
-Space Complexity: O(n) as we are using a set.
*/
var hasCycle = function (head) {
    let nodeVisited = new Set();
    while (head) {
        if (nodeVisited.has(head)){
            return true;
        } 
        nodeVisited.add(head);
        head = head.next;
    }
    return false;
};

/* Approach 2: Constant Space 
- We will use two pointers, one for the current node (for which we will utilize head pointer) and one for the runner.
- We will set the current node to the head of the list.
- We will set the runner to the head.next.
- We will loop through the list and check if the runner is null.
- If it is, we will return false.
- If it is not, we will check if the current node is the same as the runner.
- If it is, we will return true.
- If it is not, we will set the current node to the next and runner to runner.next.next.
- We will return false if we reach the end of the list.
- Time Complexity: O(n) as we loop through the list.
- Space Complexity: O(1) as we are using two pointers.

*/

var hasCycleTwoPointer = function (head) {
if (!head || !head.next) {
    return false;
}
let runner = head; 
while(runner && runner.next) {
    if (runner === head) {
        return true;
    }
    runner = runner.next.next;
    head = head.next;
}
return false;

};