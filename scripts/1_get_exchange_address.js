const fs = require("fs");
const abi = require("../abis/uniswap_rinkeby.json")

const Web3 = require("web3");

const cl_rinkeby = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709";
const us_rinkeby = "0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36";

let web3 = new Web3(new Web3.providers.HttpProvider(fs.readFileSync("secret/.infura").toString().trim()));
const uniswap = new web3.eth.Contract(abi, us_rinkeby);

async function getTokenExchange() {
    let exchange = await uniswap.methods.getExchange(cl_rinkeby).call();
    console.log(exchange);
}

getTokenExchange();