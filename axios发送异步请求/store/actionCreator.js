/*
* @Author: sottxiong
* @Date:   2019-12-16 16:08:01
* @Last Modified by:   sottxiong
* @Last Modified time: 2019-12-16 20:21:51
*/
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