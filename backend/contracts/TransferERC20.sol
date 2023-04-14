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

    modifier onlyOwner() {
        require(
            msg.sender == ownerOfContract,
            "Only the contract owner can call this function"
        );
        _;
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
    event TokensPurchased(address buyer, uint256 amount, uint256 timestamp);
    event TokensSold(address seller, uint256 amount, uint256 timestamp);

function buyTokens(uint256 amount) public payable {
        require(msg.sender != ownerOfContract, "Owner cannot buy their own tokens");

    require(msg.value >= (amount/1000 ), "Incorrect amount of ether sent");

   uint256 ethAmount = (amount / 1000) * 1 ether;
    balanceOf[ownerOfContract] -= amount;
    balanceOf[msg.sender] += amount;

    transactions.push(
        TransferStruct(ownerOfContract, msg.sender, amount, block.timestamp)
    );

    emit Transfer(ownerOfContract, msg.sender, amount, block.timestamp);
    emit TokensPurchased(msg.sender, amount, block.timestamp);

    payable(ownerOfContract).transfer(ethAmount);
}


    function sellTokens(uint256 amount) public {
        require(balanceOf[msg.sender] >= amount, "Insufficient MKT balance");

        balanceOf[msg.sender] -= amount;
        balanceOf[ownerOfContract] += amount;

        uint256 ethAmount = (amount / 1000) * 1 ether;
        payable(msg.sender).transfer(ethAmount);
        transactions.push(
            TransferStruct(msg.sender, ownerOfContract, amount, block.timestamp)
        );
        emit Transfer(msg.sender, ownerOfContract, amount, block.timestamp);
        emit TokensSold(msg.sender, amount, block.timestamp);
    }

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

    function getOwnerBalance() public view onlyOwner returns (uint256) {
        return payable(ownerOfContract).balance;
    }
}
