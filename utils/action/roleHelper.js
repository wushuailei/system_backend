const DB = require('../database/connectDatabase')
const $roleSql = require('../../db/sql/roleSql');
const $userSql = require("../../db/sql/userSql");
const logHelper = require("../logHelper");
const utils = require("../utils");
const client = require('../../db/redis/redisConfig');
const JwtUtil = require('../../utils/jwt');
const moment = require('moment');

const roleHelper = {
    getRole: async (req, res, next) => {
        try {
            const queryRoleRes = await DB.query($roleSql.queryRoleSql());
            return res.send({ status: 200, msg: '获取角色列表成功', data: queryRoleRes });
        } catch (err) {
            logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')} 获取角色列表失败, 错误：${err}`, false);
            return res.send({ status: 400, msg: '获取角色列表失败', msgInfo: err.message });
        }
    },
    getRoleUserOrOtherUserList: async (req, res, next) => {
        try {
            const rules = ['roleId'];
            if (utils.checkParams(rules, req.query, res)) {
                const queryUserList = await DB.query($userSql.userListSql());
                const queryRoleList = await DB.query($roleSql.roleUserList(req.query.roleId));
                const nUserList = queryUserList.map((uItem) => {
                    uItem.key = uItem.id.toString();
                    uItem.title = uItem.username;
                    return uItem;
                });
                const nRoleUserList = queryRoleList.map((rItem) => rItem.id.toString());
                return res.send({ status: 200, msg: '获取用户列表成功', data: { otherUserList: nUserList, roleUserList: nRoleUserList } });
            }
        } catch (err) {
            logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')} 获取用户列表失败, 错误：${err.message}`, false);
            return res.send({ status: 400, msg: '获取用户列表失败', msgInfo: err.message })
        }
    },
    addRole: async (req, res, next) => {
        try {
            const rules = ['roleName', 'roleCode'];
            if (utils.checkParams(rules, req.body, res)) {
                const addRoleRes = await DB.query($roleSql.addRoleSql(req.body));
                return res.send({ status: 200, msg: '新增角色成功', data: addRoleRes });
            }
        } catch (err) {
            logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')} 新增角色失败, 错误：${err}`, false);
            return res.send({ status: 400, msg: '新增角色失败', msgInfo: err.message });
        }
    },
    updateRoleUser: async (req, res, next) => {
        try {
            const rules = ['removeList', 'insertList'];
            if (utils.checkParams(rules, req.body, res)) {
                const { removeList, insertList } = req.body;
                if (insertList.length > 0) {
                    await DB.affairAdd(insertList, 'user_or_role');
                }
                if (removeList.length > 0) {
                    await DB.affairDelete(removeList, 'user_or_role');
                }
                return res.send({ status: 200, msg: '修改角色所属用户成功' })
            }
        } catch (err) {
            logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')} 修改角色所属用户失败, 错误：${err}`, false);
            return res.send({ status: 400, msg: '修改角色所属用户失败', msgInfo: err.message });
        }
    },
    updateRoleMenu: async (req, res, next) => {
        try {
            const rules = ['removeList', 'insertList'];
            if (utils.checkParams(rules, req.body, res)) {
                const { removeList, insertList } = req.body;
                if (insertList.length > 0) {
                    await DB.affairAdd(insertList, 'role_or_menu');
                }
                if (removeList.length > 0) {
                    await DB.affairDelete(removeList, 'role_or_menu');
                }
                return res.send({ status: 200, msg: '修改角色所属菜单成功' })
            }
        } catch (err) {
            logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')} 修改角色所属菜单失败, 错误：${err}`, false);
            return res.send({ status: 400, msg: '修改角色所属菜单失败', msgInfo: err.message });
        }
    }
}

module.exports = roleHelper;
