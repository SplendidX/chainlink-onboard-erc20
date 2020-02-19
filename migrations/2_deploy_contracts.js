const Onboard = artifacts.require("Onboard");

module.exports = function(deployer) {
    deployer.deploy(Onboard, "0xDA5B056Cfb861282B4b59d29c9B395bcC238D29B");
};