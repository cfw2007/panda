/**
* 分数操作所有的分数数据写入操作
* 简博言 2019-01-12
* TODO 1.初始化入口脚本
* **/
var ScoreModel = {
    doChangeData : function (type = 0) {
        switch (type){
            case 0:
                GameInfo.new_score > GameInfo.history_score ?   GameInfo.history_score = GameInfo.new_score : '';
                GameInfo.new_score++;
                break;
            case 1:
                GameInfo.new_score--;
                break;
            case 2:
                GameInfo.new_score = 0;
        }
    }
}
module.exports = ScoreModel;

