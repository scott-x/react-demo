/*
* @Author: sottxiong
* @Date:   2019-12-17 04:12:56
* @Last Modified by:   sottxiong
* @Last Modified time: 2019-12-17 06:53:15
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
	render(){
		return (
			<div>
 				<input type="text" value={this.props.inputValue} onChange = {this.props.changeInputValue}/>
 				<button onClick={this.props.addItem}>提交</button>
 				<ul>
 					{
 						this.props.list.map((item,index)=>{
 							return <li key={index} onClick={this.props.handleDelete.bind(this,index)}>{item}</li>
 						})
 					}
 				</ul>
			</div>
		)
	}
}

//store里面的数据会映射到组件的props上面
const mapStateToProps = (state) => ({
	inputValue: state.inputValue,
	list: state.list
})

//store.dispatch props
const mapDispatchToProps = (dispatch) => {
	return {
		changeInputValue(e){
			const action = {
				type:'change_input_value',
				value: e.target.value
			}
			dispatch(action);
		},
		handleDelete(index){
			const action = {
				type:'delete_item',
				index
			}
			dispatch(action)
		},
		addItem(){
			const action = {
				type:'add_item'
			}
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);//让组件TodoList和store做连接