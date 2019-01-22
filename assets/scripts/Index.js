/**
 * 通用入口脚本
 * 简博言 2019-01-12
 * TODO 1.初始化入口脚本
 * **/
cc.Class({
    extends: cc.Component,

    properties: {
        LoadLabelNode   : cc.Node,//加载动态显示框
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        let self = this;
        self.initIndex(self);
    },
    initIndex(self){

    },

    // update (dt) {},
});
