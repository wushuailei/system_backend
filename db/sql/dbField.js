const dbField = {
    // 用户信息
    userinfo: [
        'username',
        'password',
        'name',
        'tel',
        'email',
        'address',
        'portrait'
    ],
    // 角色
    roles: [
        'roleName',
        'roleCode',
        'remarks'
    ],
    // 菜单
    menus: [
        'keepalive',
        'hidden',
        'icon',
        'component',
        'componentName',
        'redirect',
        'level',
        'sortNo',
        'componentUrl',
        'componentParentId'
    ],
    // 角色or菜单
    role_or_menu: [
        'roleId',
        'menuId'
    ],
    // 用户or角色
    user_or_role: [
        'userId',
        'roleId'
    ]
}

module.exports = dbField;
