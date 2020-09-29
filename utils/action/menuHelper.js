const DB = require('../database/connectDatabase');
const $menuSql = require('../../db/sql/menuSql');
const logHelper = require("../logHelper");
const utils = require("../utils");
const client = require('../../db/redis/redisConfig');
const JwtUtil = require('../../utils/jwt');
const moment = require('moment');
const $RoleSql = require("../../db/sql/roleSql");

const menuHelper = {
    getMenus: async (req, res, next) => {
        try {
            const token = req.headers.authorization;
            const jwt = new JwtUtil(token);
            const result = jwt.verifyToken();
            client.get(result, async (err, userinfo) => {
                if (err) {
                    return res.send({ status: 403, msg: '登录已过期,请重新登录' })
                }
                const roleId = req.query.roleId;
                let roleMenuList = [];
                if (roleId) {
                    roleMenuList = await DB.query($RoleSql.roleMenuList(roleId));
                }
                const menusAll1 = await DB.query($menuSql.menusAll());
                const checkedKeys = [];
                const assembleMenuList = async (arr) => {
                    for (let item of arr) {
                        if (roleId) {
                            if (roleMenuList.findIndex((e) => e.id === item.id) !== -1) {
                                item.isCheck = true;
                                checkedKeys.push(item.id);
                            } else {
                                item.isCheck = false;
                            }
                        }
                        item.title = item.componentName;
                        item.key = item.id;
                        if (item.level < 3) {
                            item.children = await DB.query($menuSql.menusAll(item.level+1, item.id));
                            if (item.children.length > 0) {
                                await assembleMenuList(item.children);
                            }
                        }
                    }
                    return arr;
                }
                const menuList = await assembleMenuList(menusAll1);
                return res.send({ status: 200, msg: '获取菜单列表成功', data: { menuList, checkedKeys } });
            })
        } catch (err) {
            logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')} 获取菜单列表失败, 错误：${err}`, false);
            return res.send({ status: 400, msg: '获取菜单列表失败', msgInfo: err.message });
        }
    },
    getRoleMenus: async (req, res, next) => {
        try {
            const token = req.headers.authorization;
            const jwt = new JwtUtil(token);
            const result = jwt.verifyToken();
            client.get(result, async (err, userinfo) => {
                if (err) {
                    return res.send({ status: 403, msg: '登录已过期,请重新登录' })
                }
                const roleList = await DB.query($RoleSql.userOrRoleSql(JSON.parse(userinfo).id));
                let roleMenuList = [];
                for (let roleItem of roleList) {
                    roleMenuList = roleMenuList.concat(await DB.query($RoleSql.roleMenuList(roleItem.id)));
                }
                roleMenuList = roleMenuList.filter((item, index, array) => {
                    return array.findIndex((e) => e.id === item.id) === index && item.level === 1;
                })
                const assembleMenuList = async (arr) => {
                    for (let item of arr) {
                        item.title = item.componentName;
                        item.key = item.id;
                        if (item.level < 3) {
                            item.children = await DB.query($menuSql.menusAll(item.level+1, item.id));
                            if (item.children.length > 0) {
                                await assembleMenuList(item.children);
                            }
                        }
                    }
                    return arr;
                }
                const menuList = await assembleMenuList(roleMenuList);
                return res.send({ status: 200, msg: '获取菜单列表成功', data: menuList });
            })
        } catch (err) {
            logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')} 获取菜单列表失败, 错误：${err}`, false);
            return res.send({ status: 400, msg: '获取菜单列表失败', msgInfo: err.message });
        }
    },
    addMenu: async (req, res, next) => {
        try {
            const rules = ['keepalive', 'hidden', 'component', 'resCoding', 'componentName', 'level', 'sortNo', 'componentUrl'];
            if (utils.checkParams(rules, req.body, res)) {
                const addMenuRes = await DB.query($menuSql.addMenuSql(req.body));
                res.send({ status: 200, msg: '新增菜单成功' });
            }
        } catch (err) {
            logHelper.pushLog(`${moment().format('YYYY-MM-DD HH:mm:ss')} 添加菜单失败, 错误：${err}`, false);
            return res.send({ status: 400, msg: '添加菜单失败', msgInfo: err.message });
        }
    }
}

module.exports = menuHelper;
