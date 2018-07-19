// reducers/index.js
const { combineReducers } = Redux; // 利用combineReducers 合并reducers
const { routerReducer } = ReactRouterRedux; // 将routerReducer一起合并管理
import update from './count' // 引入update这个reducer

export default combineReducers({
    update,
    routing: routerReducer
})