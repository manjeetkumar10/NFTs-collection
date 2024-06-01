// Step 1: Initialize an array to store digital collectibles
let digitalAssets = [];

// Step 2: Create a function to create a new digital collectible
function createDigitalAsset(assetName, assetDescription, assetOwner) {
    const newAsset = {
        assetName,
        assetDescription,
        assetOwner
    };
    digitalAssets.push(newAsset);
}

// Step 3: Create a function to display all existing digital collectibles
function displayDigitalAssets() {
    digitalAssets.forEach((asset, index) => {
        console.log(`Digital Asset ${index + 1}:`);
        console.log(`Name: ${asset.assetName}`);
        console.log(`Description: ${asset.assetDescription}`);
        console.log(`Owner: ${asset.assetOwner}`);
        console.log('---');
    });
}

// Step 4: Create a function to get the total number of digital collectibles
function getTotalDigitalAssets() {
    return digitalAssets.length;
}

// Call your functions below this line

// Create a few digital collectibles
createDigitalAsset('Digital Art 1', 'First digital art description', 'Manjeet');
createDigitalAsset('Digital Art 2', 'Second digital art description', 'Nitesh');
createDigitalAsset('Digital Art 3', 'Third digital art description', 'Adarsh');

// Display all digital collectibles
console.log('All Existing Digital Collectibles:');
displayDigitalAssets();

// Print the total number of digital collectibles to the console
console.log(`Total Digital Assets: ${getTotalDigitalAssets()}`);
