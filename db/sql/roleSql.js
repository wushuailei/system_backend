const moment = require('moment');

const roleSql = {
    // ==================================================================
    // 角色SQL
    /**
     * @function roleSql 获取用户相应角色
     * @param { Number } userId 用户ID
     * @returns { String } sql
     */
    userOrRoleSql(userId) {
        return `SELECT * FROM roles r 
        WHERE r.id in (SELECT roleId FROM user_or_role WHERE userId = ${userId})`
    },
    /**
     * @function roleUserList 获取角色下所有用户
     * @param { Number } rId 角色ID
     * @returns { String } sql
     */
    roleUserList(rId) {
        return `SELECT id, username, name, tel, email, address, portrait, createdTime 
        FROM userinfo
        WHERE id in (SELECT userId FROM user_or_role WHERE roleId = ${rId})`
    },
    /**
     * @function roleMenuList 获取角色下所有菜单
     * @param { Number } rId 角色ID
     * @returns { String } sql
     */
    roleMenuList(rId) {
        return `SELECT * FROM menus 
        WHERE id in (SELECT menuId FROM role_or_menu WHERE roleId = ${rId})`
    },
    /**
     * @function queryRoleSql 获取角色列表
     * @returns { String } sql
     */
    queryRoleSql() {
        return `SELECT * FROM roles`
    },
    /**
     * @function queryRoleSql 获取角色列表
     * @param { Object } params 参数
     * @returns { String } sql
     */
    addRoleSql(params) {
        const remarks = params.remarks || '';
        return `INSERT INTO roles (roleName, roleCode, remarks, createdTime, updatedTime) 
        VALUES ('${params.roleName}', '${params.roleCode}', '${params.remarks}', '${moment().format('YYYY-MM-DD HH:mm:ss')}', '${moment().format('YYYY-MM-DD HH:mm:ss')}')`
    },
}

module.exports = roleSql;
