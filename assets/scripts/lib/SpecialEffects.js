/**
 * 特效集合
 * 简博言 2019-01-14
 * TODO 1。控件点击移动特效
 * TODO 2。控件漂移特效
 * **/

let SpecialEffects = {
    TouchMove : function (Node,Node_2) {//移动事件
        Node.on(cc.Node.EventType.TOUCH_START,function (touch,event) {
            let touchPoint = touch.getLocation();		//局部变量在函数执行完毕后，立即销毁
            Node_2.y = touchPoint.y - 640 ;
        });
        Node.on(cc.Node.EventType.TOUCH_MOVE,function (touch,event) {
            let touchPoint = touch.getLocation();		//局部变量在函数执行完毕后，立即销毁
                Node_2.y = touchPoint.y - 640 ; 		//设置fireFox精灵的位置为触摸拖动的位置

        });
    }
};

module.exports = SpecialEffects;