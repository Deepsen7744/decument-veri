/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')

const MYGANACHE_PRIVATE_KEY =
  '0x35ee1e1f976103f071b1354c23032878e10edb50ce33f1004ab93dc395a4b95d'

module.exports = {
  solidity: '0.8.19',

  networks: {
    ganache: {
      url: `HTTP://127.0.0.1:7545`,
      accounts: [`${MYGANACHE_PRIVATE_KEY}`],
    },
  },
}

//npx hardhat run --network sepolia scripts/deploy.js
