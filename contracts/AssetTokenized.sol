pragma solidity = 0.8.17;

contract AssetTokenized{
uint public supply;
uint public pricePerEth;
mapping( address => uint ) public balance;

constructor() public {
    supply = 1000;                    // There are a total of 1000 tokens for this asset
    pricePerEth = 100000000000000000; // One token costs 0.1 ether
  }

  function check() public view returns(uint) {
    return balance[msg.sender];
  }

  receive () external payable {
    balance[msg.sender] += msg.value/pricePerEth; // adds asset tokens to how much ether is sent by the investor
    supply -= msg.value/pricePerEth;              //subtracts the remaining asset tokens from the total supply
  }
}
