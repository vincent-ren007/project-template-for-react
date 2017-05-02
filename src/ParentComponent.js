import React, { Component } from 'react'
import SonComponent from './SonComponent'

export default class ParentComponent extends Component{
  constructor(){
    super()
    this.state = {
      height: 100
    }
  }

  componentWillMount(){
    setInterval( ()=>{
      this.setState({height: this.state.height + 10})
    } ,2000)
  }

  render(){
    return (
      <SonComponent height={this.state.height}/>
    )
  }
}
