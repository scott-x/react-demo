/*
* @Author: sottxiong
* @Date:   2019-12-16 13:49:25
* @Last Modified by:   sottxiong
* @Last Modified time: 2019-12-16 21:42:27
*/
import {
	CHANGE_INPUT_VALUE,
	ADD_TODO_ITEM,
	REMOVE_TODO_ITEM,
	INIT_LIST
} from './actionType'

const defaultStore = {
	inputValue:'',
	list:[]
}

//reducer 可以接受state， 但是绝不能修改state
export default (state = defaultStore, action)=>{
	if (action.type === CHANGE_INPUT_VALUE) {
		//对原state进行深拷贝
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState
	}

	if (action.type === ADD_TODO_ITEM) {
		//对原state进行深拷贝
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = [...newState.list,newState.inputValue]
		newState.inputValue = ''
		return newState
	}

	if (action.type === REMOVE_TODO_ITEM) {
		//对原state进行深拷贝
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1)
		return newState
	}

	if (action.type === INIT_LIST) {
		//对原state进行深拷贝
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = [...newState.list,...action.data]
		return newState
	}

	return state;
}