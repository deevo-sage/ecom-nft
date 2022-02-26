pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// import "@openzeppelin/contracts/access/Ownable.sol";
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract is ERC20 {
    event SetPurpose(address sender, string purpose);

    string public purpose = "Building Unstoppable Apps!!!";

    constructor() payable ERC20("MyToken", "MTK") {
        // what should we do on deploy?P
    }

    mapping(uint256 => uint256) price;

    function getPrice(uint256 token) public view returns (uint256) {
        uint256 cost = price[token];
        return cost;
    }

    function buytoken(address buyer, uint256 tokenId)
        public
        payable
        returns (address)
    {
        require(msg.value >= price[tokenId], "money less thanks");
        return buyer;
    }

    function setPurpose(string memory newPurpose) public {
        purpose = newPurpose;
        console.log(msg.sender, "set purpose to", purpose);
        emit SetPurpose(msg.sender, purpose);
    }

    // to support receiving ETH by default
    receive() external payable {}

    fallback() external payable {}
}
