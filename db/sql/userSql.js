const moment = require('moment');

const userSql = {
    // ==================================================================
    // 用户相关SQL
    /**
     * @function queryUserSql 查询用户账号密码是否正确
     * @param { String } username 用户名
     * @param { String } password 用户密码
     * @returns { String } sql
     */
    queryUserSql(username, password) {
        return `SELECT ui.id, ui.username, ui.name, ui.tel, ui.address, ui.email, ui.portrait 
        FROM userinfo ui 
        WHERE ui.username = '${username}' and ui.password = '${password}' and ui.isDelete != 1`
    },
    /**
     * @function checkIsUserSql 查询用户账号是否存在
     * @param { String } username 用户名
     * @returns { String } sql
     */
    checkIsUserSql(username) {
        return `SELECT * FROM userinfo
        WHERE username = '${username}' and isDelete != 1`
    },
    /**
     * @function createdUserSql 创建账号
     * @param { String } username 用户名
     * @param { String } password 用户密码
     * @returns { String } sql
     */
    createdUserSql(username, password) {
        return `INSERT INTO user (username, password, createdTime, updatedTime, isDelete) 
        VALUES ('${username}', '${password}', '${moment().format('YYYY-MM-DD HH:mm:ss')}', '${moment().format('YYYY-MM-DD HH:mm:ss')}', 0)`
    },
    /**
     * @function createdUserinfoSql 创建账号信息
     // * @param { String } username 用户名
     // * @param { String } name 昵称
     * @param { Object } option 其他字段
     * @returns { String } sql
     */
    createdUserinfoSql(option) {
        let username = option.username || '';
        let name = option.name || '';
        let password = option.password || '';
        let tel = option.tel || '';
        let address = option.address || '';
        let portrait = option.portrait || '';
        return `INSERT INTO userinfo (username, name, password, email, tel, address, portrait, createdTime, updatedTime, isDelete) 
        VALUES ('${username}', '${name}', '${password}', '${username}', '${tel}', '${address}', '${portrait}', '${moment().format('YYYY-MM-DD HH:mm:ss')}', '${moment().format('YYYY-MM-DD HH:mm:ss')}', 0)`
    },
    /**
     * @function userinfoSql 查询用户账号信息
     * @param { String } username 用户名
     * @returns { String } sql
     */
    userinfoSql(username) {
        return `SELECT u.id, u.username, u.name, u.tel, u.email, u.address, u.portrait, u.createdTime createdTime 
        FROM userinfo u
        WHERE username = '${username}' and isDelete != 1`
    },
    /**
     * @function updateUserinfo 更新用户信息
     * @param { Object } params 参数
     * @returns { String } sql
     */
    updateUserinfo(params) {
        const name = params.name || '';
        const tel = params.tel || '';
        const email = params.email || '';
        const address = params.address || '';
        const portrait = params.portrait || '';
        const password = params.password ? `password = '${params.password}', ` : '';
        return `UPDATE userinfo SET 
        ${password}name = '${name}', tel = '${tel}', email = '${email}', address = '${address}', portrait = '${portrait}', updatedTime = '${moment().format('YYYY-MM-DD hh:ss')}' 
        WHERE username = '${params.username}'`
    },
    /**
     * @function userListSql 获取用户列表
     * @returns { String } sql
     */
    userListSql() {
        return `SELECT u.id, u.username, u.name, u.tel, u.email, u.address, u.portrait, u.createdTime 
        FROM userinfo u
        WHERE isDelete != 1`
    },
    /**
     * @function addUser 新增用户
     * @param { String } username 用户名
     * @returns { String } sql
     */
    addUser(username) {
        return `SELECT id, username, name, tel, email, address, portrait, createdTime 
        FROM userinfo
        WHERE id in (SELECT userId FROM user_or_role WHERE roleId = ${username})`
    },
    /**
     * @function deleteUser 新增用户名
     * @param { Number } id 用户ID
     * @returns { String } sql
     */
    deleteUser(id) {
        return `DELETE FROM userinfo
        WHERE id = ${id}`;
    },
}

module.exports = userSql;
