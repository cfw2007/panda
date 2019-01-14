/**
 * 初始化广告背景数据
 * 简博言 2019-01-12
 * TODO 1.初始化入口脚本
 * **/
let AdModel = require('../module/AdModel');
var CreateUI_AD = {
    initAD :function (Node) {
        if(GameData.AD_area.length < 1){
            console.log(111);
            CreateUI_AD.getAdInfo();
            return false;
        }
        let backdrop = Node.getComponent(cc.Sprite);
            backdrop.spriteFrame = GameData.AD_area.url;
    },
    getAdInfo : function () {
        console.log(ApiUrl.getAdUrl);
        let res_data = Http.Get(ApiUrl.getAdUrl);
        //同步处理请求回来的数据
        res_data.then(function (res) {
            //同步处理返回信息
        })
    }

}

module.exports = CreateUI_AD;