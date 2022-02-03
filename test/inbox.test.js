// const assert = require("assert");
// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const compiler = require("simple-solc");
// const Web3 = require("web3");

// // const provider = new HDWalletProvider({
// //   mnemonic: {
// //     phrase:
// //       "wagon employ chalk script company trouble airport inject image echo woman age",
// //   },
// //   provider: "https://rinkeby.infura.io/v3/fbea3c6dbefd4e1aa76eee29509cdd88",
// // });

// const web3 = new Web3("http://127.0.0.1:7545");

// let accounts;
// let inbox;
// beforeEach(async () => {
//   accounts = await web3.eth.getAccounts();

//   const { bytecode, abi } = compiler(
//     "Inbox",
//     __dirname + "/../contracts/Inbox.sol"
//   );

//   try {
//     inbox = await new web3.eth.Contract(abi)
//       .deploy({
//         data: bytecode,
//         arguments: ["Hi there!"],
//       })
//       .send({ from: accounts[0], gas: "1000000" });
//   } catch (error) {
//     console.log(error);
//   }
// });

// describe("Inbox", () => {
//   it("Inbox contract deployed", () => {
//     assert.ok(inbox.options.address);
//   });

//   it("has a initial message", async () => {
//     const message = await inbox.methods.message().call();
//     assert.equal(message, "Hi there!");
//   });

//   it("can change message", async () => {
//     await inbox.methods.setMessage("New Message").send({ from: accounts[0] });
//     const message = await inbox.methods.message().call();
//     assert.equal(message, "New Message");
//   });
// });
