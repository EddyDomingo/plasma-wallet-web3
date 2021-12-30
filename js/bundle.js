(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// var Web3 = require('web3')
// Script to Generate Ethereum Address //
var url = "https://mainnet.infura.io/v3/88dcfec6d0334e3288edd97747d62ac4"
var web3 = new Web3(url)
console.log(web3.eth.accounts.create())

// var bitcore = require('bitcore-lib')
var privateKey = new bitcore.PrivateKey();
privateKey.toString()
var address = privateKey.toAddress();
console.log(address.toString())
},{}]},{},[1]);
