import React,{ Component } from 'react';
import {Router, Route, IndexRoute, Link, browserHistory, Redirect} from 'react-router';
// 这个 页面 使用了 Redirect ,主要目的是 ：当 找不到 Contast 组件时 不会报错，会改成其它 路径
const About = () => <div><h1>about</h1><Links /></div>
const Contast = () => <div><h1>Contast</h1><Links /></div>

class Home extends Component {
  render(){
    return(
      <div>
        <h1>{this.props.location.query.xxxxx || 'Hello'}</h1>
        <Links />
      </div>
    )
  }
}
class Model_4 extends Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        {/* 这里使用 重定向 Redirect ,就是 当 找不到 Contast 组件时 不会报错，会 从 contast 到 contast-us 这个函数中 */}
        <Route path="/contast-us" component={Contast}/>
        <Redirect from="/contast" to="/contast-us"/>

      </Router>
    )
  }
}
const Links = () =>
  <nav>
    <Link to="/">Home </Link>
    <Link to="/about">about </Link>
    <Link to="/contast">contast </Link>
    <Link to="/contast-us">contast Us </Link>
  </nav>
export default Model_4;
