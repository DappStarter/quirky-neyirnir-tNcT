require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name rescue nominee coffee include infant frame gaze'; 
let testAccounts = [
"0x5bdb4ceabe24a50b978ed1572ff1c118f4b0fa6db0d32d8a43ca5fe3a86ecdfd",
"0x8075e31da3a689a040e5608bdbb57a9cdf67701734cb46ecdf9e7ec3805b32a2",
"0xd5089416848dc6b35f051f75d774c823590e62afa9756e1946a48ef2e5b5d3d7",
"0xaa24f68a22a1ad0dffe992fe42455de410de34d052303bab40d88c214db140a0",
"0x708287c12f90e310dfc6c54945b1c1c439886514c3e96972fbe8d72a2e08f326",
"0x9c8d2570da38cbf4bcc5a01f1d345c2e98694e9560dc619414eb67ebcfc59426",
"0xe2bd02b743db5c5f08a1d34a81be9edb96adac583197248e2c86bfd24929d8c9",
"0xc49801a0704d028fce25ea38c35c2029ee79750443f7f60ce89d0ce3d69dc993",
"0x08992c48cb2f25835fff71fb1af761e5f176354ffa9ed77d8c9feb9100484805",
"0x48ae2388cbceca83fe747f97b954183d5a6ce7a7e471d0b8d7aa28ecbcfcaff1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

