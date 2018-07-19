

export const apiLogin = '/auth/manager/login';
export const apiLogout = '/auth/manager/logout';
export const apiGetUserInfo = 'auth/manager/getUserInfo';


/*----------------权限管理-----------------*/
export const apiGetAllRole = '/auth/manager/getAllRole';
export const apiAddUser = '/auth/manager/addUser';
export const apiUpdateUserInfo = '/auth/manager/updateUserInfo';
export const apiAddRole = '/auth/manager/addRole';
export const apiDeleteRole = '/auth/manager/deleteRole';
export const apiDeleteUser = '/auth/manager/deleteUser';
export const apiGetAllResource = '/auth/manager/getAllResource';
export const apiAddResource = '/auth/manager/addResource';
export const apiUpdateResource = '/auth/manager/updateResource';
export const apiDeleteResource = '/auth/manager/deleteResource';
export const apiGetChannelList = '/auth/pay/other/getChannelList';

export const apiGetMenuList = '/auth/manager/getMenuList';
export const apiGetMenuItemList = '/auth/manager/getMenuItemList';
export const apiMenuToRole = '/auth/manager/menuToRole';
export const apiGetMenuItemByRoleId = '/auth/manager/getMenuItemByRoleId';


//产品管理
export const apiGetAllProduct = 'auth/product/getAllProduct';
export const apiAddProduct = '/auth/product/addProduct';
export const apiGetProductItmByCode = 'auth/product/getProductItmByCode';
export const apiDeleteProductItem = '/auth/product/deleteProductItem';
export const apiUpdateProductItem = 'auth/product/updateProductItem';
export const apiAddProductItem = '/auth/product/addProductItem';
export const apiAddFeeRate = '/auth/product/addFeeRate';
export const apiGetFeeNameAndCode = '/auth/product/getFeeNameAndCode';
export const apiGetFeeRate = '/auth/product/getFeeRate';
export const apiDeleteFeeRate = '/auth/product/deleteFeeRate';

export const apiGetPartDeductPolicy = '/auth/product/getPartDeductPolicy';
export const apiUpdateDeductPolicy = '/auth/product/updateDeductPolicy';






/*----------------交易管理------------------*/
//还款记录
export const apiGetrecordlist = 'auth/repayment/getRecordList';
export const apiAheadsettle = '/auth/repayment/aheadsettle';
export const apiDoaheadsettle = 'auth/repayment/doaheadsettle';//提前结清
export const apiCancelorder = 'auth/repayment/cancelorder';//原额还款
export const apiOfflinerepayrecord = '/auth/repayment/offlinerepayrecord';
//应还款查询
export const apiGetneedsrepaylist= 'auth/repayment/getNeedsRepayList';
//逾期记录查询
export const apiGetdelayrepaylist = 'auth/repayment/getdelayrepaylist';
//订单管理
export const apiGetorderlist = 'auth/order/getorderlist';
export const apiGetorderallinfo = 'auth/repayment/getorderallinfo';
export const apiGetSingleRepayRecord = 'auth/repayment/getSingleRepayRecord';
export const apiLoanFailAction = '/auth/order/loanFailAction';
//还款计划
export const apiGetrepaymentlist = 'auth/repayment/getrepaymentlist';
//减免管理
export const apiReductionList = '/auth/repayment/reductionList';
//部分还款列表
export const apiPartrepaylist = '/auth/repayment/partrepaylist';
export const apiPartRepayEdit = '/auth/repayment/partRepayEdit';

/*----------------用户管理------------------*/
//银行卡管理
export const apiBankCardDataSearch = '/auth/user/bankCardDataSearch';
//客户管理
export const apiUserSearch = '/auth/user/userSearch';

