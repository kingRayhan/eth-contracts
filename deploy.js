const HDWalletProvider = require("truffle-hdwallet-provider");
const compiler = require("simple-solc");
const Web3 = require("web3");

const provider = new HDWalletProvider(
  "wagon employ chalk script company trouble airport inject image echo woman age",
  "https://rinkeby.infura.io/v3/fbea3c6dbefd4e1aa76eee29509cdd88"
);

const web3 = new Web3(provider);

async function main() {
  const [accountId] = await web3.eth.getAccounts();

  console.log({ accountId });

  const { bytecode, abi } = compiler(
    "Inbox",
    __dirname + "/contracts/Inbox.sol"
  );

  // console.log({ abi, bytecode });

  try {
    const inbox = await new web3.eth.Contract(abi)
      .deploy({
        data: bytecode,
        arguments: ["Hello World"],
      })
      .send({
        from: accountId,
        gas: "1000000",
      });

    console.log(inbox.options.address);
  } catch (error) {
    console.log(error.message);
  }
}

main();

// let myAccount;

// console.log(myAccount);
