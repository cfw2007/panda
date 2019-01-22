/**
 * 全局配置数据
 * 简博言 2019-01-12
 * TODO 1.初始化入口脚本
 * **/
window.ConfigData = {
    top_y : 100,
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
    panda_history        : null,
    panda_new            : null,
    panda_state          : false,
    status               : true,
    is_stop              : true,
}
window.GameInfo = {
    time         : 200,
    new_score    : 0,
    history_score: 0 ,
    ScoreLabel   : null,
}
/** 接口地址 */
window.ApiUrl = {
    getAdUrl : "http://gdscfz.3000.com/?r=api&m=game&ac=getNotice&v=1.0.0",
}