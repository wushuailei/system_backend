const logHelper = require("./logHelper");


module.exports = {
    /**
     * @name checkParams 校验参数
     * @param { Array } rules 校验规则
     * @param { Object } params 参数
     * @param res 响应
     */
    checkParams(rules, params, res) {
        const result = [];
        for (const rule of rules) {
            if (params[rule] === undefined) {
                result.push(rule);
            }
        }
        if (result.length > 0) {
            let rStr = '';
            result.map((e) => { rStr += (e + ','); });
            logHelper.pushLog(`缺少参数, ${rStr}`, false);
            res.send({ status: 400, msg: `请传入${rStr}` });
            return false;
        } else {
            return true;
        }
    },
}
