#  老师的网址 这个链接是路由讲解<br> http://guoyongfeng.github.io/idoc/html/React%E8%AF%BE%E7%A8%8B%E4%B8%93%E9%A2%98/React-router%E8%B7%AF%E7%94%B1%E5%AE%9E%E8%B7%B5.html<br>

 1, IndexRoute  路由 默认 路径<br>
 2, Route 中 Components 高级用法  <br>
    例如：<br>
      components={{header:HomeHeader,body:HomeBody}}<br>
 3, 使用query获取URL中的参数<br>
    .1 实现了 Route 中调用 组件 ，this.props.location.query.xxx 来获取 URL 参数<br>
    .2 访问方式  地址栏加   /?name=xxx&passward<br>
    .3 如:    http://localhost:3333/?name=zha&passward=3352<br>
