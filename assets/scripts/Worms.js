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
    onCollisionEnter: function (other, worm) {
        console.log('on collision enter',worm);
        // 碰撞系统会计算出碰撞组件在世界坐标系下的相关的值，并放到 world 这个属性里面
        let world = worm.world;
        // 碰撞组件的 aabb 碰撞框
        let aabb = world.aabb;
        try {
            GameData.Collision_worm_start = aabb.Rect.y;
        }catch (e) {
            GameData.Collision_worm_start = aabb.y;
        }

        // // 节点碰撞前上一帧 aabb 碰撞框的位置
        // var preAabb = world.preAabb;
        //
        // // 碰撞框的世界矩阵
        // var t = world.transform;
        //
        // // 以下属性为圆形碰撞组件特有属性
        // var r = world.radius;
        // var p = world.position;
        //
        // // 以下属性为 矩形 和 多边形 碰撞组件特有属性
        // var ps = world.points;
    },
    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionStay: function (panda, worm) {
        console.log(GameData.panda_end_y,GameData.panda_start_y,GameData.start_point);
        let state = GameData.panda_end_y == GameData.panda_start_y || GameData.panda_start_y == 0;
        if( state ){
            panda.node.stopAllActions();
            panda.node.active = false;
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
