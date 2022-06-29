/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []


Constraints:

    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 5000


Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?


*/

/*
Approach:
We initialize two pointers, one for the current node and one for the previous node.
Since the prevNode does not exist for the head of the list, the previous pointer is set to null.
We then set the current pointer to the head of the list.
We initiate the loop and essentially we need to point the nextPointer to the previous node.
We then set the current node to the next node.
However, we would need to store the next node in a temporary variable. This is because we need to set the next node to the previous node.
By doing so, we will be be losing a pointer to the next node and we need to preseve that
By the end of the loop, we will have the previous node pointing to the head of the list.s
*/

var reverseList = function (head) {
    let prevPointer = null;
    let currPointer = head;


    while (currPointer) {
        let nextTempPointer = currPointer.next;
        currPointer.next = prevPointer;
        prevPointer = currPointer;
        currPointer = nextTempPointer;
    }
    return prevPointer;

};


/*
- we will use a helper function to reverse the list.
-helper function will take in the current node and the previous node.
- we will write a recursive function to reverse the list.
- we will set base case to when the current node is null. We will return the previous node.
- we will store the next node in a temporary variable.
- we will set the next node to the previous node.
- we will set the current node to the temp.
- we will make the recursive call with curr and prev as params.



*/
var reverseListRecursive = function(head) {
    return reverse(head, null);
    
};

function reverse(curr,prev) {
    if (!curr) {
        return prev;
    }
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
    return reverse(curr,prev);
}