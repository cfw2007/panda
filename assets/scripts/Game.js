/**
 * 游戏主界面
 * 简博言 2019-01-14
 * TODO 1.游戏控件基础功能处理
 * **/
let CreateUi_AD = require('./UI/CreateUI_AD');
let CreateUi_Panda = require('./UI/CreateUI_Panda');
cc.Class({
    extends: cc.Component,

    properties: {
        ADViewNode          : cc.Node,//广告试图
        PanelViewNode       : cc.Node,//游戏显示层
        PandaNode           : cc.Node,
        TouchViewNode       : cc.Node,//触控层
        BackdropViewNode    : cc.Node,//背景层
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        let self = this;
        CreateUi_AD.initAD(self.ADViewNode);//初始化背景数据
        CreateUi_Panda.initCreateUiPanda(self.TouchViewNode,self.PandaNode);

        Prop.initProp();
        Prop.initNode();
        self.schedule(function () {
            Bug.createBug();
        },1);
        self.schedule(function () {
           Prop.createProp();
        },1)
    },


    // update (dt) {},
});
