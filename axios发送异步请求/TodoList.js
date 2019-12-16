/*
* @Author: sottxiong
* @Date:   2019-12-16 13:21:44
* @Last Modified by:   sottxiong
* @Last Modified time: 2019-12-16 21:37:56
*/
import React, { Component } from 'react';
import axios from 'axios';
import store from './store' //store存储了公用的数据
import {
	getInputChangeAction,
	getButtonClickAction,
	getDeleteItemAction,
	getInitListAction
} from './store/actionCreator'



import TodoListUI from './TodoListUI';

class TodoList extends Component{
	constructor(props){
		super(props)
		// console.log(store.getState()); 拿到store所有数据
		this.state = store.getState();
		this.hanldeInputChange = this.hanldeInputChange.bind(this)
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleButtonClick = this.handleButtonClick.bind(this)
		this.handleItemDelete = this.handleItemDelete.bind(this)

		store.subscribe(this.handleStoreChange);
	}

	render(){
		const {inputValue, list} = this.state;
		return 	(
				<TodoListUI 
					inputValue = {inputValue}
					hanldeInputChange = {this.hanldeInputChange}
					handleButtonClick = {this.handleButtonClick}
					list = {list}
					handleItemDelete = {this.handleItemDelete}
			    />
		    )
	}
    
    componentDidMount(){
    	axios.get('/api/list.json').then(res=>{
			const data = res.data;
			const acttion = getInitListAction(data)
			store.dispatch(acttion)
    	}).catch(err=>{
    		console.log("error:",err);
    	})
    }
	hanldeInputChange(e){
		//action的写法也是固定的，它是一个对象
		const action = getInputChangeAction(e.target.value)
		//把action告诉store后，store会自动把prevStore和action转发给reducer，
		//接着我们就可以在reducer中接收到state和action
		store.dispatch(action)
	}

	handleStoreChange(){
		// console.log("store changed");
		this.setState(store.getState());
	}

	handleButtonClick(){
		//actio是一个对象的样子，有一个type属性
		const action = getButtonClickAction()
		store.dispatch(action)
	}

	handleItemDelete(index){
		const action = getDeleteItemAction(index);
		store.dispatch(action)
	}
}

export default TodoList;