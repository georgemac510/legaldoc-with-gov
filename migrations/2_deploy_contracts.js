const LegalDoc = artifacts.require("LegalDoc");
const MyGovernor = artifacts.require("MyGovernor");

module.exports = async function(deployer) {
    await deployer.deploy(LegalDoc);
    const legalDoc = await LegalDoc.deployed();
    await deployer.deploy(MyGovernor, legalDoc.address);
};
