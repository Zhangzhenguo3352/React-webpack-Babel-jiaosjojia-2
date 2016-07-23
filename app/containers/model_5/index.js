// 1， 也不知道 PropTypes 在这有什么用
import React, {Component,PropTypes} from 'react';
// *** 这个页面 写了  this.props 下面 有一些方法，可以让我们 方便实现 马上切换前，可以做那些事情，比如说 专场动画
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
// 转换 路由 时调用 路由 切换的 方法，它有这样的 方法
class Home extends Component {
  componentWillMount(){
    console.log(this)
    console.log(this.props.route) // Object {path: "/"}
    this.context.router.setRouteLeaveHook(
      // 第一个 函数 route
      this.props.route,
      //第二个参数 hook  勾子，就是你要 做什么事情
      this.routerWillLeave
    )
  }

  routerWillLeave( nextLocation ){
    // 这里 用 反逗号 效果是 一个弹窗
    return `页面即将从Home切换到${nextLocation.pathname}`
  }

  // 测试 his.props.history.push('location') 中的函数 location ( 位置 ) 参数
  handisClick(){
    //虽然 这么写会报错 但可以证明 参数 location ;应该 这么写
    // 我们会看到 url 地址栏中 增加了 /123; 如： http://localhost:3333/123
    this.props.history.push('/123')
  console.log( PropTypes.object.isRequired)
  }


  render(){
    return(
      <div>
      <h1 onClick={this.handisClick.bind(this)}>home</h1>
        <Links />
      </div>

    )
  }
}

//2， 没有这个方法不行，但不知道 ropTypes.object.isRequired 有什么用
Home.contextTypes = {
  router:  PropTypes.object.isRequired
};


const About = () => <div><h1>about</h1><Links /></div>

const Links = () =>
  <nav>
    <Link to="/">Home </Link>
    <Link to="/about">About </Link>
  </nav>

class Model_5 extends Component {
  render(){
    return (
        <Router history={browserHistory}>
          <Route path="/" component={Home}/>
          <Route path="about" component={About}/>
        </Router>
    )
  }
}
export default Model_5;
