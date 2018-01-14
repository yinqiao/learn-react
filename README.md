# learn-react
## 参考文档
1. React <https://hulufei.gitbooks.io/react-tutorial/content/jsx.html>


## 基础概念

1. 组件
    * `import React, {Component} from 'react';`
    * props
    * state
        * 无状态的组件(stateless function)
    * <https://reactjs.org/docs/thinking-in-react.html>
    * 组件生命周期
        * getInitialState
        * getDefaultProps
        * componentWillMount
        * componentDidMount
        * componentWillReceiveProps
        * shouldComponentUpdate
        * componentWillUpdate
        * componentDidUpdate
        * componentWillUnmount
    * 事件处理
        * `<p onClick={this.handleClick.bind(this)}> You {text} this. Click to toggle. </p>`
        * “合成事件”和“原生事件”
            * `e.stopProgation()` ===> `e.nativeEvent.stopImmediatePropagation()`
    * DOM操作
        * `findDOMNode()`
        * `this.refs.name`
2. JSX
    * 构建器 ===> babel
    * 组件是和模板紧密关联的，组件模板和组件逻辑分离让问题复杂化了。因此，React 认为组件才是王道，诞生JSX解决此问题。
    * className htmlFor dangerouslySetInnerHTML aria-
    * <Component {...props} foo={'override'} />
    * onChange style
    * <https://reactjs.org/docs/dom-elements.html>
3. Virtual DOM
4. Data Flow
    * 单向数据绑定


## 开发环境

 Grunt / Gulp / Webpack / Broccoli / Parcel
 
 1. 支持JSX
    * babel内置了对JSX的支持
 2. 支持ES6



