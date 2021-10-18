const Building = artifacts.require("Building");

module.exports = function (deployer) {
  deployer.deploy(Building);
};
