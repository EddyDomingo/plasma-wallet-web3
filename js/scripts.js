console.log("hello world")

document.getElementById("UserName").innerHTML = localStorage.getItem("TheUser");
document.getElementById("myImg").src = localStorage.getItem("TheAvatar");

// Wallet button to navigate to wallet section of the app //
var x = document.getElementById('wallet-btn');
x.addEventListener("click", displayChange);

function displayChange() {
    document.getElementById("main-section").style.display = "none";
    document.getElementById("your-wallets").style.display = "block";
  }

var w = document.getElementById('checkbox');
w.addEventListener("click", displayToMain);
  
function displayToMain() {
    document.getElementById("main-section").style.display = "block";
    document.getElementById("your-wallets").style.display = "none";
}

// From your Exchange top main page //

var exchange = document.getElementById('exchange-btn');
exchange.addEventListener("click", displayExchange);

function displayExchange(){
    document.getElementById("main-section").style.display = "none";
    document.getElementById("your-exchange").style.display = "block";

}

var exchangeReturnBtn = document.getElementById('checkbox2');
exchangeReturnBtn.addEventListener("click", displayFromExchange);
  
function displayFromExchange() {
    document.getElementById("main-section").style.display = "block";
    document.getElementById("your-exchange").style.display = "none";
}

// End of Wallet navigate to and from //

// Flip holdings card to get Address BTC //

var btc1 = document.getElementById('card-address-btc');
btc1.addEventListener("click", displayAddress);
  
function displayAddress() {
    document.getElementById("card-address-btc").style.display = "none";
    document.getElementById("card-address-option-btc").style.display = "flex";
}

var btc2 = document.getElementById('doneLink-btc');
// card-address-option-btc
btc2.addEventListener("click", displayHoldings);
  
function displayHoldings() {
    document.getElementById("card-address-btc").style.display = "flex";
    document.getElementById("card-address-option-btc").style.display = "none";
}

// Flip holdings card to get Address Eth //
var eth1 = document.getElementById('card-address-eth');
eth1.addEventListener("click", displayAddressEth);
  
function displayAddressEth() {
    document.getElementById("card-address-eth").style.display = "none";
    document.getElementById("card-address-option-eth").style.display = "flex";
}

var eth2 = document.getElementById('doneLink-eth');
// card-address-option-eth
eth2.addEventListener("click", displayHoldingsEth);
  
function displayHoldingsEth() {
    document.getElementById("card-address-eth").style.display = "flex";
    document.getElementById("card-address-option-eth").style.display = "none";
}

// Flip holdings card to get Address BNB //

var bnb1 = document.getElementById('card-address-bnb');
bnb1.addEventListener("click", displayAddressBnb);
  
function displayAddressBnb() {
    document.getElementById("card-address-bnb").style.display = "none";
    document.getElementById("card-address-option-bnb").style.display = "flex";
}

var bnb2 = document.getElementById('doneLink-bnb');
bnb2.addEventListener("click", displayHoldingsBnb);
  
function displayHoldingsBnb() {
    document.getElementById("card-address-bnb").style.display = "flex";
    document.getElementById("card-address-option-bnb").style.display = "none";
}

// Flip holdings card to get Address SOL //
var sol1 = document.getElementById('card-address-sol');
sol1.addEventListener("click", displayAddressSol);
  
function displayAddressSol() {
    document.getElementById("card-address-sol").style.display = "none";
    document.getElementById("card-address-option-sol").style.display = "flex";
}

var sol2 = document.getElementById('doneLink-avax');
sol2.addEventListener("click", displayHoldingsSol);
  
function displayHoldingsSol() {
    document.getElementById("card-address-sol").style.display = "flex";
    document.getElementById("card-address-option-sol").style.display = "none";
}

// Modal for Token Swap //

var tokenModalWrapper = document.getElementById('token-modal-wrapper');
var tokenSelectButton = document.getElementById('from-token');
var ToTokenSelectButton = document.getElementById('to-token');
var xBtnClose = document.getElementsByClassName("close-btn")[0];

tokenSelectButton.addEventListener("click", displayTokenModal);
ToTokenSelectButton.addEventListener("click", displayTokenModal);

function displayTokenModal(){
    tokenModalWrapper.style.display = "block";
}

xBtnClose.addEventListener("click", closeTokenModal);

function closeTokenModal(){
    tokenModalWrapper.style.display = "none";
    
}


// Copy Address//
const copyButton = document.getElementById("copy-logo");
copyButton.addEventListener('click', (e) =>{
  const content = document.getElementById('crypto-address').textContent;
  navigator.clipboard.writeText(content);
  alert("Address Copied: " + content);
  console.log(content)
})

const copyButtonEth = document.getElementById("copy-logoEth");
copyButtonEth.addEventListener('click', (e) =>{
  const content = document.getElementById('crypto-address').textContent;
  navigator.clipboard.writeText(content);
  alert("Address Copied: " + content);
  console.log(content)
})

const copyButtonBnb = document.getElementById("copy-logoBnb");
copyButtonBnb.addEventListener('click', (e) =>{
  const content = document.getElementById('crypto-address').textContent;
  navigator.clipboard.writeText(content);
  alert("Address Copied: " + content);
  console.log(content)
})

const copyButtonAvax = document.getElementById("copy-logoAvax");
copyButtonAvax.addEventListener('click', (e) =>{
  const content = document.getElementById('crypto-address').textContent;
  navigator.clipboard.writeText(content);
  alert("Address Copied: " + content);
  console.log(content)
})

// Swap Button Action //
var swapButton = document.getElementById('swap-btn');
swapButton.addEventListener('click', swapAlert);
function swapAlert(){
    alert('Swap has been Completed!');
}








