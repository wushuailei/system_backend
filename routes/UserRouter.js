const express = require('express');
const router = express.Router();
const loginHelper = require('../utils/action/loginHelper');
const userHelper = require('../utils/action/userHelper');

// 注册
router.post('/register', (req, res, next) => {
    loginHelper.register(req, res, next);
})

// 登录
router.post('/signIn', (req, res, next) => {
    loginHelper.signIn(req, res, next);
})

// 退出登录
// router.post('/signIn', (req, res, next) => {
    // loginHelper.logOut(req, res, next).then();
// })

// 获取用户信息
router.get('/userinfo', (req, res, next) => {
    userHelper.getUserinfo(req, res, next);
})
// 更新用户信息
router.post('/updateUserinfo', (req, res, next) => {
    userHelper.updateUserinfo(req, res, next);
})
// 新增用户
router.post('/addUser', (req, res, next) => {
    userHelper.addUser(req, res, next);
})
// 删除用户
router.get('/deleteUser', (req, res, next) => {
    userHelper.deleteUser(req, res, next);
})

// 获取用户列表
router.get('/userList', (req, res, next) => {
    userHelper.getUserList(req, res, next);
})

module.exports = router
