//Create the Asset Module
// create assets array, and define assets:
export const assets = [
    { id: 1, name: "Coca Cola", type: "stock", price: 70, quantity: 50 },
    { id: 2, name: "Tesla", type: "stock", price: 300, quantity: 100 },
    { id: 3, name: "Berkshire Hathaway", type: "stock", price: 400, quantity: 150 },
];

// export function to get asset by id
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
};