const compile = require("./compile");
const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:7545");

async function main() {
  const accounts = await web3.eth.getAccounts();
  const { bytecode, abi } = compile("Inbox", "Inbox.sol");

  const inbox = await new web3.eth.Contract(abi)
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({ from: accounts[0], gas: "1000000" });

  console.log(inbox.options.address);
}

main();
