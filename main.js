// const compile = require("./compile");
// const Web3 = require("web3");
// const web3 = new Web3("http://127.0.0.1:7545");

// async function main() {
//   const accounts = await web3.eth.getAccounts();
//   const { bytecode, abi } = compile("Inbox", "Inbox.sol");

//   const inbox = await new web3.eth.Contract(abi)
//     .deploy({
//       data: bytecode,
//       arguments: ["Hi there!"],
//     })
//     .send({ from: accounts[0], gas: "1000000" });

//   console.log(inbox.options.address);
// }

// main();

const fs = require("fs");
const path = require("path");

const location = path.resolve(__dirname, "contracts/Inbox.sol");

const source = fs.readFileSync(location, "utf8");

console.log(source);
