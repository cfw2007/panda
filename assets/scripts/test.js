/**
 * panda碰撞脚本
 * 简博言 2019-01-21
 * TODO 判断碰撞方向
 * TODO 判断碰撞物体
 * TODO 判断碰撞结果
 *
 * */
let ScoreModel = require('./model/ScoreModel');
let SpecialEffects = require('../lib/SpecialEffects');
let self = this;
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
    onCollisionEnter: function (worm, panda) {
        // //console.log('熊猫位置：',GameData.start_point);
        // // 碰撞系统会计算出碰撞组件在世界坐标系下的相关的值，并放到 world 这个属性里面
        // var world = self.world;
        // GameData.panda_end_y = self.world.aabb.y;
        if(GameData.panda_new == null || GameData.panda_history == null ){
            //console.log('你死了');
            this.changeState(panda,false);
       }
        if(GameData.is_stop){
            //console.log('你死了');
            this.changeState(panda,false);
        }else if((GameData.panda_new.y-GameData.panda_history.y) > 0 ){
            //console.log('你死了');
            this.changeState(panda,false);
        }else if ((GameData.panda_new.y-GameData.panda_history.y) < 0 && !GameData.is_stop) {
            this.changeState(worm,false,2);
            //console.log('获得积分');
            SpecialEffects.changeGameScore();
        }

    },
    changeState :function(node,state,type = 1){
        node.node.stopAllActions();
        node.node.active = state;
        switch (type){
            case 1:
                GameInfo.history_score = GameInfo.history_score > GameInfo.new_score ? GameInfo.history_score : GameInfo.new_score ;
                break;
            case 2:
                GameInfo.new_score++;
                GameInfo.history_score = GameInfo.history_score > GameInfo.new_score ? GameInfo.history_score : GameInfo.new_score ;
                break;
        }
    },

    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionStay: function (worm, panda) {
        // var points = worm.points;
        // var normal = worm.normal;
        // //console.log(panda.points);

        // //console.log(GameData.panda_end_y-panda.world.aabb.y);
        // var vel1 = worm.getLinearVelocityFromWorldPoint(worm.points[0]);
        // var vel2 = panda.getLinearVelocityFromWorldPoint(worm.points[0]);
        // var relativeVelocity = vel1.sub(vel2);
        // //console.log(relativeVelocity)
       // let state = GameData.panda_end_y != GameData.panda_start_y;
       //  if(panda.world.aabb.y == GameData.start_point){
       //      GameData.panda_end_y = panda.world.aabb.y;
       //      GameData.start_point = panda.world.aabb.y;
       //  }
       //  if( GameData.start_point - GameData.panda_end_y < 0 && state){
       //      //console.log('你死了');
       //      panda.node.stopAllActions();
       //      panda.node.active = false;
       //      GameData.start_point = panda.world.aabb.y;
       //  }else if ( GameData.start_point - GameData.panda_end_y > 0 && state){
       //      //console.log('你作死了虫子' );
       //      worm.node.stopAllActions();
       //      worm.node.active = false;
       //      GameData.start_point = panda.world.aabb.y;
       //  }
    },
    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionExit: function (worm, panda) {
        //console.log('结束碰撞：',panda);
        GameData.is_collision = false;
    },
});
