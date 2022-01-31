const path = require("path");
const fs = require("fs");
const solc = require("solc");

// module.exports = { byteCode, abi };

const compile = (contractName, SourceFileName) => {
  const location = path.resolve(__dirname, "contracts", SourceFileName);
  const sourceCode = fs.readFileSync(location, "utf8");

  const input = {
    language: "Solidity",
    sources: {
      [SourceFileName]: {
        content: sourceCode,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };

  const compile = solc.compile(JSON.stringify(input));
  const output = JSON.parse(compile);

  const bytecode =
    output.contracts[SourceFileName][contractName].evm.bytecode.object;
  // abi
  const abi = output.contracts[SourceFileName][contractName].abi;
  return { bytecode, abi };
};

module.exports = compile;
