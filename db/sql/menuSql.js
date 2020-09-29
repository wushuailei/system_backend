const moment = require('moment');

const menuSql = {
    // ==================================================================
    // 菜单SQL
    /**
     * @function roleMenuList 获取相应等级菜单
     * @param { Number } level 菜单等级
     * @param { Number } componentParentId 父级菜单ID
     * @returns { String } sql
     */
    menusAll(level= 1, componentParentId= 0) {
        return `SELECT * FROM menus 
        WHERE level = ${level} and componentParentId = ${componentParentId} 
        ORDER BY sortNo`
    },
    /**
     * @function addMenuSql 添加菜单
     * @param { Object } params 参数
     * @returns { String } sql
     */
    addMenuSql(params) {
        // 'keepalive', 'hidden', 'icon', 'component', 'componentName', 'level', 'sortNo', 'componentUrl'
        const componentParentId = params.componentParentId || 0;
        const redirect = params.redirect || '';
        return `INSERT INTO menus (resCoding, keepalive, hidden, icon, component, componentName, level, sortNo, componentUrl, componentParentId, redirect, createdTime, updatedTime) 
        VALUES ('${params.resCoding}', '${params.keepalive}', '${params.hidden}', '${params.icon}', '${params.component}', '${params.componentName}', '${params.level}', '${params.sortNo}', '${params.componentUrl}', '${componentParentId}', '${redirect}', '${moment().format('YYYY-MM-DD HH:mm:ss')}', '${moment().format('YYYY-MM-DD HH:mm:ss')}')`
    },
}

module.exports = menuSql;
