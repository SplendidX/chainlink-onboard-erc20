pragma solidity ^0.5.0;

contract Onboard {

    address onboardedToken;

    constructor (address _token) public {
        onboardedToken = _token;
    }
}