import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './redux/actionsCreators'
import ShowTodoList from './ShowTodoList'

class TodoList extends Component{
  constructor(){
    super()
    this.state = {
      todo: ''
    }
  }

  addTodo(){
    this.props.addTodo(this.state.todo)
    this.setState({todo: ''})
  }

  inputOnChange(){
    let value = this.refs.input.value
    this.setState({todo: value})
  }

  render(){
    let styles = {
      div:{
        backgroundColor: '#a2b4e1',
        padding: 20
      },
    }
    return (
      <div style={styles.div}>
        <p>我是todoList 组件</p>
        <p><input ref="input" value={this.state.todo} onChange={this.inputOnChange.bind(this)} /><button onClick={this.addTodo.bind(this)}>添加</button></p>
        <ShowTodoList />
      </div>
    )
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(null, mapDispachToProps)(TodoList)
