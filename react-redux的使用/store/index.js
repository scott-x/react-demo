/*
* @Author: sottxiong
* @Date:   2019-12-17 04:16:10
* @Last Modified by:   sottxiong
* @Last Modified time: 2019-12-17 04:20:47
*/
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;