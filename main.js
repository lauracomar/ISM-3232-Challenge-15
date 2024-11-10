//Create the Main Application
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js'; // import functions for calculations
import { Transaction } from './transaction.js'; // import the transaction class for simulating transactions


// display initial portfolio value by calling calculatePortfolioValue function
console.log("Initial Portfolio Value:", calculatePortfolioValue());


// display initial portfolio allocation by calling getPortfolioAllocation function
console.log("Initial Portfolio Allocation:", getPortfolioAllocation());


// buy 20 shares of CocaCola 
const transaction1 = new Transaction(1, 'buy', 20); // create a new transaction (buy 50 Apple stock)
transaction1.processTransaction(); // process the transaction
console.log("Stock bought");


// sell 50 shares of Tesla
const transaction2 = new Transaction(2, 'sell', 50); // create transaction
transaction2.processTransaction(); // process
console.log(" Stock sold");


// sell 20 shares of Berkshire Hathaway
const transaction3 = new Transaction(3, 'sell', 20); // create transaction
transaction2.processTransaction(); // process
console.log(" Stock sold");


// portfolio value after the transactions
console.log("New Portfolio Value:", calculatePortfolioValue());


// updated portfolio allocation after the transactions
console.log("New Portfolio Allocation:", getPortfolioAllocation());