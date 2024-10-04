// const prices = [7,1,5,3,6,4];
// const prices = [1];
// const prices = [1,2];
const prices = [2,4,1];

var maxProfit = function(prices) {
  let lowestPrice, highestPrice = 0, maxProfit = 0;
  if (prices.length == 1) return 0;
  for (let i = 0; i < prices.length; i++) {
    if (i == 0) {
        lowestPrice = prices[i];
    } else if (lowestPrice > prices[i]) {
        lowestPrice = prices[i];
        highestPrice = lowestPrice;
    } else if (highestPrice < prices[i]) {
        highestPrice = prices[i];
    }
    if (highestPrice - lowestPrice > maxProfit) {
      maxProfit = highestPrice - lowestPrice;
    }
  }
  return maxProfit
};

const x = maxProfit(prices);
console.log(x)