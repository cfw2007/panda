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
            GameData.panda_state = false;
            setInterval(function(){
                if(GameData.panda_state){
                    GameData.status = true;
                }
            },500);
        }
        Node.on(cc.Node.EventType.TOUCH_START,function (touch,event) {
            let touchPoint = touch.getLocation();		//局部变量在函数执行完毕后，立即销毁
            GameData.panda_new = touchPoint;
        });
        let touch_state = false;
       //如果点击结束位置和开始位置相同
        Node.on(cc.Node.EventType.TOUCH_MOVE,function (touch,event) {
            let touchPoint = touch.getLocation();
            if( !touch_state ){
                touch_state = true;
                setTimeout(function () {
                    // //console.log(new Date());
                    touch_state = false;
                    GameData.is_stop =  true ;
                    },2000);
            }
            GameData.is_stop = false;
            GameData.panda_history = GameData.panda_new;
            GameData.panda_new = touchPoint;
                // if(GameData.panda_new != null && touchPoint.y != history_point.y){
                //     GameData.panda_history = history_point;
                // }
                // GameData.panda_new = touchPoint;
                // GameData.status = false;
                	//局部变量在函数执行完毕后，立即销毁
                let jump_value = Math.abs((touchPoint.x - startPoint));
                let jump_state = (touchPoint.x - startPoint) ;
                // if( !touch_state ){
                //     touch_state = true;
                //     setTimeout(function () {
                //         touch_state = false;
                //         GameData.status = true;
                //         GameData.start_point = touchPoint.y;
                //         GameData.panda_end_y = touchPoint.y;
                //     },1000);
                // }
                //
                // GameData.panda_end_y = touchPoint.y;
                if(GameData.panda_new != null ){
                    let panda_y = GameData.panda_history != null ? GameData.panda_history.y : 0 ;
                    Node_2.y += (touchPoint.y - panda_y);
                }	//设置fireFox精灵的位置为触摸拖动的位置
                if(jump_value > 100){
                    startPoint = touchPoint.x;
                    if (panda_node_num >= 8 || jump_state < 0){
                        add_status = false;
                    }else if(panda_node_num <= 1 || jump_state > 0){
                        add_status = true;
                    }
                    add_status ? panda_node_num++ : panda_node_num--;
                    panda_node_num = panda_node_num <= 0 ? 1 : panda_node_num;
                    Node_2.parent = GameData.children_list.get(panda_node_num);
                }
        });
        Node.on(cc.Node.EventType.TOUCH_END,function (touch,event) {
            GameData.is_stop = true;
        });
    },
    /***
     * 修改游戏显示数值
     * */
    changeGameScore:function () {
        let label = GameInfo.ScoreLabel;
        label.string = GameInfo.new_score;
    }
};

module.exports = SpecialEffects;