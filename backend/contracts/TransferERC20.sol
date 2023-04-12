// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ERC20Transfer {
    string public name = "MyToken";
    string public symbol = "MKT";
    uint256 public totalSupply;
    uint256 public _userID;

    address public ownerOfContract;
    address[] public  holderToken;

    event TransferERC20(
        address _from,
        address _to,
        uint256 _value,
        uint256 timestamp
    );

    event Approval(
        address _owner,
        address _spender,
        uint256 _value

    );
    mapping(address=>TokenHolderInfo) public tokenHolderInfos;
    mapping(address=>mapping(address=>uint256)) public allowance;
    mapping(address=>uint256) public balanceOf;
    struct TokenHolderInfo{
        uint256 _tokenId;
        address _from;
        address _to;
        uint256 _totalToken;
        bool _tokenHolder;
    }

    constructor(uint256 _initialSupply){
        ownerOfContract=msg.sender;
        balanceOf[msg.sender]=_initialSupply;
        totalSupply=_initialSupply;
    }

    function inc() internal {
        _userID++;
    }
    function transferERC20(address _to,uint256 _value) public returns(bool success){
        require(balanceOf[msg.sender]>=_value);
        inc();
        balanceOf[msg.sender]-=_value;
        balanceOf[_to]+=_value;

        TokenHolderInfo storage tokenHolderInfo= tokenHolderInfos[_to];

        tokenHolderInfo._tokenId=_userID;
        tokenHolderInfo._to=_to;
        tokenHolderInfo._from=msg.sender;
        tokenHolderInfo._totalToken=_value;
        tokenHolderInfo._tokenHolder=true;

        holderToken.push(_to);

        emit TransferERC20(msg.sender,_to,_value,block.timestamp);

return true;

    }

    function approve(address _spender,uint256 _value) public returns(bool success){
        allowance[msg.sender][_spender]=_value;

        emit Approval(msg.sender,_spender,_value);
        return true;

    }

    function transferFrom(address _from,address _to,uint256 _value) public returns(bool success){
        balanceOf[_from]-=_value;
        balanceOf[_to]+=_value;
        allowance[_from][msg.sender]-=_value;
        emit TransferERC20(_from,_to,_value,block.timestamp);
        return true;
    }

    function getTokenHolderData(address _address) public view returns(uint256,address,address,uint256,bool){
        return(tokenHolderInfos[_address]._tokenId,
        tokenHolderInfos[_address]._to,
        tokenHolderInfos[_address]._from,
        tokenHolderInfos[_address]._totalToken,
        tokenHolderInfos[_address]._tokenHolder
        );
    }

    function getTokenHolder() public view returns(address[] memory){
        return holderToken;
    }

}
