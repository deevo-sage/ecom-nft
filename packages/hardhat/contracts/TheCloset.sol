// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TheCloset is
    ERC721,
    ERC721Enumerable,
    ERC721URIStorage,
    Pausable,
    Ownable,
    ERC721Burnable
{
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("The Closet", "CLST") {}

    // price

    mapping(string => uint256) public price;
    mapping(string => address) public sellerCheck;
    mapping(address => bool) public sellerAuthorized;
    mapping(uint256 => string) public tokenToProduct;
    mapping(string => uint256) public inventory;
    mapping(string => string) public metadataURI;

    function getPrice(string memory productId) public view returns (uint256) {
        return price[productId];
    }

    function setPrice(string memory productId, uint256 newPrice)
        public
        returns (uint256)
    {
        require(msg.sender == sellerCheck[productId], "sender is not seller");
        price[productId] = newPrice;
        return newPrice;
    }

    function RegisterProduct(
        string memory productId,
        uint256 newPrice,
        uint256 supply,
        string memory metadata
    ) public {
        require(
            sellerAuthorized[msg.sender] == true,
            "seller is not authorized"
        );
        metadataURI[productId] = metadata;
        inventory[productId] = supply;
        price[productId] = newPrice;
        sellerCheck[productId] = msg.sender;
    }

    function RegisterSeller(address seller) public onlyOwner {
        sellerAuthorized[seller] = true;
    }

    // function SellerMint(){}
    function BuyProduct(string memory productId) public payable {
        require(msg.value >= price[productId], "msg value too low");
        require(inventory[productId] >= 0, "out of stock");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        tokenToProduct[tokenId] = productId;
        inventory[productId]--;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI[productId]);
    }

    function TotalTokens() public view returns (uint256) {
        return _tokenIdCounter.current();
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) whenNotPaused {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
