// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ERC20Transfer {
    string public name = "MyToken";
    string public symbol = "MKT";
    uint256 public totalSupply;

    address public ownerOfContract;

    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) {
        ownerOfContract = msg.sender;
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }

    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        uint256 timestamp
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        uint256 timestamp;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address receiver, uint256 amount) public {
        require(balanceOf[msg.sender] >= amount);

        balanceOf[msg.sender] -= amount;
        balanceOf[receiver] += amount;

        transactions.push(
            TransferStruct(msg.sender, receiver, amount, block.timestamp)
        );
        emit Transfer(msg.sender, receiver, amount, block.timestamp);
    }

    function getAllTransaction() public view returns (TransferStruct[] memory) {
        return transactions;
    }
}
