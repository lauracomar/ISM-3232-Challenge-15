// Task 2: Create the Portfolio Module
import { assets } from "./asset.js"; // import asste array from asset js file
// calculate tot value of portfolio:
export function calculatePortfolioValue() {
    return assets.reduce((total, assets) => total + assets.price * assets.quantity, 0);
} // use reduce to go over assets array and calculate tot value 
// function to calculate the percentage allocation of each asset
export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue(); //get total value of portfolio
    return assets.map(assets => ({ //map: make assets array into array of object with name and allocation percentage
        name: assets.name,
        allocationPercentage: ((asset.price * asset.quantity) / totalValue) * 100, //calculate allocation percentage
    }));
}