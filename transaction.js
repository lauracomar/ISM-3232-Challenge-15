// Create the Transaction Module
import { assets, getAssetById } from "./asset.js"; // import asstes array and getAssetById from assets js file
//transaction class:  buy/sell actions
export class Transaction {
    constructor(assetId, type, quantity) { // use contructor to initiate transaction
        this.assetId = assetId;
        this.type = type; // type: buy or sell
        this.quantity = quantity;
        this.assets = getAssetById(assetId); //get asset details
    }
    processTransaction() { // method to process the transaction
        if (!this.asset) { //check if asset exists
            throw new Error("Asset not found"); // if asset doesnt exist throw error
        }
        if (this.type === 'buy') {
            this.asset.quantity += this.quantity; // add quantity to current quantity
        }
        else if (this.type === 'sell') { // if sell: 
            if (this.asset.quantity < this.quantity) { // check if there is enough quantity to sell
                throw new Error(`Not enough to sell ${this.asset.name}`); // if not throw error
            }
            // ff enough to sell, decrease current quantity by sell amount
            this.asset.quantity -= this.quantity;
        }
    }
} 