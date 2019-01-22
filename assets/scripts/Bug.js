// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

window.Bug = ({
    inity:-680,
    initx:function () {
        //初始x,y轴位置
        let initPosition = [1,2,3,4,5,6,7,8];
        let x =  Math.floor((Math.random()*initPosition.length));
        return  GameData.children_list.get(initPosition[x]);
    },

    //创建虫子
    createBug:function () {
        var that  = this;
        cc.loader.loadRes('Prefab/bug', function(errorMessage,loadedResource){
            //检查资源加载
            if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
            if( !( loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
            //开始实例化预制资源
            var bugPrefab = cc.instantiate(loadedResource);
            let x = that.initx();

            x.addChild(bugPrefab);
            bugPrefab.setPosition(x.x,that.inity);
            let shakeAnimation =  cc.speed(cc.sequence(cc.moveTo(10,cc.v2(x.x,680)),cc.callFunc(function () {
                bugPrefab.destroy()
            })),1);
            bugPrefab.runAction(shakeAnimation);
        });
    },
    //获取当前分数，变化虫子出现的时间间隔
    getCreatrBugTime:function () {

    }


});

