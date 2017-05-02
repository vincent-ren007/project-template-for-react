import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component{

  render(){
    let styles = {
      div:{
        height: 200,
        padding: 10,
        backgroundColor: '#ccc',
        width: this.props.windowWidth / 2
      },
    }
    return (
      <div style={styles.div}>
        <p>我是home 组件</p>
        <p style={styles.p}>当前窗口宽度：{this.props.windowWidth}</p>
        <p style={styles.p}>home组件宽度：{this.props.windowWidth * 0.5}</p>
      </div>
    )
  }
}

function select(state){
  return {windowWidth : state.windowWidth}
}

export default connect(select)(Home)
