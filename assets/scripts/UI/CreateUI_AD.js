/**
 * 初始化广告背景数据
 * 简博言 2019-01-12
 * TODO 1.初始化入口脚本
 * **/
let AdModel = require('../module/AdModel');
var CreateUI_AD = {
    initAD :function (Node) {
        if(Config.AD_area.length < 1){
            return false;
        }
        let backdroup = Node.getComponent(cc.Sprite);
            backdroup.spriteFrame = GameData.AD_area.url;
    },
    getAdInfo : function () {
        let GameData = Http.Get(UrlData.getAdUrl,'',AdModel.getAdRes);
        //同步处理请求回来的数据
        GameData.then(function (res) {
            console.log(res);
        })
    }

}

module.exports = CreateUI_AD;