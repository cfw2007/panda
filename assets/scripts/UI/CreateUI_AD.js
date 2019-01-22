/**
 * 初始化广告背景数据
 * 简博言 2019-01-12
 * TODO 1.初始化入口脚本
 * **/
let AdModel = require('../model/AdModel');
var CreateUI_AD = {
    initAD :function (Node) {
        if(GameData.AD_area.length < 1){
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
    },
    /**
     * 倒计时功能
     * @param number time 时间
     * @param view label 控件
     * @param view node 主控件用于倒计时隐藏
     * return
     * */
    resetTime:function(time=240,label='',node=''){
        try {
            let timer=null;
            let t=time;
            let m=0;
            let s=0;
            let autoTime = time;
            m=Math.floor(t/60%60);
            m<10&&(m='0'+m);
            s=Math.floor(t%60);
            function countDown(){
                if(node && label.node){
                    autoTime--;
                    s--;
                    s<10&&(s='0'+s);
                    if(s.length>=3){
                        s=59;
                        m="0"+(Number(m)-1);
                    }
                    if(m.length>=3){
                        m='00';
                        s='00';
                        clearInterval(timer);
                    }
                    if(s == '00' && m == '00'){
                        label.string = "00:00";
                    }else if(label){
                        label.string = m+":"+s;
                    }
                }
            }
            timer=setInterval(countDown,1000);
        }catch (e) {
            console.log(e);
        }
    },

}

module.exports = CreateUI_AD;