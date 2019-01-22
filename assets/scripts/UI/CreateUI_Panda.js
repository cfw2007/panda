/**
 * 初始化广告背景数据
 * 简博言 2019-01-12
 * TODO 1.初始化入口脚本
 * **/
let SpecialEffects = require('../lib/SpecialEffects');
let CreateUI_Panda = {
    initCreateUiPanda : function (Node,PandaNode) {
        SpecialEffects.TouchMove(Node,PandaNode);
    }
};

module.exports = CreateUI_Panda;