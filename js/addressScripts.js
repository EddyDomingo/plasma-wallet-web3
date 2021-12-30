const serverUrl = "https://ounkpbazzeqm.usemoralis.com:2053/server";
const appId = "oOZQ0XMvc8eEDBpEhyBGY1s0G3LLq4sHnhD5HJRD";
Moralis.start({ serverUrl, appId });

// Scripts to Generate all addresses //
// var Web3 = require('web3')
// Script to Generate Ethereum Address //
var url = "https://mainnet.infura.io/v3/88dcfec6d0334e3288edd97747d62ac4"
var web3 = new Web3(url)
var ethAddress = web3.eth.accounts.create()
console.log("Eth address :",ethAddress.address)

// bitcoin address generator

var bitcore = require('bitcore-lib')
var privateKey = new bitcore.PrivateKey();
privateKey.toString()
var btcAddress = privateKey.toAddress();
console.log("BTC address :", btcAddress.toString())

// binance address generator

const { BncClient } = require("@binance-chain/javascript-sdk")
const client = new BncClient("https://dex.binance.org")
client.initChain()
var bscAddress = client.createAccount()
console.log("BNB address :",bscAddress.address)

// avax address generator 

const avalanche = require("avalanche")
const { Avalanche, BinTools, Buffer, BN } = require("avalanche")
const bintools = BinTools.getInstance()
const myNetworkID = 12345 //default is 1, we want to override that for our local network 12345
const avalancheX = new Avalanche("localhost", 9650, "http", myNetworkID)
const xchain = avalancheX.XChain() //returns a reference to the X-Chain used by AvalancheJS
const myKeychain = xchain.keyChain()
const newAddress1 = myKeychain.makeKey() 
console.log("Avax address :" , newAddress1.getAddressString())


