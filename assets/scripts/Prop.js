window.Prop =({

    nodeArr:[],//节点数组
    propArr:[],//道具数组
    //初始化全部道具节点
    initNode:function () {
        let firstNode =  cc.find('/Canvas/Panel/prop/first');
        let secondNode =  cc.find('/Canvas/Panel/prop/second');
        let threeNode =  cc.find('/Canvas/Panel/prop/three');
        let fourNode =  cc.find('/Canvas/Panel/prop/four');
        let fiveNode =  cc.find('/Canvas/Panel/prop/five');
        this.nodeArr.push(firstNode);
        this.nodeArr.push(secondNode);
        this.nodeArr.push(threeNode);
        this.nodeArr.push(fourNode);
        this.nodeArr.push(fiveNode);
    },
    //初始化全部道具
    initProp:function () {
        var that = this;
        //加载时间，增加时间
        cc.loader.loadRes('Prefab/nz', function(errorMessage,loadedResource){
            //检查资源加载
            if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
            if( !( loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
            //开始实例化预制资源
            that.propArr.push(cc.instantiate(loadedResource))
        });
        //加载保护罩
        cc.loader.loadRes('Prefab/pcover', function(errorMessage,loadedResource){
            //检查资源加载
            if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
            if( !( loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
            //开始实例化预制资源
            that.propArr.push(cc.instantiate(loadedResource))
        });
        //加载杀虫剂
        cc.loader.loadRes('Prefab/scj', function(errorMessage,loadedResource){
            //检查资源加载
            if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
            if( !( loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
            //开始实例化预制资源
            that.propArr.push(cc.instantiate(loadedResource))
        });
        //加载锤子，杀虫子
        cc.loader.loadRes('Prefab/hammer', function(errorMessage,loadedResource){
            //检查资源加载
            if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
            if( !( loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
            //开始实例化预制资源
            that.propArr.push(cc.instantiate(loadedResource))
        });
    },

    //随机获取节点
    getNode:function () {
        return this.nodeArr[Math.floor((Math.random()*this.nodeArr.length))];
    },
    //随机获取道具
    getProp:function () {
        return  cc.instantiate(this.propArr[Math.floor((Math.random()*this.propArr.length))]);
    },

    //创建道具
    createProp:function () {
        let randomNode = this.getNode();
        let randomProp = this.getProp();
        randomProp.setPosition(0,680);
        randomNode.addChild(randomProp);
        let shakeAnimation =  cc.speed(cc.sequence(cc.moveTo(10,cc.v2(0,-580)),cc.callFunc(function () {
            randomProp.destroy();
        })),1);
        randomProp.runAction(shakeAnimation);
    }




});