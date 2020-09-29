const DB = require('../database/connectDatabase');
const $userSql = require('../../db/sql/userSql');
const JwtUtil = require('../jwt');
const client = require('../../db/redis/redisConfig');
const constant = require('../constant');
const logHelper = require('../logHelper');
const $roleSql = require("../../db/sql/roleSql");
const utils = require("../utils");
const moment = require('moment');

const loginHelper = {
    register: async (req, res, next) => {
        try {
            const rules = ['username', 'password'];
            if (utils.checkParams(rules, req.body, res)) {
                const { username, password } = req.body;
                if (password.length < 6) return res.send({ status: 400, msg: '请输入6位密码' })
                const checkRes = await DB.query($userSql.checkIsUserSql(username));
                if (checkRes[0] !== undefined) return res.send({ status: 400, msg: '用户名已存在' });
                const insertRes = DB.query($userSql.createdUserinfoSql(req.body));
                return res.send({ status: 200, msg: '账号创建成功' });
            }
        } catch (err) {
            logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')} 注册失败, 错误：${err}`, false);
            return res.send({ status: 400, msg: '注册失败', msgInfo: err.message })
        }
    },
    signIn: async (req, res, next) => {
        try {
            const rules = ['username', 'password'];
            if (utils.checkParams(rules, req.body, res)) {
                const { username, password } = req.body;
                const checkRes = await DB.query($userSql.queryUserSql(username, password));
                if (checkRes[0] === undefined) return res.send({ status: 400, msg: '账号密码错误' });
                const queryRoleRes = await DB.query($roleSql.userOrRoleSql(checkRes[0].id));
                if (queryRoleRes.length <= 0 && checkRes[0].username !== 'wushuailei@126.com') {
                    return res.send({ status: 403, msg: '该用户没有角色，请联系管理员' });
                }
                // 登陆成功，添加token验证
                checkRes[0].roles = queryRoleRes;
                client.set(username, JSON.stringify(checkRes[0]), (err, res) => {
                    client.expire(username, constant.REDIS_TIMEOUT);
                });
                // 将用户id传入并生成token
                const jwt = new JwtUtil(username);
                const token = jwt.generateToken();
                // 将 token 返回给客户端
                res.send({ status: 200, msg: '登陆成功', token: token, data: checkRes[0] });
            }
        } catch (err) {
            logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')} 登陆失败, 错误：${err.message}`, false);
            return res.send({ status: 400, msg: '登陆失败', msgInfo: err.message })
        }
    }
}

module.exports = loginHelper;
