const fs = require('fs');
const moment = require('moment');

const curDate = moment().format('YYYY-MM-DD');
const logFileName = curDate + '-ds.log'

exports.pushLog = (logText, flag = true) => {
    try {
        fs.appendFileSync(flag ? `./log/normal/${logFileName}` : `./log/err/${logFileName}`, logText + '\n');
    } catch (err) {
        console.log(`写入日志失败, 错误：${err}`)
        fs.appendFileSync(`./log/err/${logFileName}`, err.message + '\n');
    }
}