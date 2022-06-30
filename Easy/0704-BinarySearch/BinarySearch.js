/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

 

Constraints:

    1 <= nums.length <= 104
    -104 < nums[i], target < 104
    All the integers in nums are unique.
    nums is sorted in ascending order.

*/


/*
Approach:
- We initialize two pointers, initially pointing towards start and end of the array.
- We initialize the loop with the condition that it will run till start <= end.
- We will find the midpoint(index) of the array and assign it to mid.
- We will compare the target with the midpoint and if it is equal, we will return the midpoint.
- If the target is less than the midpoint, we will assign the end pointer to the midpoint - 1.
- If the target is greater than the midpoint, we will assign the start pointer to the midpoint + 1.
- We will then repeat the loop until start > end.
- If the target is not found, we will return -1.
- Time Complexity: O(log n) since we have to loop through the array once.
- Space Complexity: O(1) since we are not using any extra space.
*/
