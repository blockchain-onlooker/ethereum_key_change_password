var keythereum = require("keythereum");

address= '3d8797a152d95b3f389182e25ceb3672e71b80c5'
var datadir = "."
var keyObject = keythereum.importFromFile(address, datadir);
var password = "press1";
var privateKey = keythereum.recover(password, keyObject);
console.log(privateKey.toString("hex"));

var params = { keyBytes: 32, ivBytes: 16 };
var dk = keythereum.create(params);
var password = "123456";
var options = {
  kdf: "pbkdf2",
  cipher: "aes-128-ctr",
  kdfparams: {
    c: 262144,
    dklen: 32,
    prf: "hmac-sha256"
  }
};
var keyObject = keythereum.dump(password, privateKey, dk.salt, dk.iv, options);
keythereum.exportToFile(keyObject);