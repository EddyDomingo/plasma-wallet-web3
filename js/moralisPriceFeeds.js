const APP_ID = "oOZQ0XMvc8eEDBpEhyBGY1s0G3LLq4sHnhD5HJRD";
const SERVER_URL = "https://ounkpbazzeqm.usemoralis.com:2053/server";

const wrappedBTC = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599";
const wrappedEth = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const avalancheChain = "avalanche";
const wrappedAvax = "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7";
const binanceChain = "bsc";
const wrappedBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

const init = async () => {
        await Moralis.start({
            appId: APP_ID,
            serverUrl: SERVER_URL,
        });
        //Get token price on Eth mainnet of wrappedBTC
        const optionsBTC = {
            address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            chain: "",
            exchange: ""
        };
        const priceBTC = await Moralis.Web3API.token.getTokenPrice(optionsBTC);
        console.log("This is the current token price: " , priceBTC.usdPrice);
        document.getElementById('token-price-BTC').innerHTML = "$ " + (priceBTC.usdPrice).toFixed(2);
        // calculate and display holdings amount
        const holdingBtc = await priceBTC.usdPrice * 0.32
        console.log("Your holdings", holdingBtc.toFixed(2))
        document.getElementById('amount-dollars-btc').innerHTML = " $ " + holdingBtc.toFixed(2);
        

        //Get token price on Eth mainnet of wrappedEth
        const optionsEth = {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            chain: "",
            exchange: ""
        };
        const priceEth = await Moralis.Web3API.token.getTokenPrice(optionsEth);
        console.log("This is the current token price: " , priceEth.usdPrice);
        document.getElementById('token-price-ETH').innerHTML = "$ " + (priceEth.usdPrice).toFixed(2);
        // calculate and display holdings amount
        const holdingEth = await priceEth.usdPrice * 3.4567
        console.log("Your holdings", holdingEth.toFixed(2))
        document.getElementById('amount-dollars-eth').innerHTML = " $ " + holdingEth.toFixed(2);

        //Get token price on Binance mainnet of wrappedBNB
        const optionsBnb = {
            address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            chain: binanceChain,
            exchange: ""
        };
        const priceBnb = await Moralis.Web3API.token.getTokenPrice(optionsBnb);
        console.log("This is the current token price: " , priceBnb.usdPrice);
        document.getElementById('token-price-BNB').innerHTML = "$ " + (priceBnb.usdPrice).toFixed(2);
        // calculate and display holdings amount
        const holdingBnb = await priceBnb.usdPrice * 10.6767
        console.log("Your holdings", holdingBnb.toFixed(2))
        document.getElementById('amount-dollars-bnb').innerHTML = " $ " + holdingBnb.toFixed(2);

        //Get token price on Avalanche mainnet of wrappedAvax
        const optionsAvax = {
            address: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
            chain: avalancheChain,
            exchange: ""
        };
        const priceAvax = await Moralis.Web3API.token.getTokenPrice(optionsAvax);
        console.log("This is the current token price: " , priceAvax.usdPrice);
        document.getElementById('token-price-AVAX').innerHTML = "$ " + (priceAvax.usdPrice).toFixed(2);
        // calculate and display holdings amount
        const holdingAvax = await priceAvax.usdPrice * 7.8731
        console.log("Your holdings", holdingAvax.toFixed(2))
        document.getElementById('amount-dollars-avax').innerHTML = " $ " + holdingAvax.toFixed(2);


        // Total Holdings 
        const totalHoldings = await (holdingAvax + holdingEth + holdingBnb + holdingBtc).toFixed(2);
        document.getElementById('totalHoldings').innerHTML = " $ " + totalHoldings;


    }

init();
