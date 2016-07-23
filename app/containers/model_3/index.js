import React,{ Component } from 'react';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

//在 Link 的 to 中 添加 pathname ，和 query ,这种方法 更佳灵活 ，获取 url c参数

//访问   /?xxxxx=zhang
// 如   http://localhost:3333/?xxxxx=21111
class Home extends Component {
  render(){
    return(
      <div>如   http://localhost:3333/?xxxxx=21111
        <h1>{this.props.location.query.xxxxx || 'Hello'}</h1>
      </div>
    )
  }
}
class Model_3 extends Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
        </Route>
      </Router>
    )
  }
}
const Links = () =>
  <nav>
    <Link to={{pathname:"/", query: {xxxxx: "zhangzhenguo"}}}>链接 跳转到 About</Link>
  </nav>
export default Model_3;
