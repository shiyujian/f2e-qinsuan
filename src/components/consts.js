export const STATE_EDIT = 0;
export const STATE_ADD = 1;

export const ADD = '1';
export const EDIt = '0';


export const Tip_SUCCESS = 'success';
export const Tip_INFO = 'info';
export const Tip_WARNING = 'warning';
export const Tip_ERROR = 'error';

export const MSG_GETED = '获取数据成功';
export const MSG_GETING = '正在获取数据';
export const MSG_DELED = '删除成功';
export const MSG_SUCCESS = 'OK';



export const DATA_INNIT = 'DATA_INNIT';

export const COMMON_HOLDER = '';

export const LOADING = 'loading';


export const CODE_SUCCESS = 0;
export const STATUS_SUCCESS = 1;
export const CODE_UNLOGIN = 90004;



/*----搜索字段-----*/


export const ORDER_STATUS = [{
    name: '待确认',
    value: 200
},{
    name: '待放款',
    value: 210
},{
    name: '放款中',
    value: 211
},{
    name: '放款失败',
    value: 220
},{
    name: '已放款',
    value: 230
},{
    name: '正常结清',
    value: 240
},{
    name: '提前结清',
    value: 241
},{
    name: '逾期结清',
    value: 242
},{
    name: '原额结清',
    value: 243
},{
    name: '坏账',
    value: 250
},{
    name: '取消',
    value: 260
}];

export const DEAL_TYPE =[{
    name: '发起补单',
    value: '210'
},{
    name: '置为失败',
    value: '260'
}];

// export const REPAY_FLAG = [{
//     name: '待还款',
//     value: 200
// },{
//     name: '正常结清',
//     value: 210
// },{
//     name: '提前结清',
//     value: 220
// },{
//     name: '逾期结清',
//     value: 230
// },{
//     name: '减免结清',
//     value: 240
// },{
//     name: '原额还款结清',
//     value: 250
// },{
//     name: '线下还款',
//     value: 260
// }];

export const REPAY_FLAG = [{
    name: '自动代扣',
    value: 100
},{
    name: '正常结清',
    value: 210
},{
    name: '提前结清',
    value: 220
},{
    name: '原额还款结清',
    value: 250
},{
    name: '线下还款',
    value: 260
}];

export const SHOULD_REPAY_FLAG = [{
    name: '未还款',
    value: 200
},{
    name: '已结清',
    value: 210
}];

export const SHOULD_REPAY_MAP = {
    '200': '未还款',
    '210': '已结清'
}

//0部分还款 1已还款 2已退款
export const REPAY_STATUS = [{
    name: '全部',
    value: '0'
},{
    name: '成功',
    value: '1'
},{
    name: '失败',
    value: '2'
}];

//减免类型  1利息，2服务费，3手续费，4滞纳金
export const REDUCTION_TYPE = [{
    name: '利息',
    value: '1'
},{
    name: '服务费',
    value: '2'
},{
    name: '手续费',
    value: '3'
},{
    name: '滞纳金',
    value: '4'
}];






