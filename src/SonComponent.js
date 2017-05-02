import React, { Component } from 'react'

export default class SonComponent extends Component{
  constructor(){
    super()
    this.state = {
      width: 200
    }
  }

  componentWillMount(){
    setInterval( ()=>{
      this.setState({width: this.state.width + 10})
    } ,500)
  }

  render(){
    let styles = {
      div: {
        width: this.state.width,
        height: 200,
        backgroundColor: '#ccc'
      }
    }

    return (
      <div style={styles.div}>
        <p>灰色区域宽度：{this.state.width}</p>
        <p>灰色区域高度：{this.props.height}</p>
      </div>
    )
  }
}
