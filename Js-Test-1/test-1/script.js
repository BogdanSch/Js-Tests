const financialResults = [1000, -500, 2000, -1500, 3000, -2000, 500];

const totalProfit = financialResults
  .filter((val) => val > 0)
  .reduce((a, b) => a + b, 0);
const totalLoss = financialResults
  .filter((val) => val < 0)
  .reduce((a, b) => a + b, 0);
// Output total profit and total loss
console.log(`Total Profit: ${totalProfit}`);
console.log(`Total Loss: ${totalLoss}`);

// Output using forEach()
console.log("Financial Results using forEach():");
financialResults.forEach((value, index) => {
  console.log(`${index + 1}. ${value > 0 ? "+" : ""}${value}`);
});
