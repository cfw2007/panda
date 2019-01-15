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
        let initPosition = [-224.5,-164.5,70.5,135.5,-74.5,-14.5,225.5,285.5];
        let x =  Math.floor((Math.random()*initPosition.length));
        return initPosition[x];
    },

    //创建虫子
    createBug:function (obj) {
        var that  = this;
        cc.loader.loadRes('Prefab/bug', function(errorMessage,loadedResource){
            //检查资源加载
            if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
            if( !( loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
            //开始实例化预制资源
            var bugPrefab = cc.instantiate(loadedResource);
            obj.addChild(bugPrefab);
            let x = that.initx();
            bugPrefab.setPosition(x,that.inity);
            let shakeAnimation =  cc.speed(cc.sequence(cc.moveTo(10,cc.v2(x,680)),cc.callFunc(function () {
                bugPrefab.destroy()
            })),1);
            bugPrefab.runAction(shakeAnimation);
        });
    },
    //获取当前分数，变化虫子出现的时间间隔
    getCreatrBugTime:function () {

    }


});

