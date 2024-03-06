require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.4.19",
  networks: {
    zircuit: {
      url: `https://zircuit1.p2pify.com`,
      // 0x2dC67c18B796586eA0BD2d0E011D79217E4aD972
      accounts: [process.env.ZIRCUIT_PRIVATE_KEY || '0xd09275dca0b82e51d41e256dceb3d3eb9f284def87d5af7494c75b8851d010fd']
    }
  }
};


