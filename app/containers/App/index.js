import React,{Component} from 'react';

import {Router,Route,browserHistory, Link, IndexRoute} from 'react-router';

import './index.css';
// 路由变量 的使用
class Mesag extends Component{
  render(){
    // 这里 打印了 所有 props 变量 信息
    console.log(this.props)
    return(
      <div>
        // 这里 写了 默认的 信息 ，如果没有 || 那么 Home 是 没有 值得
        <h1>{this.props.params.message || 'Hello'}</h1>
        <Links />
      </div>
    )
  }
}
class App extends Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/(:message)" component={Mesag}></Route>

            </Router>
        )
    }
}
//Link 的使用 是react-router 提供的组件，可以自己使用进行路由切换
//1, 引入 { Router,Route,hashHistory, Link }
//2, 下面的 Link 用法
//3, 上面 使用是  <links /> 使用
const Links = () =>
    <nav>
        <Link activeClassName="active" to="/">Home1 </Link>
        <Link activeClassName="active" to="/about">About2 </Link>
        <Link activeClassName="active" to="/contact">contact </Link>
    </nav>


export default App;



//import React, {Component} from 'react';
//import { MyComponent } from '../../components'
//
//import './index.css'
//export default class App extends Component{
//    render(){
//        return(
//            <div>
//                <MyComponent/>
//                <p>App的数据</p>
//            </div>
//        )
//    }
//}






//import React, {Component} from 'react';
////这是 第三步,
//export default class App extends Component{
//    render(){
//        return(
//            <div>
//                <h1>App</h1>
//                {/*这时候应该看，../../routes/index.js 看它们是怎么个包含关系*/}
//                {this.props.children}
//            </div>
//        )
//    }
//}
