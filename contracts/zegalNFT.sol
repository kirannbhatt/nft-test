// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "base64-sol/base64.sol";

contract zegalNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    event CreatedZegalNFT(uint256 indexed tokenId, string tokenURI);

    constructor() ERC721("Zegal NFT", "ZNFT") {
        tokenCounter = 0;
    }

    function create(string memory document) public {

        _safeMint(msg.sender, tokenCounter);
        string memory tokenURI = legalContractMeta(document);
        _setTokenURI(tokenCounter, tokenURI);
        emit CreatedZegalNFT(tokenCounter, tokenURI);
        tokenCounter = tokenCounter + 1;
    }

    function legalContractMeta(string memory document) public pure returns (string memory) {
        string memory baseURL = "data:application/json;base64,";
        return string(abi.encodePacked(baseURL, Base64.encode(bytes(abi.encodePacked('{"name": "Zegal NFT", "description": "Legal document NFT", "url": "', document,'"}')))
        ));
    }

}