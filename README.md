# Shardeum NFT Minter Dapp Example

This is an example of a NFT minter dapp on Shardeum.

## Tech Stack Used

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![Ethers](https://img.shields.io/badge/-Ethers-000000?style=flat&logo=ethers)
- ![Hardhat](https://img.shields.io/badge/-Hardhat-000000?style=flat&logo=hardhat)
- ![Solidity](https://img.shields.io/badge/-Solidity-000000?style=flat&logo=solidity)
- ![Pinata](https://img.shields.io/badge/-Pinata-000000?style=flat&logo=pinata)
- ![Material UI](https://img.shields.io/badge/-MaterialUI-000000?style=flat&logo=MUI)
- ![Webpack](https://img.shields.io/badge/-Webpack-000000?style=flat&logo=webpack)

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
