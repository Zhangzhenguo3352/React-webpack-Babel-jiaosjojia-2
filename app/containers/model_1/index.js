import React,{ Component } from 'react';

import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
// 实现了 Route 中 Components 的高级用法

const HomeHeader = () => <h2>HomeHeader</h2>
const HomeBody = () => <h2>HomeBody</h2>
const AboutHeader = () => <h2>AboutHeader</h2>
const AboutBody = () => <h2>AboutBody</h2>

// 第一种

class Home extends Component {
  render(){
    console.log(this.props)
    return(
      <div>
      {this.props.header}
      {this.props.body}
      <Links />
      </div>

    )

  }
}

//第二种 ，这种 我看了下 ，有警告

// const Home = (props) =>
//   <div>
//     {props.header}
//     {props.body}
//     <Links />
//   </div>


class Model_1 extends Component {
  render(){
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          // 使用 多个 路由的方法，可以使用 components
          <IndexRoute components={{header:HomeHeader,body:HomeBody}}/>
          <Route path="about" components={{header:AboutHeader,body:AboutBody}}></Route>
        </Route>
      </Router>
    )
  }
}
const Links = () =>
  <nav>
    <Link to="/" >Home1 </Link>
    <Link to="/about">about2 </Link>
  </nav>
export default Model_1;
