const { BncClient } = require("@binance-chain/javascript-sdk")
const client = new BncClient("https://dex.binance.org")
client.initChain()
var bscAddress = client.createAccount()
console.log("BNB address :",bscAddress.address)
// const password = "alvarado";
// client.createAccountWithKeystore([password])

// client.createAccountWithMnemonic()
