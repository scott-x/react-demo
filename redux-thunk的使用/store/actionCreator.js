/*
* @Author: sottxiong
* @Date:   2019-12-16 16:08:01
* @Last Modified by:   sottxiong
* @Last Modified time: 2019-12-17 03:24:37
*/
import axios from 'axios';
import {
	CHANGE_INPUT_VALUE,
	ADD_TODO_ITEM,
	REMOVE_TODO_ITEM,
	INIT_LIST
} from './actionType'

export const getInputChangeAction = (value) => ({
	type : CHANGE_INPUT_VALUE,
	value
})

export const getButtonClickAction = () => ({
	type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
	type: REMOVE_TODO_ITEM,
	index
})

export const getInitListAction = (data) => ({
	type: INIT_LIST,
	data
})

export const getTodoList = ()=>{
	return (dispatch)=>{
		axios.get('/api/list.json').then(res=>{
			const data = res.data;
			const action = getInitListAction(data)
			dispatch(action)
    	}).catch(err=>{
    		console.log("error:",err);
    	})
	}
}
