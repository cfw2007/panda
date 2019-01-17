/**
 * 全局配置数据
 * 简博言 2019-01-12
 * TODO 1.初始化入口脚本
 * **/
window.ConfigData = {
    top_y : 100
}
/** 全局数据 */
window.GameData = {
    AD_area              : new Array(),
    children_list        : new Map(),
    is_collision         : false,
    is_bug_collision     : false,
    is_start             : true,
    start_bug_point      : -1,
    start_point          : -1,
    Collision_worm_start : -1,
    Collision_start      : -1,
    panda_start_y        : -1,
    panda_end_y          : -1,
}
/** 接口地址 */
window.ApiUrl = {
    getAdUrl : "http://gdscfz.3000.com/?r=api&m=game&ac=getNotice&v=1.0.0",
}