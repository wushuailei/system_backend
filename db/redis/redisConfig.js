const redis = require('redis');
const redisConfig = {
    port: 6379,
    host: '49.233.80.89',
}
const client = redis.createClient(redisConfig.port, redisConfig.host, redisConfig.pass);
client.auth(1234);
module.exports = client;