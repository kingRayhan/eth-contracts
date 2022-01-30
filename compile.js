const path = require("path");
const fs = require("fs");
const solc = require("solc");

const location = path.resolve(__dirname, "contracts", "Inbox.sol");
const sourceCode = fs.readFileSync(location, "utf8");

const compile = solc.compile(sourceCode, 1);
module.exports = compile.contracts[":Inbox"];
