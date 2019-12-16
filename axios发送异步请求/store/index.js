/*
* @Author: sottxiong
* @Date:   2019-12-16 13:46:57
* @Last Modified by:   sottxiong
* @Last Modified time: 2019-12-16 14:15:14
*/
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	//如果window存在这个变量，就执行这个变量对应的方法
);

export default store;