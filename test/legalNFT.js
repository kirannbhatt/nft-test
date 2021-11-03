const { expect } = require("chai");

describe("Minting the token and returning it", function () {
  it("should the contract be able to mint a function and return it", async function () {
    const metadata =
      "https://opensea-creatures-api.herokuapp.com/api/creature/1"; //Random metadata url

    const ZegalContract = await ethers.getContractFactory("zegalNFT"); // Getting the contract

    const ZegalContract = await ZegalContract.deploy(); //Deploying the Contract

    const transaction = await ZegalContract.mintToken(metadata); // Minting the token
    const tx = await transaction.wait(); // Waiting for the token to be minted

    const event = tx.events[0];
    const value = event.args[2];
    const tokenId = value.toNumber(); // Getting the tokenID

    const tokenURI = await ZegalContract.tokenURI(tokenId); // Using the tokenURI from ERC721 to retrieve de metadata

    expect(tokenURI).to.be.equal(metadata); // Comparing and testing
  });
});
