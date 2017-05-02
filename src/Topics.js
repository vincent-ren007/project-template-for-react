import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

const Topic = ({ match }) => (
  <div style={{backgroundColor: 'grey', padding:5}}>
    <h4>topicContent 组件</h4>
    <h3>{match.params.topicId} 内容</h3>
  </div>
)

const Topics = ({ match }) =>{
  return (
    <div style={{backgroundColor:'green', padding:10}}>
        <h2>我是topics 组件</h2>
      <ul>
        <li>
          <Link to={`${match.url}/topicA`}>
            topicA
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/topicB`}>
            topicB
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/topicC`}>
            topicC
          </Link>
        </li>
      </ul>
      <Route path={`${match.url}/:topicId`} component={Topic}/>
      <Route exact path={match.url} />
    </div>
  )
}

export default Topics
