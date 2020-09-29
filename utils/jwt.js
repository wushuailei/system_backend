// 引入模块依赖
const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')

// 创建 token 类
class Jwt {
    data = null

    // 构造函数
    constructor(data) {
        this.data = data
    }

    // 生成token
    generateToken() {
        let data = this.data
        let created = Math.floor(Date.now() / 1000)
        // 私钥
        let cert = fs.readFileSync(path.join(__dirname, './openssl/rsa_private_key.pem'))
        // 生成token
        let token = jwt.sign({
            data,
            exp: created + 60 * 30,
        }, cert, { algorithm: 'RS256' });
        return token
    }

    // 校验token
    verifyToken() {
        let token = this.data
        // 公钥
        let cert = fs.readFileSync(path.join(__dirname, './openssl/rsa_public_key.pem'));
        // console.log(jwt.decode(token, cert, { algorithms: ['RS256'] }));
        let res;
        try {
            let result = jwt.verify(token, cert, ) || {};
            let { exp = 0 } = result, current = Math.floor(Date.now() / 1000);
            if (current <= exp) {
                res = result.data || {};
            }
        } catch (e) {
            res = 'err';
        }
        return res;
    }
}

module.exports = Jwt
