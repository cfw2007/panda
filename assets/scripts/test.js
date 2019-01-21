// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionEnter: function (other, self) {
        console.log('熊猫位置：',GameData.start_point);
        // 碰撞系统会计算出碰撞组件在世界坐标系下的相关的值，并放到 world 这个属性里面
        var world = self.world;
        GameData.panda_end_y = self.world.aabb.y;
    },
    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionStay: function (worm, panda) {
       let state = GameData.panda_end_y != GameData.panda_start_y;
        if(panda.world.aabb.y == GameData.start_point){
            GameData.panda_end_y = panda.world.aabb.y;
            GameData.start_point = panda.world.aabb.y;
        }
        if( GameData.start_point - GameData.panda_end_y < 0 && state){
            console.log('你死了');
            panda.node.stopAllActions();
            panda.node.active = false;
            GameData.start_point = panda.world.aabb.y;
        }else if ( GameData.start_point-GameData.panda_end_y > 0 && state){
            console.log('你作死了虫子' );
            worm.node.stopAllActions();
            worm.node.active = false;
            GameData.start_point = panda.world.aabb.y;
        }
    },
    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionExit: function (other, self) {
        console.log('on collision enter',GameData.start_point);
        GameData.is_collision = false;
    },
});
