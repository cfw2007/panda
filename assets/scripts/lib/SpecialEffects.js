/**
 * 特效集合
 * 简博言 2019-01-14
 * TODO 1。控件点击移动特效
 * TODO 2。控件漂移特效
 * **/

let SpecialEffects = {
    TouchMove : function (Node,Node_2) {//移动事件
        let panel = Node_2.parent.parent.parent;
        let child_list = panel.children;
        let index_num = 1;
        let panda_node_num = 2;
        let add_status = true;
        let startPoint = 0;
        let touch_point = 20 ;
        //初始化碰撞系统
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
        //循环获取资源
        for (let index in child_list) {
            let child_info = child_list[index].children;
            for (let key in child_info) {
                GameData.children_list.set(index_num,child_info[key]);
                index_num ++;
            }
        }
        Node.on(cc.Node.EventType.TOUCH_START,function (touch,event) {
            let touchPoint = touch.getLocation();		//局部变量在函数执行完毕后，立即销毁
            startPoint = touchPoint.x;
            GameData.start_point = GameData.is_start ? 1280 : touchPoint.y ;
            GameData.is_start = false;
            GameData.panda_end_y = touchPoint.y;
        });
        //console.log(touch_point == startPoint || touch_point == startPoint+20 || touch_point == startPoint-20)
        //如果点击结束位置和开始位置相同
        if(touch_point == startPoint || touch_point == startPoint+20 || touch_point == startPoint-20){
            Node.on(cc.Node.EventType.TOUCH_MOVE,function (touch,event) {
                let touchPoint = touch.getLocation();		//局部变量在函数执行完毕后，立即销毁
                let jump_value = Math.abs((touchPoint.x - startPoint));
                let jump_state = (touchPoint.x - startPoint) ;
                setTimeout(function () {
                    GameData.start_point = touchPoint.y
                },500);
                GameData.panda_end_y = touchPoint.y;
                if((touchPoint.y - 640) > 540){
                    Node_2.y = (touchPoint.y - 640) > 540 ? 540 : (touchPoint.y - 640);
                }else if((touchPoint.y - 640) > -540  ){
                    Node_2.y = (touchPoint.y - 640) < -540 ? -540 : (touchPoint.y - 640);
                } 		//设置fireFox精灵的位置为触摸拖动的位置
                if(jump_value > 180){
                    startPoint = touchPoint.x;
                    if (panda_node_num >= 8 || jump_state < 0){
                        add_status = false;
                    }else if(panda_node_num <= 1 || jump_state > 0){
                        add_status = true;
                    }
                    GameData.start_point = touchPoint.y;
                    GameData.panda_end_y = touchPoint.y;
                    add_status ? panda_node_num++ : panda_node_num--;
                    panda_node_num = panda_node_num <= 0 ? 1 : panda_node_num;
                    Node_2.parent = GameData.children_list.get(panda_node_num);
                }
            });
            Node.on(cc.Node.EventType.TOUCH_END,function (touch,event) {
                    GameData.panda_start_y = 0;
                    GameData.panda_end_y = 0;
                    GameData.start_point = 0;
            });
        }



    }
};

module.exports = SpecialEffects;