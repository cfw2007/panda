/*
create by zhang at 2018/11/20 welcome to use it
use way : Http.Get(url,data,sf,ff);
 */
window.Http = {
    version: GameData.version,
    Get: function(url,reqData='',sunccessFun,failFun){
        if(reqData.length > 0){
            url += "?";
            for(var item in reqData){
                url += item +"=" +reqData[item] +"&";
            }
        }
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4){
                    if(xhr.status >= 200 && xhr.status < 400){
                        var response = xhr.responseText;
                        // console.log(response)
                        if(response){
                            var responseJson = JSON.parse(response);
                            // let controller_name = "RootViewController";
                            // let function_name = "showWebView:";
                            // let param = URLData.UserLoginUrl;
                            if( responseJson.status == -16){
                                jsToObject(controller_name, function_name, param);
                            }else if (responseJson.status == -100 && responseJson.msg == "未登录") {
                                jsToObject(controller_name, function_name, param);
                            }else if(!sunccessFun){
                                resolve(responseJson);
                            }else{
                                sunccessFun(responseJson);
                            }
                        }else{
                            sunccessFun(false);
                        }
                    }else{
                        failFun(false);
                    }
                }
            };
            xhr.open("GET", url, true);
            xhr.send();
        });


    },

    Post: function (url, reqData, sunccessFun,failFun) {
        var self = this;
        // console.log(url)
        // console.log(reqData)
        //1.拼接请求参数
        var param = "";
        for(var item in reqData){
            param += item + "=" + reqData[item] + "&";
        }
        //2.发起请求
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {

            if (xhr.readyState == 4){
                if(xhr.status >= 200 && xhr.status < 400){
                    var response = xhr.responseText;
                    let controller_name = "RootViewController";
                    let function_name = "showWebView:";
                    let param = URLData.UserLoginUrl;
                    if(response){
                        var responseJson = JSON.parse(response);
                        if( responseJson.status == -16){
                            jsToObject(controller_name, function_name, param);
                        }else if (responseJson.status == -100 && responseJson.msg == "未登录") {
                            jsToObject(controller_name, function_name, param);
                        }else {
                            sunccessFun(responseJson);
                        }
                    }else{
                        sunccessFun(false);
                    }
                }else{
                    failFun(false);
                }
            }
        };
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type" , "application/x-www-form-urlencoded");
        xhr.send(param);//reqData为字符串形式： "key=value"
    },
    URLencode: function(sStr)
    {
        return escape(sStr).replace(/\+/g, '%2B').replace(/\"/g,'%22').replace(/\'/g, '%27').replace(/\//g,'%2F');
    }

};