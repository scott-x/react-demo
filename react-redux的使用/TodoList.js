/*
* @Author: sottxiong
* @Date:   2019-12-17 04:12:56
* @Last Modified by:   sottxiong
* @Last Modified time: 2019-12-17 12:54:47
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

// class TodoList extends Component {
// 	render(){
// 		const { inputValue,changeInputValue,addItem,list,handleDelete } = this.props;
// 		return (
// 			<div>
//  				<input type="text" value={inputValue} onChange = {changeInputValue}/>
//  				<button onClick={addItem}>提交</button>
//  				<ul>
//  					{
//  						list.map((item,index)=>{
//  							return <li key={index} onClick={handleDelete.bind(this,index)}>{item}</li>
//  						})
//  					}
//  				</ul>
// 			</div>
// 		)
// 	}
// }
// 改造代码：无状态组件运行效率更高，没有被实例化，没有那些生命周期函数
const TodoList = (props) => {
	const { inputValue,changeInputValue,addItem,list,handleDelete } = props;
	return (
			<div>
 				<input type="text" value={inputValue} onChange = {changeInputValue}/>
 				<button onClick={addItem}>提交</button>
 				<ul>
 					{
 						list.map((item,index)=>{
 							return <li key={index} onClick={handleDelete.bind(this,index)}>{item}</li>
 						})
 					}
 				</ul>
			</div>
		)
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
//TodoList是个UI组件，connect方法通过吧这些业务逻辑和UI组件相结合，返回的是一个容器组件