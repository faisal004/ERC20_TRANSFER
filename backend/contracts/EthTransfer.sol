// SPDX-License-Identifier: SEE LICENSE IN LICENSE

pragma solidity ^0.8.0;

contract Transaction {
    uint256 transactionCounter;

    event Transfer(
        address from,
        address receiver,
        uint amount,
        uint256 timestamp
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        uint256 timestamp;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount) public {
        transactionCounter += 1;
        transactions.push(
            TransferStruct(msg.sender, receiver, amount, block.timestamp)
        );
        emit Transfer(msg.sender, receiver, amount, block.timestamp);
    }

    function getAllTransaction() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCounter;
    }
}
