/*
* @Author: sottxiong
* @Date:   2019-12-16 19:24:55
* @Last Modified by:   sottxiong
* @Last Modified time: 2019-12-16 19:55:54
*/
import React from 'react';
import 'antd/dist/antd.css'
import {
	Input,
	Button,
	List
} from 'antd';

const TodoListUI = (props)=>{
	return (
		<div style={{marginTop:"10px",marginLeft:'10px'}}>
			<Input 
				value = {props.inputValue}
				placeholder = 'todo info' 
				style={{width:'300px',marginRight:'10px'}}
				onChange = {props.hanldeInputChange}
			/>
			<Button type='primary' onClick={props.handleButtonClick}>提交</Button>
			<List
			      bordered
			      dataSource={props.list}
			      renderItem={(item,index)=> (
			        <List.Item onClick={(index)=>{props.handleItemDelete(index)}}>
			          {item}
			        </List.Item>
			      )}
			/>
		</div>
	)
}

export default TodoListUI;