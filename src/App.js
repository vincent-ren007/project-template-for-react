import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import history from './redux/history'
import * as actionCreators from './redux/actionsCreators'

import Topics from './Topics'
import Home from './Home'
import TodoList from './TodoList'

class App extends Component{
  componentWillMount(){
    let getScreenWidth = function(){
      this.props.renewWindowWidth(document.body.clientWidth)
    }.bind(this)
    getScreenWidth()
    window.onresize = getScreenWidth
  }

  render(){
    return (
      <ConnectedRouter history={history}>
        <div style={{backgroundColor: 'grey', padding:10}}>
          <Link to='/home'>home</Link><br/>
          <Link to='/todolist'>TodoList{ this.props.todoList.length ? ' (有' + this.props.todoList.length + '件事要做)' : ''}</Link><br/>
          <Link to='/topics'>topics</Link><br/>
          <h1>hello world, 我是App组件</h1>
          <Route path="/home" component={Home} />
          <Route path="/todolist" component={TodoList} />
          <Route path="/topics" component={Topics} />
        </div>
      </ConnectedRouter>
    )
  }
}

function mapStateToProps(state){
  return {todoList: state.todoList}
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(App)
