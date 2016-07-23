import React,{ Component } from 'react';

import './index.css';
class messte extends Component{
  render(){
    return(
      <div>123</div>
    )
  }
}
export default class MyComponent extends Component{
    render(){
        return(
            <h2>MyComponssent 组件<messte/></h2>
        )
    }
}
