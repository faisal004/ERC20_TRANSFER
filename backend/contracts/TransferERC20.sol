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

    struct BUYSELLSTRUCT {
        address sender;
        address receiver;
        uint256 amount;
        uint256 timestamp;
    }

    BUYSELLSTRUCT[] sales;

    TransferStruct[] transactions;
    event TokensPurchased(address buyer, uint256 amount, uint256 timestamp);
    event TokensSold(address seller, uint256 amount, uint256 timestamp);

    function buyTokens(uint256 amount) public payable {
        require(
            msg.sender != ownerOfContract,
            "Owner cannot buy their own tokens"
        );

        require(msg.value >= 0.001 ether, "Insufficient ether sent");

        uint256 tokenPrice = 0.001 ether; // 1 MKT costs 0.001 ether

        uint256 maxAmount = msg.value / tokenPrice; // Maximum amount of MKT the user can buy

        require(
            amount <= maxAmount,
            "Insufficient ether sent for this amount of MKT"
        );

        balanceOf[ownerOfContract] -= amount;
        balanceOf[msg.sender] += amount;

        sales.push(
            BUYSELLSTRUCT(ownerOfContract, msg.sender, amount, block.timestamp)
        );

        emit Transfer(ownerOfContract, msg.sender, amount, block.timestamp);
        emit TokensPurchased(msg.sender, amount, block.timestamp);
    }

    function sellTokens(uint256 amount) public {
        require(balanceOf[msg.sender] >= amount, "Insufficient MKT balance");

        balanceOf[msg.sender] -= amount;
        balanceOf[ownerOfContract] += amount;

        uint256 ethAmount = (amount * 1 ether) / 1000;

        sales.push(
            BUYSELLSTRUCT(ownerOfContract, msg.sender, amount, block.timestamp)
        );
        emit Transfer(msg.sender, ownerOfContract, amount, block.timestamp);
        emit TokensSold(msg.sender, amount, block.timestamp);

        address payable recipient = payable(msg.sender);

        recipient.transfer(ethAmount);
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

    function getAllBUYSELLDeatils()
        public
        view
        returns (BUYSELLSTRUCT[] memory)
    {
        return sales;
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
//owner of the contract can only withdraw Half of the eth stored in the contract
    function withdraw() public onlyOwner {
        uint256 balance = getContractBalance();
        require(balance > 0, "Contract balance is zero");
        payable(ownerOfContract).transfer((balance / 2));
    }
}
