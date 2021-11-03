# Zegal NFT test project

- contains a test smart contract
- can deploy to test network (eg. ropsten, rinkeby)
- update the hardhat.config.js with network accounts url and accountId
- create etherscan account and update the apiKey in hardhat.config.js

Try running some of the following tasks:

```shell
yarn compile
yarn hardhat deploy --network rinkeby - this will deploy contract to rinkeby network
npx hardhat verify --network rinkeby 0x8561b47C369D01EfbC387Fc2943D62d1761313e2 - verify token 
```
