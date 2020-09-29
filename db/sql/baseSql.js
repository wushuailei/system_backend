const moment = require('moment');
const dbField = require('./dbField');

const baseSql = {
    /**
     * @function addSql 增加
     * @param { Object } option 参数
     * @param { String } tableName 表名
     * @returns { String } sql
     */
    addSql(option, tableName) {
        let keyStr = '';
        let valStr = '';
        for (const key of dbField[tableName]) {
            if (option[key]) {
                keyStr += `${key},`
                valStr += `'${option[key]}',`
            }
        }
        if (tableName === 'userinfo') {
            keyStr += `isDelete,`
            valStr += `0,`
        } else if (tableName !== 'role_or_menu' && tableName !== 'user_or_role') {
            keyStr += `createdTime,updatedTime,`
            valStr += `'${moment().format('YYYY-MM-DD HH:mm:ss')}','${moment().format('YYYY-MM-DD HH:mm:ss')}',`
        }
        keyStr = keyStr.substr(0, keyStr.length - 1);
        valStr = valStr.substr(0, valStr.length - 1);
        return `INSERT INTO ${tableName} (${keyStr}) VALUES (${valStr})`;
    },
    /**
     * @function deleteSql 删除
     * @param { Object } option 删除条件
     * @param { String } tableName 表名
     * @returns { String } sql
     */
    deleteSql(option,tableName) {
        let whereStr = '';
        for (const key in option) {
            if (option.hasOwnProperty(key)) {
                whereStr += `${key} = ${option[key]} and `
            }
        }
        whereStr = whereStr.substr(0, whereStr.length - 5);
        return `DELETE FROM ${tableName} WHERE ${whereStr}`;
    },
    /**
     * @function deleteSql 修改
     * @param { Object } option 参数
     * @param { String } tableName 表名
     * @returns { String } sql
     */
    updateSql(option,tableName) {
        return ``;
    }
}

module.exports = baseSql;
