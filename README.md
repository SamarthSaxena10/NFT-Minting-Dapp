# Shardeum NFT Minter Dapp Example

This is an example of a NFT minter dapp on Shardeum.

## Tech Stack Used

- React
- Ethers
- Hardhat
- Solidity
- Hardhat
- Pinata
- Material UI
- Webpack

## Features

- Connect Wallet & See Wallet address & balance
- Upload Images/Jpeg/Videos directly to IPFS before minting
- Mint on Shardeum Testnet
- Intuitive UI statuses for minting

## How to run

1. Clone the repo

```
git clone https://github.com/SamarthSaxena10/NFT-Minting-Dapp
```

2. Install dependencies

```
npm install
```

3. In .env and add the values

```
PRIVATE_KEY= ""
```

4. Compile and Deploy the Contract

```
npx hardhat compile

npx hardhat run scripts/deploy.js --network sphinx
```

5. Add the contract address in connectWallet.js

```
const contractAddress = "";
```

6. Generate API keys from [Pinata](https://pinata.cloud/) and add them in ipfsUploader.js

```
const pinataApiKey = "";
const pinataSecretApiKey = "";
```

7. Run the app

```
npm start
```

```
Feel free to clone and modify the code as you wish. If you wish to contribute, please open a PR.
```
