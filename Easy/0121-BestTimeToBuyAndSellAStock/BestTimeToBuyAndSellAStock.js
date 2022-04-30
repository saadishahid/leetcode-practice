/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


Constraints:

    1 <= prices.length <= 105
    0 <= prices[i] <= 104

*/

/*
We will use sliding window technique.
We will use two pointers. One is a left pointer, which is pointed to the buying price
and the other is a right pointer, which is pointed to the selling price.
We will check the difference between the buying and selling price.
Each iteration will move the right pointer to the next index.
If buyingPrince is greater than sellingPrice, we will move the left pointer to the right.
If buyingPrice is less than sellingPrice, we will check if the profit is maximum.
If the profit is maximum, we will update the profit.
We will return the maximum profit.
Time complexity is O(n)
Space complexity is O(1)
*/

var maxProfit = function (prices) {
    let left = 0;
    let right = 1;
    let maximumProfit = 0;
    let profit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            profit = prices[right] - prices[left];
            if (profit > maximumProfit) {
                maximumProfit = profit;
            }
        } else {
            left = right;
        }
        right++;
    }
    return maximumProfit;


};