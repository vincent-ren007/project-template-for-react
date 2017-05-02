import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './redux/actionsCreators'

class ShowTodoList extends Component{
  constructor(){
    super()
    this.state = {
      todo: ''
    }
  }

  removeTodo(index){
    this.props.removeTodo(index)
  }

  render(){
    let styles = {
      div:{
        backgroundColor: '#a2b4a2',
        padding: 20
      },
    }
    let list = this.props.todoList.map((row, index)=>(
      <p key={index}>{row}<button onClick={this.removeTodo.bind(this, index)}>done</button></p>
    ))
    return (
      <div style={styles.div}>
        <p>我是ShowTodoList 组件</p>
        {list}
      </div>
    )
  }
}

function select(state){
  return {todoList: state.todoList}
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(select, mapDispachToProps)(ShowTodoList)
