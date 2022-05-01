/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.
 
Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

Constraints:

    -231 <= val <= 231 - 1
    Methods pop, top and getMin operations will always be called on non-empty stacks.
    At most 3 * 104 calls will be made to push, pop, top, and getMin.

*/

/*
Approach
We initialize two stacks in the constructor.
First stack is the one we will use to push and pop values from.
Second stack is the one we will use to keep track of the minimum value.
The approach is that whenever we push a new value, we push it to the first stack.
We also push the value to the second stack if it is the first value
For subsequent values, we check which of the two values (i.e. input val or the current second stack top value)is the minimum.
Whichever value is the minimum, we push it to the second stack.
For pop, we pop from the first stack as well as from the second stack.
The idea is that for every push or pop, the stack top value of the second stack represents the minimum value.
For top, we return the top value of the first stack by using stack[stack.length - 1].
Similarly, for getMin, we return the top value of the second stack by using minStack[minStack.length - 1].
Time Complexity: O(1) for all operations. 
Space Complexity: O(n) for all operations.
*/

class MinStack {
    constructor() {
        this.stack =[];
        this.minStack = [];
    }
    push(val) {
        if(this.stack.length === 0) {
            this.stack.push(val);
            this.minStack.push(val)
        } else {
            this.stack.push(val);
            this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
        }
    }
    pop() {
        if (this.stack.length === 0) {
            return null;
        } else {
            this.minStack.pop();
            return this.stack.pop();
        }
    }
    top(){
         if (this.stack.length === 0) {
            return null;
        } else {
            return this.stack[this.stack.length - 1];
        }
    }
    getMin(){
         if (this.minStack.length === 0) {
            return null;
        } else {
            return this.minStack[this.stack.length - 1];
        }
    }
}