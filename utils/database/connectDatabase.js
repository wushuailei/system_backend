const mysql = require('mysql')
const config = require('../../db/sql/sqlConfig')
const pool = mysql.createPool(config)
const logHelper = require('../logHelper');
const baseSql = require('../../db/sql/baseSql');

module.exports = {
    /**
     * @function query 连接数据库
     * @param { String } sql sql语句
     * @param { Array | null } values 查询语句中对应的参数，可以为null
     */
    query: (sql, values = null) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, cn) => {
                if (err) {
                    reject(err);
                } else {
                    if (values) {
                        cn.query(sql, values, (dataErr, data) => {
                            if (dataErr) {
                                reject(dataErr);
                            } else {
                                resolve(data);
                            }

                            cn.release();
                        })
                    } else {
                        cn.query(sql, (dataErr, data) => {
                            if (dataErr) {
                                reject(dataErr);
                            } else {
                                resolve(data);
                            }

                            cn.release();
                        })
                    }
                }
            })
        })
    },
    /**
     * @function affairAdd 数据库新增事务
     * @param { Array<Object> } arr 新增的数据
     * @param { String } tableName 表名
     * @param { Object | null } option 可选参数
     */
    affairAdd: (arr, tableName, option = null) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((connectStartErr, cn) => {
                if (connectStartErr) {
                    reject(connectStartErr);
                } else {
                    cn.beginTransaction((affairStartErr) => {
                        if (affairStartErr) {
                            reject(affairStartErr);
                        } else {
                            for (const item of arr) {
                                if (item === null) continue;
                                let params = { ...item };
                                if (option) {
                                    for (const optionKey in option) {
                                        params[optionKey] = option[optionKey]
                                    }
                                }
                                cn.query(baseSql.addSql(params, tableName), item, (err, data) => {
                                    if (err) {
                                        cn.rollback(() => { if(err){ reject(err) } });
                                    }
                                })
                            }
                            cn.commit((commitErr) => {
                                if (commitErr) {
                                    cn.rollback(() => { if(commitErr){ reject(commitErr) } });
                                    reject(commitErr);
                                } else {
                                    resolve(true);
                                    cn.release();
                                }
                            })
                        }
                    })
                }
            })
        })
    },
    /**
     * @function affairDelete 数据库删除事务
     * @param { Array<number | string | null> } arr 新增的数据
     * @param { String } tableName 表名
     */
    affairDelete: (arr, tableName) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((connectStartErr, cn) => {
                if (connectStartErr) {
                    reject(connectStartErr);
                } else {
                    cn.beginTransaction((affairStartErr) => {
                        if (affairStartErr) {
                            reject(affairStartErr);
                        } else {
                            for (const item of arr) {
                                if (item === null) continue;
                                cn.query(baseSql.deleteSql(item, tableName), (err, data) => {
                                    if (err) {
                                        cn.rollback(() => { if(err){ reject(err) } });
                                    }
                                })
                            }
                            cn.commit((commitErr) => {
                                if (commitErr) {
                                    cn.rollback(() => { if(commitErr){ reject(commitErr) } });
                                    reject(commitErr);
                                } else {
                                    resolve(true);
                                    cn.release();
                                }
                            })
                        }
                    })
                }
            })
        })
    },
}
