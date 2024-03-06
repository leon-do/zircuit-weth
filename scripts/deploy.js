async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const Contract = await ethers.getContractFactory("WETH9");
  const Response = await Contract.deploy();
  console.log("Contract deployed to:", Response.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
        console.error(error);
        process.exit(1);
  });