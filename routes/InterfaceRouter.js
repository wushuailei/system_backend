const express = require('express');
const router = express.Router();
const menuHelper = require('../utils/action/menuHelper.js');
const roleHelper = require("../utils/action/roleHelper");

// 菜单列表
router.get('/menus', (req, res, next) => {
  menuHelper.getMenus(req, res, next);
})
// 角色下菜单列表
router.get('/menu/roleMenus', (req, res, next) => {
  menuHelper.getRoleMenus(req, res, next);
})
// 新增菜单
router.post('/menu/addMenu', (req, res, next) => {
  menuHelper.addMenu(req, res, next);
})

// 角色列表
router.get('/roles', (req, res, next) => {
  roleHelper.getRole(req, res, next);
})
// 获取角色用户和其他用户列表
router.get('/role/roleUserOrOtherUserList', (req, res, next) => {
  roleHelper.getRoleUserOrOtherUserList(req, res, next);
})
// 新增角色
router.post('/role/addRole', (req, res, next) => {
  roleHelper.addRole(req, res, next);
})
// 更新角色所属用户
router.post('/role/updateRoleUser', (req, res, next) => {
  roleHelper.updateRoleUser(req, res, next);
})
// 更新角色所属菜单
router.post('/role/updateRoleMenu', (req, res, next) => {
  roleHelper.updateRoleMenu(req, res, next);
})

module.exports = router;
