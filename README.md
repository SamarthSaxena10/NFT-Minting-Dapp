# Shardeum NFT Minter Dapp

This is an overview of a NFT minting dapp on Shardeum.

![result](https://iili.io/HsyW8fS.png)

Here's the Tutorial Video --> [Video Link](https://youtu.be/NTwpC_HVLP8)

## Tech Stack Used

- React
- Ethers
- Hardhat
- Solidity
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

```shell
git clone https://github.com/SamarthSaxena10/NFT-Minting-Dapp.git
```

2. Install dependencies

```shell
npm install
```

3. In .env and add the values

```shell
PRIVATE_KEY=
```

4. Compile and Deploy the Contract

```shell
npx hardhat compile

npx hardhat run scripts/deploy.js --network sphinx
```

5. Add the contract address in connectWallet.js

```shell
const contractAddress = "";
```

6. Generate API keys from [Pinata](https://pinata.cloud/) and add them in ipfsUploader.js

```shell
const pinataApiKey = "";
const pinataSecretApiKey = "";
```

7. Run the app

```shell
npm start
```
