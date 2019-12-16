/*
* @Author: sottxiong
* @Date:   2019-12-17 04:17:06
* @Last Modified by:   sottxiong
* @Last Modified time: 2019-12-17 06:52:36
*/
const defaultState = {
	inputValue:'',
	list:['apple']
}
export default (state=defaultState, action) => {
	if (action.type === 'change_input_value') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState
	}

	if (action.type === 'delete_item') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1);
		return newState
	}

	if (action.type === 'add_item') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = [...newState.list,newState.inputValue]
		newState.inputValue = ''
		return newState
	}

	return state;
}