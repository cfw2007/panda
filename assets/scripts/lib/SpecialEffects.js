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
        for (let index in child_list) {
            let child_info = child_list[index].children;
            for (let key in child_info) {
                GameData.children_list.set(index_num,child_info[key]);
                index_num ++;
            }
        }
        console.log(GameData.children_list);
        let startPoint = 0;
        Node.on(cc.Node.EventType.TOUCH_START,function (touch,event) {
            let touchPoint = touch.getLocation();		//局部变量在函数执行完毕后，立即销毁
            Node_2.y = touchPoint.y - 640 ;
            startPoint = touchPoint.x;
        });
        Node.on(cc.Node.EventType.TOUCH_MOVE,function (touch,event) {
            let touchPoint = touch.getLocation();		//局部变量在函数执行完毕后，立即销毁
                Node_2.y = touchPoint.y - 640 ; 		//设置fireFox精灵的位置为触摸拖动的位置
                let jump_value = Math.abs((touchPoint.x - startPoint));
                if(jump_value > 250){
                    startPoint = touchPoint.x;
                    if (panda_node_num >= 8){
                        add_status = false;
                    }else if(panda_node_num <= 1){
                        add_status = true;
                    }
                    add_status ? panda_node_num++ : panda_node_num--;
                    console.log(panda_node_num);
                    Node_2.parent = GameData.children_list.get(panda_node_num);
                }
        });
    }
};

module.exports = SpecialEffects;