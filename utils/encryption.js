const CryptoJs = require('crypto-js');

module.exports = {
    /**
     * @function encryptionMd5 Md5加密
     * @param { String } word 加密内容
     * @return { String } result 加密结果
     */
    encryptionMd5 (word) {
        return CryptoJs.MD5(word).toString();
    }
}
