const avalanche = require("avalanche")
const { Avalanche, BinTools, Buffer, BN } = require("avalanche")

const bintools = BinTools.getInstance()

const myNetworkID = 12345 //default is 1, we want to override that for our local network 12345
const avalancheX = new Avalanche("localhost", 9650, "http", myNetworkID)
const xchain = avalancheX.XChain() //returns a reference to the X-Chain used by AvalancheJS

const myKeychain = xchain.keyChain()
const newAddress1 = myKeychain.makeKey() 
// console.log(newAddress1);
// console.log("Private Key :" , newAddress1.getPrivateKey())
// console.log("Public Key :" , newAddress1.getPublicKey())
// console.log("Generate Key :" , newAddress1.generateKey())
// console.log("Public Key String:" , newAddress1.getPublicKeyString())
console.log("Get Address :" , newAddress1.getAddressString())
// console.log("Get Address from Public Key :" , newAddress1.addressFromPublicKey())
// var publicAddress = newAddress1.pubk;
// console.log(publicAddress);
