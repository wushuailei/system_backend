const DB = require('../database/connectDatabase');
const $userSql = require('../../db/sql/userSql');
const moment = require('moment');
const logHelper = require('../logHelper');
const utils = require("../utils");
const Encryption = require('../encryption');
const client = require('../../db/redis/redisConfig');

const userHelper = {
    getUserinfo: async (req, res, next) => {
        try {
            if (!req.query.username) return res.send({ status: 400, msg: '查询失败' })
            const { username } = req.query
            const queryUserRes = await DB.query($userSql.userinfoSql(username));
            if (queryUserRes[0]) {
                return res.send({ status: 200, data: queryUserRes[0], msg: '请求成功' })
            }
            return res.send({ status: 400, msg: '没有该用户' })
        } catch (err) {
            logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')} 获取用户信息失败, 错误：${err.message}`, false);
            return res.send({ status: 400, msg: '获取用户信息失败', msgInfo: err.message })
        }
    },
    getUserList: async (req, res, next) => {
        try {
            const queryUserList = await DB.query($userSql.userListSql());
            return res.send({ status: 200, msg: '获取用户列表成功', data: queryUserList });
        } catch (err) {
            logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')} 获取用户列表失败, 错误：${err.message}`, false);
            return res.send({ status: 400, msg: '获取用户列表失败', msgInfo: err.message })
        }
    },
    updateUserinfo: async (req, res, next) => {
        try {
            const rules = ['id', 'username'];
            if (utils.checkParams(rules, req.body, res)) {
                const updateUserRes = await DB.query($userSql.updateUserinfo(req.body));
                return res.send({ status: 200, msg: '修改用户信息成功', data: updateUserRes });
            }
        } catch (err) {
            logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')} 更新用户信息失败, 错误：${err.message}`, false);
            return res.send({ status: 400, msg: '更新用户信息失败', msgInfo: err.message })
        }
    },
    addUser: async (req, res, next) => {
        try {
            const rules = ['username'];
            if (utils.checkParams(rules, req.body, res)) {
                const body = { ...req.body };
                body.password = Encryption.encryptionMd5(Encryption.encryptionMd5('QWERqwer1234'));
                const checkUserRes = await DB.query($userSql.checkIsUserSql(body.username));
                if (checkUserRes[0] !== undefined) return res.send({ status: 400, msg: '用户名已存在' });
                const insertUserRes = DB.query($userSql.createdUserinfoSql(body));
                return res.send({ status: 200, msg: '账号创建成功' });
            }
        } catch (err) {
            logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')} 新增用户失败, 错误：${err.message}`, false);
            return res.send({ status: 400, msg: '新增用户失败', msgInfo: err.message })
        }
    },
     deleteUser: async (req, res, next) => {
        try {
            const rules = ['id', 'username'];
            if (utils.checkParams(rules, req.query, res)) {
                const { id, username } = req.query;
                const deleteUserRes = await DB.query($userSql.deleteUser(id));
                client.expire(username, 0);
                return res.send({ status: 200, msg: '删除用户成功' });
            }
        } catch (err) {
            logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')} 删除用户失败, 错误：${err.message}`, false);
            return res.send({ status: 400, msg: '删除用户失败', msgInfo: err.message })
        }
    }
}

module.exports = userHelper;
