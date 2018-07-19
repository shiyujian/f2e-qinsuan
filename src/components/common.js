


import {fetchGet, fetchPost} from 'babel-loader!fr-base/frFetch';


import { Button, notification, message } from 'antd';

import { MSG_ERROR, MSG_SUCCESS, MSG_WARNING, MSG_INFO, CODE_SUCCESS, CODE_UNLOGIN, STATUS_SUCCESS } from './consts';



let stateAllfetchArr = [];


import MainView from './Main/MainView';

/*export const tryIt = () => {

    window.setTimeout(function () {
        MainView.getSetLoadiingFunc();
    }, 2000)
};

tryIt();*/


export const toExport = (title) => {
    const length = document.getElementsByTagName("table").length - 1;

    let html = "<html><head><meta charset='utf-8' /></head><body>" + document.getElementsByTagName("table")[length].outerHTML + "</body></html>";

    let blob = new Blob([html], { type: "application/vnd.ms-excel" });

    let a = document.getElementById("toLatterExport");

    a.href = URL.createObjectURL(blob);
    a.download = title;

    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click",false,true);
    a.dispatchEvent(evt);
}
export const myStyle =  {color: '#ffffff',paddingRight: '8px',fontSize: '14px',textDecoration: 'none'}

export const changeGlobalFetchState = () => {
    if(stateAllfetchArr.length > 0) {
        MainView.getSetLoadiingFunc(true);
    }else {
        MainView.getSetLoadiingFunc(false);
    }
};

export const jrFetchGet = function (jrApi, fetchPrm = {}) {

    parseUndefined(fetchPrm);

    return new Promise(function(resolve, reject){
        stateAllfetchArr.push(1);
        changeGlobalFetchState();
        fetchGet(jrApi, fetchPrm, function (ret) {
            switch (ret.code) {
                case CODE_SUCCESS:
                    stateAllfetchArr.pop();
                    changeGlobalFetchState();
                    resolve(ret);
                    break;
                default:
                    stateAllfetchArr.pop();
                    changeGlobalFetchState();
                    reject();
                    message.info(ret.message);
                    if(ret.message.indexOf('请先登录') > -1) {
                        window.location.href = '#/login';
                    }

            }
        },function (res) {
            stateAllfetchArr.pop();
            changeGlobalFetchState();
            reject();
            message.info(res);

        })
    })
};


export const jrFetchPost = function (jrApi, fetchPrm = {}) {

    parseUndefined(fetchPrm);

    return new Promise(function(resolve, reject){
        stateAllfetchArr.push(1);
        changeGlobalFetchState();
        fetchPost(jrApi, fetchPrm, function (ret) {
            switch (ret.code) {
                case CODE_SUCCESS:
                    stateAllfetchArr.pop();
                    changeGlobalFetchState();
                    resolve(ret);
                    break;
                default:
                    stateAllfetchArr.pop();
                    changeGlobalFetchState();
                    reject();
                    message.info(ret.message);
                    if(ret.message.indexOf('请先登录') > -1) {
                        window.location.href = '#/login';
                    }
                    console.log(`${ret.message}(请求异常接口：${jrApi})参数：`)
                    console.log(fetchPrm)

            }
        },function (res) {
            stateAllfetchArr.pop();
            changeGlobalFetchState();
            reject();
            message.info(res);

        })
    })
};


export const jrTip = function (type, msg, des) {
    /*success info warning error*/
    notification[type]({
        message: msg,
        description: des,
    });
};


export const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};


export const getRouteString = (routeArray, index) => {
    let rs = '';
    for(let i=0; i<index; i++) {
        rs = rs + routeArray[i]['path'] + '/'
    }
    return rs
};

export const formatDate =(now) => {
    const year = now.getFullYear();
    const month = now.getMonth()+1;
    const date = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    return   year+"-"+month+"-"+date+"   "+hour+":"+minute+":"+second;
};



export const resizeCallback = {

    callbackArr: [],

    initOnresize: function () {

        let timeOutResize;

        window.onresize = () => {
            window.clearTimeout(timeOutResize);
            timeOutResize = window.setTimeout(() => {
                for(let item of this.callbackArr) {
                    item();
                }
            }, 200)
        };
    }
};

export const parseUndefined = (obj) => {

    for(let item in obj) {
        obj[item] = obj[item] === undefined ? '' : obj[item]
    }

};



export const getLocalTime = (nS) => {
    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
};

 export const timeRender = (item) => {
     if(!item || item.length < 5) {
         return '--'
     }
    return getLocalTime(item).split(' ')[0]
};



