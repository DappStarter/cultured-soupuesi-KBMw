require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remind hospital install lonely flock treat'; 
let testAccounts = [
"0x3da10ab7fdbe32d31d3f94898e16c6ec5c31a6012daa9f5627d7c0128cd221cd",
"0xb3492cbcf74a01f1263f27be5f8c95558103ad05a08a73a9820e5fb50398d43c",
"0x4843cc9b9c7b0c933d218e9c0307aa3c753a2a3cf5deb65345dacaa3e2281eb6",
"0x9ab94665cac852bee8927c3e0cd1b4130cd4271dd141b372f1aa8ecaa693ecf9",
"0x585065725cb1b6ec21ca4511326ab190491e68bef641dde968c02a12e6635cd8",
"0x1dcb9f0a21fc92693c1d211cbcb10a5bb0fe6c4f76afcae9ee1eb815103af4da",
"0xc282d559f6f9652722eeb64b51ed21612476bb907a20b6b63085c8c6144ee203",
"0x1b0e349284c253de7df424863704310d53c48951adf035cf38b005bb072656d6",
"0xefb998867768bb76e170fe8081f55c17ada7150008fa0fc79e532f1f5bf94b03",
"0x698c029fbad19abd36a2804ed461400fb186817f20f715ee3be8aaaf801d2785"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


