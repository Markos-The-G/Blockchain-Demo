pragma solidity 0.5.16;

contract Chest { 

      function () external payable {

  }
    function send(address _receiver) payable {
    _receiver.send(msg.value);
  }
}