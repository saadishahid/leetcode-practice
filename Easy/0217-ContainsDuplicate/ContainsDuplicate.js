/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109

*/

/*
We copy arry to a set. Since set does not allow duplicates, 
we will compare the size of the set to the input array length. 
if there is a duplicate, size of the set will be less than array length. We will return true.
Time complexity is O(n)
Space complexity is O(n)
*/
var containsDuplicateUsingSet = function (nums) {
    let numsSet = new Set(nums);
    return (numsSet.size < nums.length) ? true : false;

};

/*
We can use a hash table to store the values of the array {num:true}. 
Hashtable allows for O(1) lookup time.
in the for loop, we will first check if the hashtable contains the value of the current array index.
If it does, we will return true.
else we will add the value of the current array index to the hashtable.
Time complexity is O(n)
Space complexity is O(n)
*/
var containsDuplicateUsingHashTable = function (nums) {
    let hashmap = {};
    for (let num in nums) {
        if (hashmap[nums[num]]) {
            return true;
        }
        hashmap[nums[num]] = true
    }
    return false;

};