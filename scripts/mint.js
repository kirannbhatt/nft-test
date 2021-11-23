const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const API_URL =
  "https://eth-rinkeby.alchemyapi.io/v2/D7Ydu4K58RYHJdGFr5ftQXT5g8v6SPBB";

const METAMASK_PUBLIC_KEY = "0xc18255f7C87EF2e5E639160dE772e86537F7e0c9";
const METAMASK_PRIVATE_KEY =
  "80182edab35ac7fac68757a468fdbb8e88fc4aa6fb1c30bb932db60b31ac0ae0";

const alchemyWeb3 = createAlchemyWeb3(API_URL);
const contract = require("../artifacts/contracts/zegalNFT.sol/zegalNFT.json");

const contractAddress = "0xf990C6ab10B0253889b048a9cD97dD51046694a3";
const nftContract = new alchemyWeb3.eth.Contract(contract.abi, contractAddress);

const mintNFT = async (tokenURI) => {
  try {
    const nonce = await alchemyWeb3.eth.getTransactionCount(
      METAMASK_PUBLIC_KEY,
      "latest"
    );

    const tx = {
      from: METAMASK_PUBLIC_KEY, // your metamask public key
      to: contractAddress, // the smart contract address we want to interact with
      nonce: nonce, // nonce with the no of transactions from our account
      gas: 1000000, // fee estimate to complete the transaction

      data: nftContract.methods
        .createNFT("0xc18255f7C87EF2e5E639160dE772e86537F7e0c9", tokenURI)
        .encodeABI(), // call the createNFT function from our OsunRiverNFT.sol file
    };

    const signPromise = alchemyWeb3.eth.accounts.signTransaction(
      tx,
      METAMASK_PRIVATE_KEY
    );

    signPromise
      .then((signedTx) => {
        alchemyWeb3.eth.sendSignedTransaction(
          signedTx.rawTransaction,
          function (err, hash) {
            if (!err) {
              console.log(
                "The hash of your transaction is: ",
                hash,
                "\nCheck Alchemy's Mempool to view the status of your transaction!"
              );
            } else {
              console.log(
                "Something went wrong when submitting your transaction:",
                err
              );
            }
          }
        );
      })
      .catch((err) => {
        console.log(" Promise failed:", err);
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = mintNFT;
