/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 1) { return 0; }

    let profit = 0;
    let start = prices[0];

    for (let i = 1; i < prices.length; i++) {
        const end = prices[i];
        if (end < start) { start = end; }
        else { profit = Math.max(profit, end - start); }
    }

    return profit;
};
