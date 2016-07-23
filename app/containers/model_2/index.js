import React,{ Component } from 'react';

import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
// 实现了 Route 中调用 组件 ，this.props.location.query.xxx 来获取 URL 参数
// 访问方式  地址栏加   /?name=xxx&passward
// 如:    http://localhost:3333/?name=zha&passward=3352
class Home extends Component {
  render(){
    console.log(this.props)
    return(
      <div>
      <h1>{this.props.location.query.name || 'Hello'}</h1>
      <h1>{this.props.location.query.passward || '3352418'}</h1>

      </div>

    )

  }
}
//  /?name=xxx&passward

class Model_2 extends Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
      </Router>
    )
  }
}
export default Model_2;
