/**
 * 游戏主界面
 * 简博言 2019-01-14
 * TODO 1.游戏控件基础功能处理
 * **/
let self = this;
let CreateUi_AD = require('./UI/CreateUI_AD');
cc.Class({
    extends: cc.Component,

    properties: {
        ADViewNode          : cc.Node,//广告试图
        PanelViewNode       : cc.Node,//游戏显示层
        TouchViewNode       : cc.Node,//触控层
        BackdroupViewNode   : cc.Node,//背景层
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        CreateUi_AD.initAD(self.ADViewNode);//初始化背景数据
    },


    // update (dt) {},
});
